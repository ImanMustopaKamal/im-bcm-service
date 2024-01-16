const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const {
  storeMany,
  getAll,
  getById,
  updated,
  deleteById,
} = require("../repositories/call_tree.repository");
const { func } = require("../helpers");
const { nanoid } = require("nanoid");

const validateRow = (row) => {
  if (row["NPP"] === undefined) return false;
  if (row["Kode Organisasi"] === undefined) return false;
  if (row["Nama"] === undefined) return false;
  if (row["Posisi"] === undefined) return false;
  if (row["NPP Atasan"] === undefined) return false;
  if (row["No HP"] === undefined) return false;
  if (row["No Rumah"] === undefined) return false;
  if (row["Alamat"] === undefined) return false;
  if (row["Status Karyawan"] === undefined) return false;

  return true;
};

const validateCsv = (filePath, options) => {
  let data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv.parse({ headers: true, delimiter: ";" }))
      .validate((data, next) => {
        if (!validateRow(data)) {
          throw new Error("Invalid data");
        }
        next(null, data);
      })
      .on("data", async (row) => {
        let payload = {
          id: nanoid(10),
          npp: row["NPP"] ? row["NPP"] : row["ï»¿NPP"],
          name: row["Nama"],
          position: row["Posisi"],
          supervisor_id: row["NPP Atasan"] !== "" ? row["NPP Atasan"] : null,
          tenant_id: options.tenant_id,
          org_id: row["Kode Organisasi"],
          phone_number: row["No HP"],
          phone_home: row["No Rumah"],
          address: row["Alamat"],
          employment_status: row["Status Karyawan"],
          created_by: options.user_id,
        };

        data.push(payload);
      })
      .on("error", (error) => {
        reject(error);
      })
      .on("end", () => {
        resolve(data);
      });
  });
};

const getAllService = async (req, res) => {
  const { pagiante, tenant_id } = res;
  const { query } = req;

  let filter = {
    where: {
      tenant_id,
    },
  };

  if (!func.isNull(query.npp)) {
    filter.where["npp"] = query.npp;
  }

  if (!func.isNull(query.is_supervisor)) {
    if(query.is_supervisor === 'true') {
      filter.where["supervisor_id"] = null;
    }
  }

  if (!func.isNull(query.org_id)) {
    filter.where["org_id"] = query.org_id;
  }
  
  try {
    const results = await getAll(filter, pagiante);

    return results;
  } catch (error) {
    throw new Error("database error");
  }
};

const importService = async (req, res) => {
  const { file } = req;
  const basePath = path.resolve(path.dirname(""));

  try {
    const data = await validateCsv(path.resolve(basePath, file.path), res);
    if (data.length > 0) {
      try {
        data.forEach(async (element) => {
          if (element.supervisor_id !== null) {
            data.filter((item) => item.npp === element.supervisor_id).map((item) => {
              element.supervisor_id = item.id
            });
          }
        });
        
        await storeMany(data);
      } catch (error) {
        fs.unlink(path.resolve(basePath, file.path), (err) => {
          if (err) console.log(err);
        });
        throw new Error("error db");
      }
    }
    return data;
  } catch (error) {
    fs.unlink(path.resolve(basePath, file.path), (err) => {
      if (err) console.log(err);
    });

    throw new Error("error validasi");
  }
};

const getByIdService = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getById(id);
    if (!result) throw new Error("data not found");

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const existingData = await getById(id);
    if (!existingData) throw new Error("data not found");

    const payload = {
      name: body.name,
      position: body.position,
      supervisor_id: body.supervisor_id,
      phone_number: body.phone_number,
      phone_home: body.phone_home,
      address: body.address,
      employment_status: body.employment_status,
      updated_by: res.user_id,
    };

    const result = await updated(id, payload);
    if (!result) throw new Error("data not updated");

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const existingData = await getById(id);
    if (!existingData) throw new Error("data not found");

    const result = await deleteById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const storeService = async (req, res) => {
  const { body } = req;
  const { tenant_id, user_id } = res;
  try {
    const payload = [{
      ...body,
      id: nanoid(10),
      tenant_id,
      created_by: user_id,
    }]

    const result = await storeMany(payload);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllService,
  importService,
  getByIdService,
  updateService,
  deleteService,
  storeService,
};

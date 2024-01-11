const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const { store, getAll } = require("../repositories/call_tree.repository");
const { func } = require("../helpers");

const validateRow = (row) => {
  if (row["NPP"] === undefined) return false;
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
          npp: row["NPP"] ? row["NPP"] : row["ï»¿NPP"],
          name: row["Nama"],
          position: row["Posisi"],
          supervisor_npp: row["NPP Atasan"] !== "" ? row["NPP Atasan"] : null,
          org_id: options.user_id,
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
  console.log(query.npp)
  let filter = {
    where: {
      
    },
  };

  if (!func.isNull(query.npp)) {
    filter.where["npp"] = query.npp;
  }

  if (!func.isNull(query.org_id)) {
    filter.where["org_id"] = query.org_id;
  }
  console.log("filter:", filter)
  try {
    const results = await getAll(filter, pagiante);

    return results; 
  } catch (error) {
    console.log("🚀 ~ file: call_tree.service.js:79 ~ getAllService ~ error:", error)
    throw new Error("database error");
  }
};

const storeService = async (req, res) => {
  const { file } = req;
  const basePath = path.resolve(path.dirname(""));

  try {
    const data = await validateCsv(path.resolve(basePath, file.path), res);
    if (data.length > 0) {
      try {
        await store(data);
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

module.exports = {
  getAllService,
  storeService,
};

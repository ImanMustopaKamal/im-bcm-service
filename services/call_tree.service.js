const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const { store } = require("../repositories/call_tree.repository");

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

module.exports = {
  storeService,
};

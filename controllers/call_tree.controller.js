const { response } = require("../helpers");
const {
  importService,
  getAllService,
  getByIdService,
  updateService,
  deleteService,
  storeService,
} = require("../services/call_tree.service");
const path = require("path");
const SSO = require("../library/sso");

const getData = async (req, res) => {
  try {
    const { dataCount, data } = await getAllService(req, res);

    response.successWithDataCount(res, dataCount, data, "Call Tree SDM retrieved", 200);
  } catch (error) {
    response.error(res, null, "Call Tree SDM failed to retrieve", 500);
  }
};

const downloadData = async (req, res) => {
  const basePath = path.resolve(path.dirname(""));

  res.download(
    path.resolve(
      basePath,
      "resources/static/uploads/TemplateUploadCalltreeSDM.csv"
    )
  );
};

const importData = async (req, res) => {
  try {
    const data = await importService(req, res);

    response.success(res, null, "Call Tree Module is created!", 201);
  } catch (error) {
    response.error(res, null, "Call Tree Module is failed to create!", 500);
  }
};

const getDataById = async (req, res) => {
  try {
    const data = await getByIdService(req, res);

    response.success(res, data, "Call Tree SDM retrieved", 200);
  } catch (error) {
    response.error(
      res,
      null,
      error?.message ?? "Call Tree SDM failed to retrieve",
      500
    );
  }
};

const updateData = async (req, res) => {
  try {
    const data = await updateService(req, res);

    response.success(res, data, "Call Tree SDM updated", 200);
  } catch (error) {
    response.error(
      res,
      null,
      error?.message ?? "Call Tree SDM failed to update",
      500
    );
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await deleteService(req, res);

    response.success(res, data, "Call Tree SDM deleted", 200);
  } catch (error) {
    response.error(res, null, error?.message ?? "Call Tree SDM failed to delete", 500);
  }
}

const storeData = async (req, res) => {
  try {
    
    const data = await storeService(req, res);

    response.success(res, data, "Call Tree SDM stored", 200);
  } catch (error) {
    response.error(res, null, error?.message ?? "Call Tree SDM failed to store", 500);
  }
}

module.exports = {
  getData,
  importData,
  downloadData,
  getDataById,
  updateData,
  storeData,
  deleteData,
};

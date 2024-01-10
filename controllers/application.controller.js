const { response } = require("../helpers");
const { getAllApplications, getAppByID, createApplication, updateApplication, deleteApplication } 
= require("../services/application.service");

const getAll = async (req, res) => {
  const {dataCount, data } = await getAllApplications(req, res);

  response.successWithDataCount(res, dataCount, data, "Application retrieved", 200);
};

const getByID = async (req, res) => {
  const { id } = req.params;
  const tenant_id = res.tenant_id;
  const applications = await getAppByID(tenant_id, id);

  response.success(res, applications, "Application retrieved", 200);
};

const create = async (req, res) => {
  const { body } = req;
  const tenant_id = res.tenant_id;

  const application = await createApplication(tenant_id, body);

  response.success(res, application, "Application created", 201);
};

const updateByID = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const application = await updateApplication(id, body);

  response.success(res, application, "Application Updated", 200);
};

const deleteByID = async (req, res) => {
  const { id } = req.params;
  const application = await deleteApplication(id);

  response.success(res, application, "Application Deleted", 200);
}

module.exports = {
  getAll,
  getByID,
  create,
  updateByID,
  deleteByID
};

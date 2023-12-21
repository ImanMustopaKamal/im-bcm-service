const { jsonFormater } = require("../helpers");
const { getAllApplications, createApplication } = require("../services/application.service");

const getAll = async (req, res) => {
  const applications = await getAllApplications(req, res);

  jsonFormater.success(res, applications, "Application retrieved", 200);
};

const create = async (req, res) => {
  const { body } = req;

  const application = await createApplication(body);

  jsonFormater.success(res, application, "Application created", 201);
};

module.exports = {
  getAll,
  create,
};

const { nanoid } = require("nanoid");
const {
  findApplications,
  storeApplication,
} = require("../repositories/application.repository");

const getAllApplications = async (req, res) => {
  const { pagiante } = res;
  const applications = await findApplications(pagiante);

  return applications;
};

const createApplication = async (body) => {
  const data = {
    ...body,
    id: nanoid(),
  };
  const application = await storeApplication(data);

  return application;
}

module.exports = {
  getAllApplications,
  createApplication
}

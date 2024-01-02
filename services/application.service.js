const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
  findApplications,
  findBy,
  storeApplication,
  changeApplication,
  removeApplication
} = require("../repositories/application.repository");

const getAllApplications = async (req, res) => {
  const { pagiante } = res;
  const { query } = req;

  let filter = {
    where : {}
  };

  if (!func.isNull(query.is_active)) {
    filter.where['is_active'] = query.is_active === 'true';   
  }

  if (!func.isNull(query.code)) {
    const codeFilter = {
      contains : query.code
    };
    filter.where['code'] = codeFilter;
  }

  if (!func.isNull(query.name)) {
    const nameFilter = {
      contains : query.name
    };
    filter.where['name'] = nameFilter;
  }

  const results = await findApplications(filter, pagiante);

  return results;
};

const getAppByID = async (id) => {
  const applications = await findBy("id", id);

  return applications;
};

const createApplication = async (body) => {
  const data = {
    ...body,
    id: nanoid(10),
  };
  const application = await storeApplication(data);

  return application;
}

const updateApplication = async (id, body) => {
  const application = await changeApplication(id, body);

  return application;
}

const deleteApplication = async (id) => {
  const application = await removeApplication(id);

  return application;
}
module.exports = {
  getAllApplications,
  getAppByID,
  createApplication,
  updateApplication,
  deleteApplication
}

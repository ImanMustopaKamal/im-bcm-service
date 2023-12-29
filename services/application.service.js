const { nanoid } = require("nanoid");
const { func } = require("../helpers");
const {
  findApplications,
  findBy,
  storeApplication,
  changeApplication,
  removeApplication,
  countAll
} = require("../repositories/application.repository");

const buildFilter = async(query) => {
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

  return filter;

}

const countByFilter = async (req, res) => {
  const { query } = req;
  const filter = await buildFilter(query);

  const appCount = await countAll(filter);
  return appCount;
}
const getAllApplications = async (req, res) => {
  const { pagiante } = res;
  const { query } = req;

   const filter = await buildFilter(query);
  const applications = await findApplications(filter, pagiante);

  return applications;
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
  deleteApplication,
  countByFilter
}

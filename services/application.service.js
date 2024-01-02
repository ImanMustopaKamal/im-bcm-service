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
  const tenant_id = req.tenant_id;

  let filter = {
    where : {
      "tenant_id" : tenant_id
    }
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

const getAppByID = async (tenant_id, id) => {
  const applications = await findBy(tenant_id, "id", id);

  return applications;
};

const createApplication = async (tenant_id, body) => {
  const data = {
    ...body,
    tenant_id : tenant_id,
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

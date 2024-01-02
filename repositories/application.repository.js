const prisma = require("../config/database");

const findApplications = async (filter, pagiante) => {
  const application = await prisma.applications.findMany({
    ...filter,
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      ['code']: "asc"
    }
  });

  const appCount = await prisma.applications.count({
    ...filter
  });

  return {
    dataCount: appCount,
    data : application
  };
}

const countAll = async (filter) => {
  const appCount = await prisma.applications.count({
    ...filter
  });
  return appCount;
};

const findBy = async (tenant_id, key, value) => {
  const application = await prisma.applications.findUnique({
    where: {
      "tenant_id" : tenant_id,
      [key]: value
    }
  });

  return application;
}

const storeApplication = async (body) => {
  const application = await prisma.applications.create({
    data: body,
  });

  return application;
}

const changeApplication = async (id, body) => {
  const application = await prisma.applications.update({
    where : {
      "id" : id,
    },
    data : body
  });

  return application;
}

const removeApplication = async (id) => {
  const application = await prisma.applications.delete({
    where : {
      "id" : id
    }
  })
  return application;
}

module.exports = {
  findApplications,
  storeApplication,
  findBy,
  changeApplication,
  removeApplication,
  countAll
}
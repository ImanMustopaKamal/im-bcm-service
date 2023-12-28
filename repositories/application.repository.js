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

  return application;
}

const findBy = async (key, value) => {
  const application = await prisma.applications.findUnique({
    where: {
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
  removeApplication
}
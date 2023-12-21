const prisma = require("../config/database");

const findApplications = async (pagiante) => {
  const application = await prisma.applications.findMany({
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      ['name']: "desc"
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

module.exports = {
  findApplications,
  storeApplication,
  findBy
}
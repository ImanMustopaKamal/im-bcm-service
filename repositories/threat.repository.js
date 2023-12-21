const prisma = require("../config/database");

const findAll = async (filter, pagiante) => {
  const threats = await prisma.threat.findMany({
    ...filter,
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      name : "asc"
    }
  });

  return threats;
};
const findBy = async (key, value) => {
  const threats = await prisma.threat.findUnique({
    where: {
      [key]: value,
    },
    include: {
      threat_types: true,
    },
  });

  return threats;
};

const createThreat = async (threat) => {
  const cThreat = await prisma.threat.create({
    data: threat,
  });
  return cThreat;
};
module.exports = {
  findAll,
  findBy,
  createThreat,
};

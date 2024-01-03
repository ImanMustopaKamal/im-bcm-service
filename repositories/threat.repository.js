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

  const threatCount = await prisma.threat.count({
    ...filter
  });

  return {
    dataCount : threatCount,
    data : threats
  };
};

const countThreatByFilter = async (filter) => {
    const thCount = await prisma.threat.count({
        where : filter
    });
    return thCount;
};

const findBy = async (tenant_id, key, value) => {
  const threats = await prisma.threat.findFirst({
    where: {
        "tenant_id" : tenant_id,
        [key]: value
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

const changeThreat = async (id, data) => {
    const cThreat = await prisma.threat.update({
        where : {
            "id" : id
        },
        data: data
    });

    return cThreat;
};

const removeThreat = async (id) => {
    const rmThreat = await prisma.threat.delete({
        where : {
            "id" : id
        }
    });

    return rmThreat;
};

module.exports = {
  findAll,
  findBy,
  createThreat,
  countThreatByFilter,
  changeThreat,
  removeThreat
};

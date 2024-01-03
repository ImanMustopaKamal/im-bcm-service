const prisma = require("../config/database");
const { func } = require("../helpers");

const findAll = async (filter, pagiante) => {
  const threats = await prisma.vw_threat_types.findMany({
    ...filter,
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      name : "asc"
    }
  });

  const threatCount = await prisma.threat_type.count({
    ...filter
  });

  return {
    dataCount: threatCount,
    data: threats,
  };threats;
};

const findBy = async (tenant_id, key, value) => {
  const threats = await prisma.threat_type.findFirst({
    where: {
        "tenant_id" : tenant_id,
        [key]: value
    }
  });

  return threats;
};

const storeThreatTypes = async(data) => {
    const th_types = await prisma.threat_type.create({
        data : data
    });

    return th_types;
};

const changeThreatTypes = async(id, data) => {
    const threat = await prisma.threat_type.update({
        where : {
            "id" : id
        }, 
        data : data
    });

    return threat;
};

const removeThreatTypes = async(id) => {
    const th_types = await prisma.threat_type.delete({
        where : {
            id : id
        }
    });

    return th_types;
};

module.exports = {
  findAll,
  findBy,
  storeThreatTypes,
  removeThreatTypes,
  changeThreatTypes
};

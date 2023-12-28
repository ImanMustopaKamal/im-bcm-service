const prisma = require("../config/database");

const countAll = async (filter) => {
  const thCount = prisma.threat_type.count({
    ...filter
  })

  return thCount;
};
const findAll = async (filter, pagiante) => {
  const threats = await prisma.threat_type.findMany({
    ...filter,
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      name : "asc"
    },
    include : {
      threats : {
        select : {
          id : true
        }
      }
    }
  });

  return threats;
};

const findBy = async (key, value) => {
  const threats = await prisma.threat_type.findUnique({
    where: {
      [key]: value,
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
  changeThreatTypes,
  countAll
};

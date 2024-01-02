const prisma = require("../config/database");

const findAll = async (filter) => {
    const iu = await prisma.Indirect_Unit.findMany({
      ...filter,
      orderBy: {
        sort_order : "asc"
      }
    });
  
    return iu;
  };

  const findBy = async (tenant_id, key, value) => {
    const iu = await prisma.Indirect_Unit.findUnique({
        where : {
          "tenant_id" : tenant_id,
            [key] : value
        }
    });

    return iu;
  };

  module.exports = {
    findAll, findBy
  }
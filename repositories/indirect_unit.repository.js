const prisma = require("../config/database");

const findAll = async (filter) => {
    const iu = await prisma.indirect_Unit.findMany({
      ...filter,
      orderBy: {
        sort_order : "asc"
      }
    });
  
    return iu;
  };

  const findBy = async (tenant_id, key, value) => {
    const iu = await prisma.indirect_Unit.findFirst({
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
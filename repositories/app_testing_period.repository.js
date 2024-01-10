const prisma = require("../config/database");

const findAll = async (filter) => {
    const atp = await prisma.App_Testing_Period.findMany({
      ...filter,
      orderBy: {
        sort_order : "asc"
      }
    });
  
    return atp;
  };

  const findBy = async (tenant_id, key, value) => {
    const atp = await prisma.App_Testing_Period.findUnique({
        where : {
          "tenant_id" : tenant_id,
            [key] : value
        }
    });

    return atp;
  };

  module.exports = {
    findAll, findBy
  }
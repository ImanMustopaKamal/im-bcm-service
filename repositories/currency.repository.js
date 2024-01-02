const prisma = require("../config/database");

const findAll = async (filter) => {
    const curr = await prisma.currency.findMany({
      ...filter,
      orderBy: [
        { sort_order : "asc" },
        { code : "asc" }
      ]
    });
  
    return curr;
  };

  const findBy = async (tenant_id, key, value) => {
    const curr = await prisma.currency.findUnique({
        where : {
          "tenant_id" : tenant_id,
            [key] : value
        }
    });

    return curr;
  };

  module.exports = {
    findAll, findBy
  }
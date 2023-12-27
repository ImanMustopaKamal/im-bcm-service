const prisma = require("../config/database");

const findAll = async (filter) => {
    const sc = await prisma.Staff_Condition.findMany({
      ...filter,
      orderBy: {
        sort_order : "asc"
      }
    });
  
    return sc;
  };

  const findBy = async (key, value) => {
    const sc = await prisma.Staff_Condition.findUnique({
        where : {
            [key] : value
        }
    });

    return sc;
  };

  module.exports = {
    findAll, findBy
  }
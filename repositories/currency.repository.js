const prisma = require("../config/database");

const findAll = async (filter) => {
    const curr = await prisma.currency.findMany({
      ...filter,
      orderBy: {
        sort_order : "asc",
        code : "asc"
      }
    });
  
    return curr;
  };

  const findBy = async (key, value) => {
    const curr = await prisma.currency.findUnique({
        where : {
            [key] : value
        }
    });

    return curr;
  };

  module.exports = {
    findAll, findBy
  }
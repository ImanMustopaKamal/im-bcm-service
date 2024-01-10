const prisma = require("../config/database");

const getAll = async (filter, pagiante) => {
  const application = await prisma.call_tree_sdm.findMany({
    ...filter,
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      ["npp"]: "asc",
    },
  });

  const appCount = await prisma.call_tree_sdm.count({
    ...filter,
  });

  return {
    dataCount: appCount,
    data: application,
  };
};

const store = async (callTree) => {
  const data = await prisma.call_tree_sdm.createMany({
    data: callTree,
  });

  return data;
};

module.exports = {
  getAll,
  store,
};

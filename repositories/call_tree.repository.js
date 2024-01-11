const prisma = require("../config/database");

const getAll = async (filter, pagiante) => {
  const application = await prisma.call_tree_sdm.findMany({
    ...filter,
    take: pagiante.limit,
    skip: pagiante.offset,
    orderBy: {
      ["created_at"]: "desc",
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

const storeMany = async (callTree) => {
  try {
    const data = await prisma.call_tree_sdm.createMany({
      data: callTree,
    });
  
    return data;
  } catch (error) {
    throw new Error('data not created');
  }
};

const getById = async (id) => {
  const data = await prisma.call_tree_sdm.findUnique({
    where: {
      id,
    },
  });

  return data;
};

const updated = async (id, payload) => {
  const data = await prisma.call_tree_sdm.update({
    where: {
      id,
    },
    data: payload,
  });

  return data;
};

const deleteById = async (id) => {
  try {
    const data = await prisma.call_tree_sdm.delete({
      where: {
        id,
      },
    });
  
    return data;
  } catch (error) {
    throw new Error('data not deleted');
  }
};

const getByFilter = async (filter) => {
  const data = await prisma.call_tree_sdm.findFirst({
    // where: {
      ...filter,
    // },
  });

  return data;
};

module.exports = {
  getAll,
  storeMany,
  getById,
  updated,
  deleteById,
  getByFilter,
};

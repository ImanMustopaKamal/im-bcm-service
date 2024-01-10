const prisma = require("../config/database");

const store = async (callTree) => {
  const data = await prisma.call_tree_sdm.createMany({
    data: callTree,
  });

  return data;
};

module.exports = {
  store,
}
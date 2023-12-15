const prisma = require("../config/database");

const findProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

module.exports = {
  findProducts,
}
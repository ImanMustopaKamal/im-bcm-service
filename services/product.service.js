const {
  findProducts
} = require("../repositories/product.repository");

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
};

module.exports = {
  getAllProducts
};

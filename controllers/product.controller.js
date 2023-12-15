const {
  getAllProducts,
} = require("../services/product.service");

const get = async (req, res) => {
  const products = await getAllProducts();

  res.send(products);
};

module.exports = {
  get,
}
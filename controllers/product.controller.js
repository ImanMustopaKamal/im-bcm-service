const {
  getAllProducts,
} = require("../services/product.service");
const { jsonFormater } = require("../helpers");

const get = async (req, res) => {
  const { pages, pagiante } = res;
  console.log(pages, pagiante);
  const products = await getAllProducts();

  jsonFormater.success(res, products, "Product retrieved");
};

module.exports = {
  get,
}
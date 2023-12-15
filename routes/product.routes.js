const { productMiddleware } = require("../middlewares/product");
const products = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/products", [productMiddleware], products.get);
};

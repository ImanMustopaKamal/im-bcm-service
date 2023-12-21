const { productMiddleware, pagination } = require("../middlewares");
const products = require("../controllers/product.controller");

module.exports = (app) => {
  app.get(
    "/products",
    [productMiddleware.productMiddleware, pagination.pagiantion],
    products.get
  );
};

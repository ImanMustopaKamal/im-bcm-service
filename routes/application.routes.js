const { getAll, create } = require("../controllers/application.controller");
const { pagination } = require("../middlewares");

module.exports = (app) => {
  app.get("/applications", [pagination.pagiantion], getAll);
  app.post("/applications", create);
};

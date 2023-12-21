const { getAll, create } = require("../controllers/application.controller");
const { pagination, applicationMiddleware } = require("../middlewares");

module.exports = (app) => {
  app.get("/applications", [pagination.pagiantion], getAll);
  app.post(
    "/applications",
    [applicationMiddleware.createValidator],
    create
  );
};

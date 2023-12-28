const { getAll, getByID, create, updateByID, deleteByID } = require("../controllers/application.controller");
const { pagination, applicationMiddleware } = require("../middlewares");

module.exports = (app) => {
  app.get("/applications", [pagination.pagiantion], getAll);
  app.get("/applications/:id", getByID);
  app.post("/applications",
    [applicationMiddleware.createValidator],
    create
  );
  app.put("/applications/:id", [applicationMiddleware.updateValidator], updateByID);
  app.delete("/applications/:id", [applicationMiddleware.deleteValidator], deleteByID);
};

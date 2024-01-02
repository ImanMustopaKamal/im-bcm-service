const { getAll, getByID, create, updateByID, deleteByID } = require("../controllers/application.controller");
const { pagination, applicationMiddleware, authMiddleware } = require("../middlewares");

module.exports = (app) => {
  app.get("/applications", [authMiddleware.authToken, pagination.pagiantion], getAll);
  app.get("/applications/:id", [authMiddleware.authToken], getByID);
  app.post("/applications",
    [authMiddleware.authToken, applicationMiddleware.createValidator],
    create
  );
  app.put("/applications/:id", [authMiddleware.authToken, applicationMiddleware.updateValidator], updateByID);
  app.delete("/applications/:id", [authMiddleware.authToken, applicationMiddleware.deleteValidator], deleteByID);
};

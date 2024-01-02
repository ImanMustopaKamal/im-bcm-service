const { pagination, threatTypeMiddleware, threatMiddleware, authMiddleware } = require("../middlewares");
const threats = require("../controllers/threat.controller");
const threat_types = require("../controllers/threat_type.controller");

module.exports = (app) => {
  app.get("/threat_types", [authMiddleware.authToken, pagination.pagiantion], threat_types.get);
  app.get("/threat_types/:id", [authMiddleware.authToken], threat_types.getByID);
  app.post("/threat_types/add", [authMiddleware.authToken, threatTypeMiddleware.createValidator], threat_types.create);
  app.put("/threat_types/:id", [authMiddleware.authToken, threatTypeMiddleware.updateValidator], threat_types.updateThType);
  app.delete("/threat_types/:id", [authMiddleware.authToken, threatTypeMiddleware.deleteValidator], threat_types.deleteThType);

  app.get("/threats", [authMiddleware.authToken, pagination.pagiantion], threats.get);
  app.get("/threats/:id", [authMiddleware.authToken], threats.getByID);
  app.post("/threats/add",[authMiddleware.authToken, threatMiddleware.createValidator], threats.addThreat);
  app.put("/threats/:id", [authMiddleware.authToken, threatMiddleware.updateValidator], threats.updateTh);
  app.delete("/threats/:id", [authMiddleware.authToken, threatMiddleware.deleteValidator], threats.deleteTh);
};

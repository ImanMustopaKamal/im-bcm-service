const { pagination, threatTypeMiddleware, threatMiddleware } = require("../middlewares");
const threats = require("../controllers/threat.controller");
const threat_types = require("../controllers/threat_type.controller");

module.exports = (app) => {
  app.get("/threat_types", [pagination.pagiantion], threat_types.get);
  app.get("/threat_types/:id", threat_types.getByID);
  app.post("/threat_types/add", [threatTypeMiddleware.createValidator], threat_types.create);
  app.put("/threat_types/:id", [threatTypeMiddleware.updateValidator], threat_types.updateThType);
  app.delete("/threat_types/:id", [threatTypeMiddleware.deleteValidator], threat_types.deleteThType);

  app.get("/threats", [pagination.pagiantion], threats.get);
  app.get("/threats/:id", threats.getByID);
  app.post("/threats/add",[threatMiddleware.createValidator], threats.addThreat);
  app.put("/threats/:id", [threatMiddleware.updateValidator], threats.updateTh);
  app.delete("/threats/:id", [threatMiddleware.deleteValidator], threats.deleteTh);
};

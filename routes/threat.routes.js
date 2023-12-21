const { pagination, threatTypeMiddleware } = require("../middlewares");
const threats = require("../controllers/threat.controller");
const threat_types = require("../controllers/threat_type.controller");

module.exports = (app) => {
  app.get("/threat_types", [pagination.pagiantion], threat_types.get);
  app.get("/threat_types/:id", threat_types.getByID);
  app.post("/threat_types/add", [threatTypeMiddleware.createValidator], threat_types.create);

  app.get("/threats", [pagination.pagiantion], threats.get);
  app.get("/threats/:id", threats.getByID);
  //app.get("/threats/:id", threats.getByID);
  //app.put("/threat/add", [threatMiddleware], threats.addThreat);
};

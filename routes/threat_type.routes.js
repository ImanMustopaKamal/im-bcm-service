const { threatMiddleware } = require("../middlewares/threat");
const threats = require("../controllers/threat_type.controller");

module.exports = (app) => {
  app.get("/threat_types?", [threatMiddleware], threats.get);
  app.get("/threat_type/:id", [threatMiddleware], threats.getByID);
  app.post("/threat_type/add", [threatMiddleware], threats.addThreat);
  app.put('/threat_type/:id', [threatMiddleware], threats.updateThreat);
  app.delete('/threat_type/:id', [threatMiddleware], threats.deleteThreat);
};
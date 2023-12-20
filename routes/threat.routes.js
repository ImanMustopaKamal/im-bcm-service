const { threatMiddleware } = require("../middlewares/threat");
const threats = require("../controllers/threat.controller");

module.exports = (app) => {
  app.get("/threats?", [threatMiddleware], threats.get);
  app.get("/threat/:id", [threatMiddleware], threats.getByID);
  app.post("/threat/add", [threatMiddleware], threats.addThreat);
  app.put('/threat/:id', [threatMiddleware], threats.updateThreat);
  app.delete('/threat/:id', [threatMiddleware], threats.deleteThreat);
};
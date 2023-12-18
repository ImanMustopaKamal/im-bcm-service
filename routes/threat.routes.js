const { threatMiddleware } = require("../middlewares/threat");
const threats = require("../controllers/threat.controller");

module.exports = (app) => {
  app.get("/threats/:type_id?/:name?", [threatMiddleware], threats.get);
  app.get("/threat/:id", [threatMiddleware], threats.getByID);
  app.put("/threat/add", [threatMiddleware], threats.addThreat);
};

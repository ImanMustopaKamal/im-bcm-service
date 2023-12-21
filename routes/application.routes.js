const { pagination } = require("../middlewares");
const apps = require("../controllers/application.controller");

module.exports = (app) => {
  app.get("/applications?", [pagination.pagiantion], apps.get);
  app.get("/application/:id", apps.getByID);
  app.post("/application/add", apps.addApps);
  app.put("/application/:id", apps.update);
  app.delete("/application/:id", apps.deleteAp);
};

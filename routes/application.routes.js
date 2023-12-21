const { appMiddleware } = require("../middlewares/application");
const apps = require("../controllers/application.controller");

module.exports = (app) => {
  app.get("/applications?", [appMiddleware], apps.get);
  app.get("/application/:id", [appMiddleware], apps.getByID);
  app.post("/application/add", [appMiddleware], apps.addApps);
  app.put("/application/:id", [appMiddleware], apps.update);
  app.delete("/application/:id", [appMiddleware], apps.deleteAp);
};

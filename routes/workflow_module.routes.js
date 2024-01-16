const { authMiddleware, pagination, wfModuleMiddleware } = require("../middlewares");
const { addWfModule, get, getBy, update, deleteWfModule } = require("../controllers/workflow_module.controller");

module.exports = (app) => {
    app.post("/workflow_module/add", [authMiddleware.authToken, wfModuleMiddleware.createValidator], addWfModule);
    app.get("/workflow_module/:id",[authMiddleware.authToken], getBy);
    app.get("/workflow_module",[authMiddleware.authToken, pagination.pagiantion], get);
    app.put("/workflow_module/:id",[authMiddleware.authToken, wfModuleMiddleware.updateDeleteValidator], update);
    app.delete("/workflow_module/:id",[authMiddleware.authToken, wfModuleMiddleware.updateDeleteValidator], deleteWfModule);
}

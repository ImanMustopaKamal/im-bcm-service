const { authMiddleware, pagination } = require("../middlewares");
const { addWfModule, get, getBy, update, deleteWfModule } = require("../controllers/workflow_module.controller")

module.exports = (app) => {
    app.post("/workflow_module/add", [authMiddleware.authToken], addWfModule);
    app.get("/wowkflow_module/:code",[authMiddleware.authToken], getBy);
    app.get("/wowkflow_module",[authMiddleware.authToken, pagination.pagiantion], get);
    app.put("/workflow_module/:code",[authMiddleware.authToken], update);
    app.delete("/workflow_module/:code",[authMiddleware.authToken], deleteWfModule);
}

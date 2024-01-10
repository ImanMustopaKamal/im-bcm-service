const { authMiddleware, pagination, wfLevelMiddleware } = require("../middlewares");
const { addNew, get, getBy, update, deleteByID } = require("../controllers/workflow_level.controller");

module.exports = (app) => {
    app.post("/workflow_level/add", [authMiddleware.authToken, wfLevelMiddleware.createValidator], addNew);
    app.get("/workflow_level/:id",[authMiddleware.authToken], getBy);
    app.get("/workflow_level",[authMiddleware.authToken, pagination.pagiantion], get);
    app.put("/workflow_level/:id",[authMiddleware.authToken, wfLevelMiddleware.updateDeleteValidator], update);
    app.delete("/workflow_level/:id",[authMiddleware.authToken, wfLevelMiddleware.updateDeleteValidator], deleteByID);
};
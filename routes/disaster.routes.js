const { addDisaster, getByID, getAllDisasters } = require("../controllers/disaster.controller");
const { authMiddleware, pagination } = require("../middlewares")

module.exports = (app) => {
    app.get("/disaster/:id", [authMiddleware.authToken], getByID);
    app.get("/disaster", [authMiddleware.authToken, pagination.pagiantion], getAllDisasters);
    app.post("/disaster/create", [authMiddleware.authToken], addDisaster);
};
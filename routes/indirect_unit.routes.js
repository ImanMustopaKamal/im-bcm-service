const { get, getByID } = require("../controllers/indirect_unit.controller");
const { authMiddleware } = require("../middlewares")

module.exports = (app) => {
    app.get("/indirect_unit", [authMiddleware.authToken], get);
    app.get("/indirect_unit/:id", [authMiddleware.authToken], getByID);
};
const { get, getByCode} = require("../controllers/currency.controller");
const { authMiddleware } = require("../middlewares")

module.exports = (app) => {
    app.get("/currency", [authMiddleware.authToken], get);
    app.get("/currency/:code", [authMiddleware.authToken], getByCode);
};
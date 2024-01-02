const staff_condition = require("../controllers/app_testing_period.controller");
const { authMiddleware } = require("../middlewares")

module.exports = (app) => {
    app.get("/app_testing_period", [authMiddleware.authToken], staff_condition.get);
    app.get("/app_testing_period/:code", [authMiddleware.authToken], staff_condition.getByCode);
};
const staff_condition = require("../controllers/app_testing_period.controller");

module.exports = (app) => {
    app.get("/app_testing_period", staff_condition.get);
    app.get("/app_testing_period/:code", staff_condition.getByCode);
};
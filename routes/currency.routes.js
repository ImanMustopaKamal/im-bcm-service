const staff_condition = require("../controllers/currency.controller");

module.exports = (app) => {
    app.get("/currency", staff_condition.get);
    app.get("/currency/:code", staff_condition.getByCode);
};
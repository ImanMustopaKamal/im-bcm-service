const staff_condition = require("../controllers/indirect_unit.controller");

module.exports = (app) => {
    app.get("/indirect_unit", staff_condition.get);
    app.get("/indirect_unit/:id", staff_condition.getByID);
};
const staff_condition = require("../controllers/staff_condition.controller");

module.exports = (app) => {
    app.get("/staff_condition", staff_condition.get);
    app.get("/staff_condition/:id", staff_condition.getByID);
};
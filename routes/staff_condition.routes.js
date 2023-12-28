const { get, getByID } = require("../controllers/staff_condition.controller");

module.exports = (app) => {
    app.get("/staff_condition", get);
    app.get("/staff_condition/:id", getByID);
};
const { get, getByID } = require("../controllers/staff_condition.controller");
const { authMiddleware } = require("../middlewares")

module.exports = (app) => {
    app.get("/staff_condition",[authMiddleware.authToken], get);
    app.get("/staff_condition/:id", [authMiddleware.authToken], getByID);
};
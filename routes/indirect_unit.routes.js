const { get, getByID } = require("../controllers/indirect_unit.controller");

module.exports = (app) => {
    app.get("/indirect_unit", get);
    app.get("/indirect_unit/:id", getByID);
};
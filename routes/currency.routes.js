const { get, getByCode} = require("../controllers/currency.controller");

module.exports = (app) => {
    app.get("/currency", get);
    app.get("/currency/:code", getByCode);
};
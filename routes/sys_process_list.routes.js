const { getAllProcess } = require("../controllers/sys_process_list.controller")
const { authMiddleware } = require("../middlewares")
module.exports = (app) => {
    app.get("/sys_process", [authMiddleware.authToken], getAllProcess);
};
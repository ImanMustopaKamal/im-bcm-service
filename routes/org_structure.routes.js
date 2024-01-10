const { pagination, authMiddleware, orgStructureMiddleware } = require("../middlewares");
const { addStructure, updateByID, deleteByID, getByID, getAll } = require("../controllers/org_structure.controller");

module.exports = (app) => {
    app.get("/org_structure", [authMiddleware.authToken, pagination.pagiantion], getAll);
    app.get("/org_structure/:id", [authMiddleware.authToken], getByID);
    app.post("/org_structure/add", [authMiddleware.authToken, orgStructureMiddleware.createValidator], addStructure);
    app.put("/org_structure/:id", [authMiddleware.authToken], updateByID);
    app.delete("/org_structure/:id", [authMiddleware.authToken, orgStructureMiddleware.deleteValidator], deleteByID);
};
const { callTreeMiddleware } = require("../middlewares/call_tree_sdm");
const call_tree = require("../controllers/call_tree_sdm.controller");

module.exports = (app) => {
  app.get("/call_tree_sdm", [callTreeMiddleware], call_tree.get);
};

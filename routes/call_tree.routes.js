const {
  fileMiddleware,
  callTreeMiddleware,
  authMiddleware,
  pagination,
} = require("../middlewares");
const callTreeController = require("../controllers/call_tree.controller");

module.exports = (app) => {
  app.get(
    "/call-tree",
    [authMiddleware.authToken, pagination.pagiantion],
    callTreeController.getData
  );
  app.post(
    "/call-tree",
    fileMiddleware.upload,
    [authMiddleware.authToken, callTreeMiddleware.createValidator],
    callTreeController.storeData
  );
};

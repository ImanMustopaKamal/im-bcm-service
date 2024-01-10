const { fileMiddleware, callTreeMiddleware, authMiddleware } = require("../middlewares");
const callTreeController = require("../controllers/call_tree.controller");

module.exports = (app) => {
  app.post(
    "/call-tree",
    fileMiddleware.upload.single("file"),
    [authMiddleware.authToken, callTreeMiddleware.createValidator],
    callTreeController.storeData
  );
};

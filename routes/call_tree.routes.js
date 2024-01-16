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
  app.get("/call-tree/download", callTreeController.downloadData);
  app.get(
    "/call-tree/:id",
    [authMiddleware.authToken],
    callTreeController.getDataById
  );
  app.post(
    "/call-tree/import",
    fileMiddleware.upload,
    [authMiddleware.authToken, callTreeMiddleware.importValidator],
    callTreeController.importData
  );
  app.post(
    "/call-tree",
    [authMiddleware.authToken, callTreeMiddleware.createValidator],
    callTreeController.storeData
  );
  app.put(
    "/call-tree/:id",
    [authMiddleware.authToken, callTreeMiddleware.updateValidator],
    callTreeController.updateData
  );
  app.delete(
    "/call-tree/:id",
    [authMiddleware.authToken],
    callTreeController.deleteData
  );
};

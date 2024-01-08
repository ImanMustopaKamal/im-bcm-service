const fileUpload = require('../controllers/file.controller');
module.exports = (app) => {
    app.post("/upload?", fileUpload.upload);
    app.get("/files", fileUpload.getListFiles);
    app.get("/files/:name", fileUpload.download);
};
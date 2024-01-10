const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    const dir = "./resources/static/uploads/csv";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = {
  upload,
};
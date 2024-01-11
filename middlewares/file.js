const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./resources/static/uploads/csv",
  // destination: (_req, file, cb) => {
  //   const dir = "./resources/static/uploads/csv";
  //   if (!fs.existsSync(dir)) {
  //     fs.mkdirSync(dir, { recursive: true });
  //   }
  //   cb(null, dir);
  // },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fields: 5,
    fieldNameSize: 50, // TODO: Check if this size is enough
    fieldSize: 20000, //TODO: Check if this size is enough
    // TODO: Change this line after compression
    fileSize: 15000000, // 150 KB for a 1080x1080 JPG 90
  },
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

function checkFileType(file, cb) {
  // Allowed ext
  // const filetypes = /csv|jpg|png|gif/;
  const filetypes = /csv|xlxs|xls/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null, true);
  } else {
    return cb(null, false);
  }
}

module.exports = {
  upload,
};

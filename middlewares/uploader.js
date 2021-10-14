const multer = require('multer');

// Multer Middleware

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    const fileExt = file.fieldname + '_' + Date.now() + '_' + file.originalname
    cb(null, fileExt);
  },
});

module.exports = uploads = multer({
  storage,
}).single('image');

const multer = require('multer');

// Multer Middleware

let storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const fileExt = file.fieldname + '_' + Date.now() + '_' + file.originalname
    cb(null, fileExt);
  },
});

let uploads = multer({
  storage,
}).single('image');

module.exports = uploads;
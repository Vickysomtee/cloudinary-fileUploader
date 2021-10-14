const express = require("express");
const router  = express.Router();

const uploadController = require("../controllers/upload");
const uploader = require('../middlewares/uploader');

router.post('/', uploader, uploadController.postUploads);

module.exports = router;
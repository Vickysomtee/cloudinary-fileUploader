const cloudinary = require('../config/cloudinaryConfig');

exports.postUploads = async (req, res, next) => {
  const filePath = req.file.path;
  try {
    await cloudinary.uploads(filePath)
    res.status(200).json({message: "Image Uploaded Succesfully"});
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}


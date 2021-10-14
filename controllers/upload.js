

exports.postUploads = (req, res, next) => {
  try {
    res.status(200).json({message: "Image Uploaded Succesfully"});
    console.log(image)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}
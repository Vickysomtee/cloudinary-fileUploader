require('dotenv').config()
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.uploads = async (file )=> {

  const fileName = file.original_filename;

  return cloudinary.uploader.upload(file, {
    resource_type: 'auto',
    public_id: fileName,
  }). then(result => {
    console.log(result)
  })
}

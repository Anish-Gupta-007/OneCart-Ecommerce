import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudnary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret, // Click 'View API Keys' above to copy your API secret
  });
  try {
    if (!filePath) {
      return null;
    }
    const uploadResult = await cloudinary.uploader.upload(filePath);
    fs.unlinkSync(filePath);
    return uploadResult.secure_url;
  } catch (err) {
    fs.unlinkSync(filePath);
    console.log(err);
  }
};

export default uploadOnCloudnary;

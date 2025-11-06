import fs from "fs";

import { v2 as cloudinary } from "cloudinary";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });
});

const uploadOnCloudinray = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file has been uploaded successfull
    console.log("file is uplaoded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the lacally
    //      saved temporary file as the upload operation got
    //      got failed.
    return null;
  }
};


  export {uploadOnCloudinray}

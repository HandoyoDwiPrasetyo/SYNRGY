// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dnrbxdpyz", // TODO: Ganti dengan cloudname-mu
  api_key: "292782888417717", // TODO: Ganti dengan API Key-mu
  api_secret: "ahqzaPFOifJeQ3xdJR7lBUR7gNA", // TODO: Ganti dengan API Secret-mu
  secure: true,
});

module.exports = cloudinary;

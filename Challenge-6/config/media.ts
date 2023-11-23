import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

class Media {
  private _upload;
  // private _storage;
  constructor() {
    this._upload = multer({ storage: multer.memoryStorage() });
    cloudinary.config({
      cloud_name: "dnrbxdpyz",
      api_key: "292782888417717",
      api_secret: "ahqzaPFOifJeQ3xdJR7lBUR7gNA",
    });
  }

  get upload() {
    return this._upload;
  }

  get storage() {
    return cloudinary;
  }
}

export default new Media();

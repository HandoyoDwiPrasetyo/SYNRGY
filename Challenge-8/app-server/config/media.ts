import { v2 as cloudinary } from "cloudinary";
import multer from "multer";

class Media {
  private _upload;
  private _storage;
  constructor() {
    this._upload = multer({ storage: multer.memoryStorage() });
    cloudinary.config({
      cloud_name: "dnrbxdpyz",
      api_key: "292782888417717",
      api_secret: "ahqzaPFOifJeQ3xdJR7lBUR7gNA",
    });
    this._storage = cloudinary;
  }

  get upload() {
    return this._upload;
  }

  get storage() {
    return this._storage;
  }
}

export default new Media();

import { Router } from "express";
import ControllerCars from "../../controllers/api/ControllerCars";
import media from "../../config/media";
import MiddlewareAuth from "../../middlewares/Auth";

class ApiCars {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  routes() {
    // add auth
    this.router.get("/", MiddlewareAuth.authorizeAdmin, ControllerCars.list);
    this.router.get("/:id", MiddlewareAuth.authorizeAdmin, ControllerCars.show);
    this.router.post(
      "/",
      media.upload.single("image"),
      MiddlewareAuth.authorizeAdmin,
      ControllerCars.create
    );
    this.router.put(
      "/:id",
      MiddlewareAuth.authorizeAdmin,
      media.upload.single("image"),
      ControllerCars.update
    );
    this.router.delete(
      "/:id",
      MiddlewareAuth.authorizeAdmin,
      ControllerCars.remove
    );

    return this.router;
  }
}

export default new ApiCars();

import { Router } from "express";
import ControllerAuth from "../../controllers/api/ControllerAuth";

import MiddlewareAuth from "../../middlewares/Auth";

class ApiAuth {
  private router: Router;
  constructor() {
    this.router = Router();
  }

  routes() {
    // Login
    this.router.post("/login", ControllerAuth.login);

    // Register
    this.router.post(
      "/register-admin",
      MiddlewareAuth.authorizeSuperAdmin,
      ControllerAuth.registerAdmin
    );

    return this.router;
  }
}

export default new ApiAuth();

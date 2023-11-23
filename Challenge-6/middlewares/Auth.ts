import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUsers } from "../models/Users";

class Auth {
  constructor() {}
  authorize(req: Request, res: Response, next: NextFunction) {
    next();
  }

  async authorizeSuperAdmin(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers;

    if (!headers.authorization) {
      return res.status(403).json({
        message: "not authorized",
      });
    }

    const token = req.headers.authorization;
    console.log("token = ", token);

    const userData = jwt.verify(`${token}`, "RENTAL_BOOK_JWT_KEY") as IUsers;
    console.log("userData = ", userData);

    if (!(userData.role === "superadmin")) {
      return res.status(403).json({
        data: "not authorized, only superadmin role",
      });
    }

    next();
  }

  async authorizeAdmin(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers;

    if (!headers.authorization) {
      return res.status(403).json({
        message: "not authorized",
      });
    }

    const token = req.headers.authorization;
    console.log("token = ", token);

    const userData = jwt.verify(`${token}`, "RENTAL_BOOK_JWT_KEY") as IUsers;
    console.log("userData = ", userData);

    if (!(userData.role === "superadmin" || userData.role === "admin")) {
      return res.status(403).json({
        data: "not authorized, only superadmin role",
      });
    }

    next();
  }
}

export default new Auth();

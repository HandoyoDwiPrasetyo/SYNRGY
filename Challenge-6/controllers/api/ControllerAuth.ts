import { Request, Response } from "express";
import ServiceAuth, { TLoginPayload } from "../../services/ServiceAuth";
import { IUsers } from "../../models/Users";

class ControllerAuth {
  constructor() {}

  async login(req: Request, res: Response) {
    const payload: TLoginPayload = {
      username: req.body.username,
      password: req.body.password,
    };

    try {
      const response = await ServiceAuth.login(payload);
      if (!response.success) {
        return res.status(403).json({
          data: response.data,
        });
      }

      const token = ServiceAuth.generateToken(response.data as IUsers);

      res.status(200).json({
        message: "Access Token",
        success: true,
        code: 200,
        data: {
          access_token: token,
        },
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  // register admin
  async registerAdmin(req: Request, res: Response) {
    try {
      await ServiceAuth.register({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: "admin",
      });

      res.status(201).json({
        message: "create admin success",
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed create admin",
      });
    }
  }
}

export default new ControllerAuth();

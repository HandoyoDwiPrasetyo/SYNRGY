import { NextFunction, Request, Response } from 'express';
import ServiceAuth from '../../services/ServiceAuth';
import ResponseBuilder from '../../utils/ResponseBuilder';
class ControllerAuth {
  private _serviceAuth: ServiceAuth;

  constructor(serviceAuth: ServiceAuth) {
    this._serviceAuth = serviceAuth;
  }

  login() {
    const auth = this._serviceAuth;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await auth.login({
          username: req.body.username,
          password: req.body.password,
        });

        return ResponseBuilder.response(res, 200, response, 'login success');
      } catch (error) {
        next(error);
      }
    };
  }

  registerAdmin() {
    const auth = this._serviceAuth;
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await auth.register({
          email: req.body.email,
          password: req.body.password,
          role: 'admin',
          username: req.body.username,
        });

        return ResponseBuilder.response(res, 201, response);
      } catch (error) {
        next(error);
      }
    };
  }
}

export default ControllerAuth;

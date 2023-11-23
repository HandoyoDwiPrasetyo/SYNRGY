import { Request, Response } from 'express';
import { IRestController } from '../../interfaces/IRest';
import ServiceBooks from '../../services/ServiceBooks';

class ControllerBooks implements IRestController {
  constructor() {}
  async list(req: Request, res: Response) {
    try {
      const response = await ServiceBooks.list();
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }
  async show(req: Request, res: Response) {}
  async create(req: Request, res: Response) {}
  async remove(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
}

export default new ControllerBooks();

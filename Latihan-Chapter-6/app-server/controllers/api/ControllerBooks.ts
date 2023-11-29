import { NextFunction, Request, Response } from "express";
import { IRestController } from "../../interfaces/IRest";
import ServiceBooks from "../../services/ServiceBooks";
import { IUsers } from "../../models/Users";
import { IBooks } from "../../models/Books";
import { IRequestWithAuth } from "../../middlewares/Auth";
import ResponseBuilder from "../../utils/ResponseBuilder";

class ControllerBooks {
  private _serviceBooks: ServiceBooks;

  constructor(serviceBooks: ServiceBooks) {
    this._serviceBooks = serviceBooks;
  }

  create() {
    const serviceBooks = this._serviceBooks;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        serviceBooks.setUser = req.user as IUsers;

        const databook = req.body as IBooks;
        console.log(databook.title);

        const result = await serviceBooks.create(req.body as IBooks);

        return ResponseBuilder.response(
          res,
          201,
          result,
          "success create a new book"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  update() {
    const serviceBooks = this._serviceBooks;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        const id = req.params?.id;
        serviceBooks.setUser = req.user as IUsers;

        const result = await serviceBooks.update(id, req.body as IBooks);
        return ResponseBuilder.response(
          res,
          200,
          result,
          "success update a book"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  list() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await this._serviceBooks.list();

        return ResponseBuilder.response(
          res,
          200,
          result,
          "success fetch books"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  remove() {
    const serviceBooks = this._serviceBooks;
    return async (req: IRequestWithAuth, res: Response, next: NextFunction) => {
      try {
        serviceBooks.setUser = req.user as IUsers;
        const id = req.params?.id;
        const result = await this._serviceBooks.remove(id);

        return ResponseBuilder.response(
          res,
          200,
          result,
          "success remove book"
        );
      } catch (error) {
        next(error);
      }
    };
  }

  show() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params?.id;
        const result = await this._serviceBooks.show(id);

        return ResponseBuilder.response(
          res,
          200,
          result,
          "success get one book"
        );
      } catch (error) {
        next(error);
      }
    };
  }
}

export default ControllerBooks;

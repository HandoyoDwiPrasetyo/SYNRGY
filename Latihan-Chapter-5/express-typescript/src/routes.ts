import { Express, Request, Response, NextFunction } from "express";

function routes(app: Express) {
  app.get("/api/books/:bookId/:authorId", getBookHandler);
}

export default routes;

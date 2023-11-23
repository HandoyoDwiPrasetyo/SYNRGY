import { Router } from "express";
import ControllerBooks from "../../controllers/api/ControllerBooks";
import media from "../../config/media";

class ApiBooks {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  routes() {
    // REST dan CRUD
    this.router.get("/", ControllerBooks.list); // /api/books READ
    this.router.post(
      "/",
      media.upload.single("picture"),
      ControllerBooks.create
    ); // /api/books CREATE
    this.router.get("/:id", ControllerBooks.show); // /api/books/1 -> /api/books/:id READ
    // this.router.put('/:id', ControllerBooks.update); // /api/books/1 -> /api/books/:id UPDATE
    // this.router.delete('/:id', ControllerBooks.delete); // /api/books/1 -> /api/books/:id DELETE

    return this.router;
  }
}

export default new ApiBooks();

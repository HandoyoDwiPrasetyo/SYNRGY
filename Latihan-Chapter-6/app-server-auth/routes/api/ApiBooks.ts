import { Router } from 'express';
import ControllerBooks from '../../controllers/api/ControllerBooks';
import Auth from '../../middlewares/Auth';

class ApiBooks {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  routes() {
    this.router.get('/', Auth.authorize, ControllerBooks.list);
    this.router.get('/:id', Auth.authorize, ControllerBooks.show);
    this.router.post('/', Auth.authorize, ControllerBooks.create);
    this.router.put('/:id', Auth.authorize, ControllerBooks.update);
    this.router.delete('/:id', Auth.authorize, ControllerBooks.remove);

    return this.router;
  }
}

export default new ApiBooks();

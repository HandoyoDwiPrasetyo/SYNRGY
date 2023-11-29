import express, { Express, NextFunction, Request, Response } from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import apiRouter from './routes/api';
import ResponseBuilder from './utils/ResponseBuilder';

const { PORT = 8000 } = process.env;
const PUBLIC_DIR = path.join(__dirname, 'public');

class Server {
  private app: Express;
  constructor() {
    this.app = express();

    this.app.use(express.static(PUBLIC_DIR));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use('/api', apiRouter);
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    // Handle not found errors
    this.app.use(this.notFoundHandler);

    // Handle other errors
    this.app.use(this.errorHandler);
  }

  private notFoundHandler(req: Request, res: Response, next: NextFunction) {
    return ResponseBuilder.response(
      res,
      404,
      'resource, data or page not found',
      'not found'
    );
  }

  private errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log(err.stack);
    return ResponseBuilder.response(
      res,
      err?.statusCode ?? 500,
      err.message,
      err.name
    );
  }

  public run() {
    this.app.listen(PORT, () => {
      console.log('Server running on http://localhost:%s', PORT);
    });
  }
}

new Server().run();

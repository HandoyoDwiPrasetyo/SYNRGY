import express, { Express } from 'express';

class Server {
  private app: Express;
  constructor() {
    this.app = express();
  }

  run() {
    this.app.listen(8000, () => {
      console.log('Server running on http://localhost:8000');
    });
  }
}

new Server().run();

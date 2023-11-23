import express, { Express } from "express";
import path from "path";

import ApiCars from "./routes/api/ApiCars";
import ApiAuth from "./routes/api/ApiAuth";

// Swagger
import { swaggerConfig } from "./utils/swaggerOption";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const { PORT = 8000 } = process.env;
const PUBLIC_DIR = path.join(__dirname, "public");

class Server {
  private app: Express;
  constructor() {
    this.app = express();

    const swaggerSpec = swaggerJSDoc(swaggerConfig);
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    this.app.use(express.static(PUBLIC_DIR));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use("/api/cars", ApiCars.routes());
    this.app.use("/api/auth", ApiAuth.routes());
  }
  run() {
    this.app.listen(PORT, () => {
      console.log("Server running on http://localhost:%s", PORT);
    });
  }
}

new Server().run();

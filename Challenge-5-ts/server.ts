import express, { Express, Request, Response } from 'express';
import path from 'path';
import api from './routes/api'; // assuming api is an exported module from "./routes/api"

const app: Express = express();
const { PORT = 8000 } = process.env;
const PUBLIC_DIR: string = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.use(express.json()); // body json

app.use(
  express.urlencoded({
    extended: true,
  })
); // body urlencoded

app.use('/api/cars', api.cars());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

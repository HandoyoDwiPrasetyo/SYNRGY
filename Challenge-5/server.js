const express = require("express"); // third-party module
const path = require("path"); // core module
const api = require("./routes/api"); // local module (api)

const app = express();
const { PORT = 8000 } = process.env;
const PUBLIC_DIR = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.use(express.json()); // body json

app.use(
  express.urlencoded({
    extended: true,
  })
); // body urlencoded

app.use("/api/cars", api.cars());

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:%d", PORT);
});

const express = require("express"); // third-party
// const storage = require("./storage"); // local
// const upload = require("./upload"); // local
const path = require("path"); // core
const Router = express.Router;

const app = express();

const { PORT = 8000 } = process.env;
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.use(express.static(PUBLIC_DIRECTORY));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is OK!: test perubahan");
});

const carRoutes = () => {
  const carRouter = Router();
  carRouter.get("/", (req, res) => {
    res.render("create-car", {
      name: req.query.name || "Guest",
    });
    res.status(200).json([]);
  });

  carRouter.get("/:carId", (req, res) => {
    res.status(200).json({});
  });
  carRouter.post("/", (req, res) => {
    res.status(201).json({
      message: "save success",
    });
  });
  carRouter.put("/:carId", (req, res) => {
    res.status(200).json({
      message: "update success",
    });
  });
  carRouter.delete("/:carId", (req, res) => {
    res.status(200).json({
      message: "delete success",
    });
  });
  return carRouter;
};

app.use("/cars", carRoutes());

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:%d", PORT);
});

const express = require("express"); // third-party module
const path = require("path"); // core module
const Router = express.Router;

const app = express(); // instance express -> assign ke variabel app
const { PORT = 8000 } = process.env;
const PUBLIC_DIR = path.join(__dirname, "public");

app.set("view engine", "ejs");
app.use(express.static(PUBLIC_DIR)); // membuat URL sendiri untuk apa saja
// yang ada di dalam folder PUBLIC_DIR -> "public"

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("server is OK!: test perubahan");
});

// REST API
// CRUD (CREATE, READ, UPDATE, DELETE) -> REST
// Cars

const carRoutes = () => {
  const carRouter = Router();
  carRouter.get("/", (req, res) => {
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

// app.get('/cars', (req, res) => {
//   res.status(200).json([]);
// }); // READ LIST
// app.get('/cars/:carId', (req, res) => {
//   res.status(200).json({});
// }); // READ DETAIL
// app.post('/cars', (req, res) => {
//   res.status(201).json({
//     message: 'save success',
//   });
// }); // CREATE
// app.put('/cars/:carId', (req, res) => {
//   res.status(200).json({
//     message: 'update success',
//   });
// }); // UPDATE
// app.delete('/cars/:carId', (req, res) => {
//   res.status(200).json({
//     message: 'delete success',
//   });
// }); // DELETE

app.get("/home", (req, res) => {
  const name = "julius";
  const sum = 5 + 5;
  const data = [
    {
      id: "1",
      manufacture: "honda",
      seat: 4,
    },
    {
      id: "2",
      manufacture: "suzuki",
      seat: 4,
    },
    {
      id: "3",
      manufacture: "toyota",
      seat: 4,
    },
  ];
  res.render("home", {
    name: name,
    sum: sum,
    imageSrc: "http://image.com/mountain.png",
    data,
  });
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:%d", PORT);
});

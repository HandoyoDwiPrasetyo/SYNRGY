const express = require("express");

const app = express();

const { PORT = 8000 } = process.env;

app.get(
  "/",
  (req, res, next) => {
    console.log("dari middleware");
    next();
  },
  (req, res) => {
    res.send("Home Page");
  }
);

app.get("/check-server", (req, res) => {
  res.send("Server is OK!");
});

app.post("/save", (req, res) => {
  res.send("Server POST is OK!");
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:%d", PORT);
});

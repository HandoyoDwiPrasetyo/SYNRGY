const Router = require("express").Router;
const db = require("../../../config/database");
const storage = require("../../../config/storage");
const upload = require("../../../config/upload");

// -  /api/books
function ApiRouterCar() {
  const router = Router();

  // List
  router.get("/", async (req, res) => {
    const data = await db.select("*").from("cars");
    res.status(200).json({
      data,
    });
  });

  // Single
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db.select("*").from("cars").where("car_id", "=", id);
    res.status(200).json({
      data: data[0],
    });
  });

  // Create
  router.post("/", upload.single("picture"), async (req, res) => {
    let car_name = req.body.car_name;
    let price = req.body.price;
    let start_rent = req.body.start_rent;
    let finish_rent = req.body.finish_rent;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    console.log(formattedDate);
    let create_at = formattedDate;

    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    const picture_url = storage.uploader.upload(file, (err, result) => {
      if (err) {
        alert("gagal upload file");
        res.status(400).json({
          message: "Upload file gagal",
        });
        return;
      }

      // console.log(result.url);

      return result;
    });

    console.log((await picture_url).url);

    const picture = (await picture_url).url;

    const data = await db("cars").insert({
      car_name: car_name,
      price: price,
      picture: picture,
      start_rent: start_rent,
      finish_rent: finish_rent,
      create_at: create_at,
    });

    res.status(201).json({
      message: "Create success!",
      data: data[0],
    });
  });

  // Update
  router.put("/:id", upload.single("picture"), async (req, res) => {
    const id = req.params.id;

    let car_name = req.body.car_name;
    let price = req.body.price;
    let start_rent = req.body.start_rent;
    let finish_rent = req.body.finish_rent;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    console.log(formattedDate);
    let update_at = formattedDate;

    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    const picture_url = storage.uploader.upload(file, (err, result) => {
      if (err) {
        alert("gagal upload file");
        res.status(400).json({
          message: "Upload file gagal",
        });
        return;
      }

      // console.log(result.url);

      return result;
    });

    console.log((await picture_url).url);

    const picture = (await picture_url).url;

    const data = await db("cars").where("car_id", "=", id).update({
      car_name: car_name,
      price: price,
      picture: picture,
      start_rent: start_rent,
      finish_rent: finish_rent,
      update_at: update_at,
    });

    res.status(201).json({
      message: "Update Success",
      data: data[0],
    });
  });

  // Delete

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db("cars").where("car_id", "=", id).del();
    res.status(200).json({
      message: "Delete Success",
      data: data[0],
    });
  });

  return router;
}

module.exports = ApiRouterCar;

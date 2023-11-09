const Router = require("express").Router;
const db = require("../../../config/database");
const storage = require("../../../config/storage");
const upload = require("../../../config/upload");

// /api/books
function ApiRouterBook() {
  const router = Router(); // instance dari function Router

  // List
  router.get("/", async (req, res) => {
    const data = await db.select("*").from("books");
    res.status(200).json({
      data,
    });
  });

  // Single
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db.select("*").from("books").where("books_id", "=", id);
    res.status(200).json({
      data: data[0],
    });
  });

  // Create
  router.post("/", upload.single("picture"), async (req, res) => {
    // const data = req.body;

    let title = req.body.title;
    let author = req.body.author;
    let isbn = req.body.isbn;
    let published_year = req.body.published_year;
    let genre = req.body.genre;
    let copies_available = req.body.copies_available;
    let total_copies = req.body.total_copies;
    // let picture = req.body.picture;

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

    const data = await db("books").insert({
      title: title,
      author: author,
      isbn: isbn,
      published_year: published_year,
      genre: genre,
      copies_available: copies_available,
      total_copies: total_copies,
      picture: picture,
    });

    res.status(201).json({
      message: "Create success!",
      title,
      author,
      isbn,
      published_year,
      genre,
      copies_available,
      total_copies,
      picture,
    });
  });

  // Update
  router.put("/:id", upload.single("picture"), async (req, res) => {
    const id = req.params.id;

    let title = req.body.title;
    let author = req.body.author;
    let isbn = req.body.isbn;
    let published_year = req.body.published_year;
    let genre = req.body.genre;
    let copies_available = req.body.copies_available;
    let total_copies = req.body.total_copies;
    // let picture = req.body.picture;

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

    const data = await db("books").where("books_id", "=", id).update({
      title: title,
      author: author,
      isbn: isbn,
      published_year: published_year,
      genre: genre,
      copies_available: copies_available,
      total_copies: total_copies,
      picture: picture,
    });

    res.status(201).json({
      message: "Update Success",
      data: title,
      author,
      isbn,
      published_year,
      genre,
      copies_available,
      total_copies,
      picture,
    });
  });

  // Delete

  router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await db("books").where("books_id", "=", id).del();
    res.status(200).json({
      message: "Delete Success",
      data: data[0],
    });
  });

  return router;
}

module.exports = ApiRouterBook;

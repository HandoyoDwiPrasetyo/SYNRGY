import { Request, Response } from "express";
import { IRestController } from "../../interfaces/IRest";
import Books, { IBooks } from "../../models/Books";
import media from "../../config/media";
import database from "../../config/database";

class ControllerBooks implements IRestController {
  constructor() {}

  async list(_: Request, res: Response) {
    const data = await Books.list();
    res.status(200).json({
      meta: {
        message: "success",
        success: true,
        code: 200,
      },
      data: data,
    });
  }

  async create(req: Request, res: Response) {
    const title = req.body.title as string;
    console.log(title);
    try {
      const {
        title,
        author,
        isbn,
        published_year,
        genre,
        copies_available,
        total_copies,
      } = req.body;

      // Check if all required fields are provided
      if (
        !title ||
        !author ||
        !isbn ||
        !published_year ||
        !genre ||
        !copies_available ||
        !total_copies
      ) {
        return res.status(400).json({
          meta: {
            message: "Bad Request",
            success: false,
            code: 400,
          },
          data: null,
        });
      }

      // Upload picture to Cloudinary
      // const pictureUrl = await media.upload.single("picture")(req, res);
      if (!req.file || !req.file.buffer) {
        throw new Error("File buffer is undefined");
      }

      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      const picture_url = media.storage.uploader.upload(file);

      const picture = (await picture_url).url;

      // Create a new book with the provided data and the Cloudinary picture URL
      const newBook: IBooks = {
        title,
        author,
        isbn,
        published_year,
        genre,
        copies_available,
        total_copies,
        picture, // Use the secure_url property from the Cloudinary response
      };

      console.log(newBook);

      // Save the new book to the database
      await Books.create(newBook);

      res.status(201).json({
        meta: {
          message: "success",
          success: true,
          code: 201,
        },
        data: newBook,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        meta: {
          message: "Internal Server Error",
          success: false,
          code: 500,
        },
        data: null,
      });
    }
  }

  // async create(req: Request, res: Response) {
  //   const id = req.body.id as string;
  //   const title = req.body.title as string;
  //   const author = req.body.author as string;
  //   const isbn = req.body.isbn as string;
  //   const published_year = req.body.published_year as string;
  //   const genre = req.body.genre as string;
  //   const copies_available = req.body.copies_available as number;
  //   const total_copies = req.body.total_copies as number;

  //   if (!req.file || !req.file.buffer) {
  //     throw new Error("File buffer is undefined");
  //   }

  //   const fileBase64 = req.file.buffer.toString("base64");
  //   const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  //   // const picture_url = storage.uploader.upload

  // const picture_url = media.storage.uploader.upload(file);

  // const picture = (await picture_url).url as string;

  //   const data_create: IBooks = {
  //     id: id,
  //     title: title,
  //     author: author,
  //     isbn: isbn,
  //     published_year: published_year,
  //     genre: genre,
  //     copies_available: copies_available,
  //     total_copies: total_copies,
  //     picture: picture,
  //   };

  //   const data = await Books.list(data_create);

  //   // const data = await Books.create({
  //   //   id: id,
  //   //   title: title,
  //   //   author: author,
  //   //   isbn: isbn,
  //   //   published_year: published_year,
  //   //   genre: genre,
  //   //   copies_available: copies_available,
  //   //   total_copies: total_copies,
  //   //   picture: picture,
  //   // });

  //   res.status(200).json({
  //     meta: {
  //       message: "success",
  //       success: true,
  //       code: 200,
  //     },
  //     data: data,
  //   });
  // }
  show(_: Request, __: Response) {}
  update(_: Request, __: Response) {}
  delete(_: Request, __: Response) {}
}

export default new ControllerBooks();

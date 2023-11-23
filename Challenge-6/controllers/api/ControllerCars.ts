import { Request, Response } from "express";
import ServiceCars from "../../services/ServiceCars";
import { IRestController } from "../../interfaces/IRest";
import media from "../../config/media";
import ServiceAuth from "../../services/ServiceAuth";

class ControllerCars implements IRestController {
  constructor() {}

  async list(req: Request, res: Response) {
    try {
      const response = await ServiceCars.list();
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const response = await ServiceCars.show(id);
      res.status(200).json({
        data: response,
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newCarData = req.body;

      if (!req.file || !req.file.buffer) {
        throw new Error("File buffer is undefined");
      }

      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      // Upload and get url
      const picture_url = media.storage.uploader.upload(file);
      const picture = (await picture_url).url;

      newCarData.image = picture;

      // Ambil Id User
      const token = req.headers.authorization as string;
      const createdBy = await ServiceAuth.validateUser(token);
      console.log("CreatedById = ", createdBy);
      newCarData.createdBy = createdBy;

      const response = await ServiceCars.create(newCarData);

      res.status(201).json({
        meta: {
          message: "Data added successfully",
          success: true,
          code: 201,
        },
        data: newCarData,
      });
    } catch (error) {
      res.status(500).json({
        data: error,
      });
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      // Ambil Id User
      const token = req.headers.authorization as string;
      const deletedBy = (await ServiceAuth.validateUser(token)) as string;
      console.log("DeletedById = ", deletedBy);

      const response = await ServiceCars.remove(id, deletedBy);
      if (!response) {
        return res.status(404).json({
          meta: {
            message: "Data not found",
            success: false,
            code: 404,
          },
          data: response,
        });
      }
      return res.status(200).json({
        meta: {
          message: "Data has been successfully deleted",
          success: true,
          code: 201,
        },
      });
    } catch (error) {
      return res.status(500).json({
        data: error,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updateCarData = req.body;

      if (!req.file || !req.file.buffer) {
        throw new Error("File buffer is undefined");
      }

      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      // Upload and get url
      const picture_url = media.storage.uploader.upload(file);
      const picture = (await picture_url).url;

      updateCarData.image = picture;

      // Ambil Id User
      const token = req.headers.authorization as string;
      const updatedBy = await ServiceAuth.validateUser(token);
      console.log("UpdatedById = ", updatedBy);
      updateCarData.editedBy = updatedBy;

      const response = await ServiceCars.update(id, updateCarData);

      if (!response) {
        return res.status(404).json({
          meta: {
            message: "Data not found",
            success: false,
            code: 404,
          },
          data: response,
        });
      }

      return res.status(201).json({
        meta: {
          message: "Data updated successfully",
          success: true,
          code: 201,
        },
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        data: error,
      });
    }
  }
}

export default new ControllerCars();

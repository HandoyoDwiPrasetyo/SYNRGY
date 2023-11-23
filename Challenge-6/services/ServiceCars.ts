import media from "../config/media";
import { TParams } from "../interfaces/IRest";
import Cars from "../models/Cars";

class ServiceCars {
  constructor() {}
  async list(params?: TParams) {
    try {
      const response = await Cars.list();
      return response;
    } catch (error) {
      return error;
    }
  }

  async show(id: string) {
    try {
      const response = await Cars.show(id);
      return response;
    } catch (error) {
      return error;
    }
  }

  async create(newCarData: any) {
    try {
      const response = await Cars.create(newCarData);
      return response;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string, deletedBy: string) {
    try {
      const response = await Cars.remove(id, deletedBy);
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, newCarData: any) {
    try {
      const response = await Cars.update(id, newCarData);
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceCars();

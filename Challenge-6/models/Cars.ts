import database from "../config/database";
import { IRestModel, TParams } from "../interfaces/IRest";

export interface ICars {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
}

class Cars implements IRestModel<ICars> {
  constructor() {}

  async create(payload: ICars) {
    const data = await database("cars").insert(payload);
    return data;
  }

  async list(params?: TParams) {
    const data = await database
      .select("*")
      .from("cars")
      .where("deleted", false);
    return data as ICars[];
  }

  async remove(id: string, deletedBy: string) {
    try {
      const data = await database("cars")
        .where("id", "=", id)
        .andWhere("deleted", "=", false)
        .update({ deleted: true, deletedBy: deletedBy });
      return data;
    } catch (error) {
      return error;
    }
  }

  async show(id: string) {
    const data = await database
      .select("*")
      .from("cars")
      .where("id", "=", id)
      .andWhere("deleted", "=", false);
    return data as ICars[];
  }

  async update(id: string, payload: ICars) {
    const data = await database("cars")
      .where("id", "=", id)
      .andWhere("deleted", "=", false)
      .update(payload);
    return data;
  }
}

export default new Cars();

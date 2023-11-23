import { IRestModel, TParams } from "../interfaces/IRest";
import database from "../config/database";

export interface IBooks {
  title: string;
  author: string;
  isbn: string;
  published_year: string;
  genre: string;
  copies_available: number;
  total_copies: number;
  picture: string;
}

class Books implements IRestModel<IBooks> {
  constructor() {}
  async list() {
    const data = await database.select("*").from("books");
    console.log("data", data);
    return data as IBooks[];
  }
  async create(params?: IBooks) {
    const data = await database("books").insert(params);
    return data;
  }

  async show() {}

  // async create(params: IBooks) {
  //   const [createdItemId] = await database("books").insert(params);

  //   // Assuming your database returns the ID of the newly created item
  //   // If your database returns more information, adjust accordingly
  //   const createdItem = { ...params, id: createdItemId } as IBooks;

  //   return createdItem;
  // }

  //   update() {}
  //   delete() {}
}

export default new Books();

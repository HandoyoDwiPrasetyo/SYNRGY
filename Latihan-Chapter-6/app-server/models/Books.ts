import database from "../config/database";
import { Model } from "objection";

Model.knex(database);

export interface IBooks {
  id?: string;
  title: string;
  author: string;
  isbn: string;
  published_year: string;
  genre: string;
  total_copies: number;
  copies_available: number;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
  createdBy?: string;
  published: boolean;
}

class Books extends Model {
  static get tableName() {
    return "books";
  }

  static get idColumn() {
    return "id";
  }
}

export default Books;

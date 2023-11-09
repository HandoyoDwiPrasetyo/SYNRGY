const knex = require("knex");

const database = knex({
  client: "pg",
  connection: "postgres://postgres:docker@127.0.0.1:5432/cars", // url postgres
  searchPath: ["public"], // schema
});

module.exports = database;

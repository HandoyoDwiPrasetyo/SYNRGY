import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3',
  //   },
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  development: {
    client: "postgresql",
    connection: {
      port: 5433,
      database: "app_server_deploy2",
      user: "app_server_deploy2",
      password: "qPPz4agqdTqgrs0",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "db_cars",
  //     user: "postgres",
  //     password: "docker",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "db_cars",
  //     user: "postgres",
  //     password: "docker",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
};

module.exports = config;

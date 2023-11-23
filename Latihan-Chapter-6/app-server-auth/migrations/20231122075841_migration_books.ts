import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable('books', (builder) => {
    builder.increments('id').primary().notNullable();
    builder.string('title').notNullable();
    builder.string('author').notNullable();
    builder.string('isbn').notNullable();
    builder.string('published_year').notNullable();
    builder.string('genre').notNullable();
    builder.integer('total_copies').defaultTo(0);
    builder.integer('copies_available').defaultTo(0);
    builder.dateTime('createdAt').defaultTo(new Date().toISOString());
    builder.dateTime('updatedAt').defaultTo(new Date().toISOString());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable('books');
}

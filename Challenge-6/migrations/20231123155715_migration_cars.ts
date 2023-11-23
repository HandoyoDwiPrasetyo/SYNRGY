import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("cars", (builder) => {
    builder.increments("id").primary().notNullable();
    builder.string("plate").notNullable();
    builder.string("manufacture").notNullable();
    builder.string("model").notNullable();
    builder.string("image").notNullable();
    builder.integer("rentPerDay").defaultTo(0);
    builder.integer("capacity").defaultTo(0);
    builder.string("description").notNullable();
    builder.timestamp("availableAt").defaultTo(knex.fn.now());
    builder.string("transmission").notNullable();
    builder.boolean("available").defaultTo(false);
    builder.string("type").notNullable();
    builder.integer("year").defaultTo(0);
    builder.specificType("options", "text ARRAY");
    builder.specificType("specs", "text ARRAY");
    builder.string("createdBy");
    builder.string("editedBy");
    builder.string("deletedBy");
    builder.boolean("deleted").defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("cars");
}

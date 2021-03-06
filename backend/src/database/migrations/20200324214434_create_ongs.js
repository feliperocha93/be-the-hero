exports.up = function (knex) {
  return knex.schema.createTable("ongs", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("email").notNullable().unique('Email');
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("ongs");
};

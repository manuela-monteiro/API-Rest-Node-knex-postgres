const { table } = require("../src/database");

exports.up = knex => knex.schema.alterTable('users', table => {
    table.timestamp('deleted_at');
});

exports.down = knex => knex.schema.alterTable('users', knex => {
    table.dropColumn('deleted_at');
});
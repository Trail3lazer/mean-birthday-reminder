let knex = require("../server").knex;

knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name');
    table.string('email', 128);
    table.string('password');
    table.string('birthdate')
    table.timestamps();
});

knex.schema.createTable('birthdays', function(table) {
    table.increments();
    table.string('name');
    table.string('date');
    table.string('relation');
    table.string('candy');
    table.string('hobbies');
    table.string('userId')
    table.timestamps();
});


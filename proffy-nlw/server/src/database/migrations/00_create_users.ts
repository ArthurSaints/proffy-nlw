import Knex from 'knex';

// aqui a gnt constroi e altera o bd
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

// aqui a gnt desfaz o que fizemos no up em caso de 'problema'
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}
import Knex from 'knex';

// aqui a gnt constroi e altera o bd
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// aqui a gnt desfaz o que fizemos no up em caso de 'problema'
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}
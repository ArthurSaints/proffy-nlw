import Knex from 'knex';

// aqui a gnt constroi e altera o bd
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

// aqui a gnt desfaz o que fizemos no up em caso de 'problema'
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}
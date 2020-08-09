import Knex from 'knex';

// aqui a gnt constroi e altera o bd
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// aqui a gnt desfaz o que fizemos no up em caso de 'problema'
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}
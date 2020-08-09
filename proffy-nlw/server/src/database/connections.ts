import knex from 'knex';
import path from 'path';

// migration = controlam as versoes do bd

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;
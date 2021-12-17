import knex from 'knex';

const database = knex({
    client: 'mysql',
    version: '10.4.22',
    connection: {
        host: '127.0.0.1',
        port: 3336,
        user: "root",
        password: "",
        database:'productos'
    },
    pool: {min:0,max:10}
})

export default database;
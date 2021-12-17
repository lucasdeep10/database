import knex from 'knex';

let db = knex({
    client:'sqlite3',
    connection:{filename:'./database/productos.sqlite'}
})

export default db
import { createPool } from 'mysql';

const Pool = createPool({
    connectionLimit: 10,
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: 'db',
});


export default Pool;
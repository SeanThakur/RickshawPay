import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rickshaw_pay',
    connectionLimit : 1000,
});

export default pool;
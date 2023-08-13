const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: '', // mysql username
    password: '', // mysql password
    database: '', // database name
});

module.exports = connection;
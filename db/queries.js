// Import the 'connection' from 'connection.js'
const connection = require('./connection');

// Define a class "DB"
class DB {
    constructor(connection) {
        this.connection = connection;
    }
}

SELECT * FROM department
const mysql = require('mysql');
const { DB } = require('./mysqlKeys')
const { promisify } = require('util'); //sopota promesas
const mysqlConnection = mysql.createConnection(DB);

mysqlConnection.connect((error) => {
    if (error) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("Database connection closed");
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error("Database has too many connections");
        }
        if (error === 'ECONNREFUSED') {
            console.error("Conecion rechazada");
        }
    } else {
        console.log("Database is Connect");
        return;
    }
})
mysqlConnection.query = promisify(mysqlConnection.query); //los query's automaticamente soportan promesas

module.exports = mysqlConnection
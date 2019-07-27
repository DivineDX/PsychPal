// This is the routes.js file!

const express = require('express');
const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'TeleApp'
});


// We're still in routes.js! Right below everything else.

// Starting our app.
const app = express();

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    } else {
        next();
    }
}
app.use(ignoreFavicon);

//
// Creating a GET route that returns data from the 'users' table.
app.get('/:function', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

        // Executing the MySQL query (select all data from the 'users' table).
        connection.query(req.params.function, function (error, results, fields) {

            connection.release();
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(3005, () => {
    console.log("Server running on port 3005");
});
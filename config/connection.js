
// Set up MySQL connection.
const mysql = require('mysql');

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burger_db"
});
}

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;

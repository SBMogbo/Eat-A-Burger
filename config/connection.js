
// Set up MySQL connection.
const mysql = require('mysql');

if(process.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});
}

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;

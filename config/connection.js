const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "m123an45ueL",
  database: "log_in"
});

connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;

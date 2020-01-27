const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
<<<<<<< HEAD
  password: "Donald425@",
=======
  password: "m123an45ueL",
>>>>>>> 941156b3f492159b92ed118ff9fc1f21cff11075
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

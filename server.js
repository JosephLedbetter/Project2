// const dotenv=require("dotenv").config();
// var express = require("express");
// var fs = require("fs");
// const path = require("path");
 

// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("public"));

// // Handlebars


// // Routes


// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
// // db.sequelize.sync(syncOptions).then(function() {
// //   app.listen(PORT, function() {
// //     console.log(
// //       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
// //       PORT,
// //       PORT
// //     );
// //   });
// // });
const express = require("express");
const mysql = require("mysql");
const path= require("path");
const dotenv=require("dotenv").config();

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//----------------------------------------orm
const routes = require("./routes/apiroutes.js");
//require('./routes/html-routes')(app);
app.use(routes);

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });

//module.exports = app;


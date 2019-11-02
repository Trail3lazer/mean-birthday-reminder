require("dotenv").config();
var express = require("express");
var db = require("./models");
var app = express();

// Bookshelf setup
const knex = require('knex')({
    client: 'mysql',
    connection: process.env.MYSQL_DATABASE_CONNECTION
  })
  const bookshelf = require('bookshelf')(knex)

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("🌎 Listening at http://localhost:%s/ ", PORT);
  });
});

module.exports = app;

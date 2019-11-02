require("dotenv").config();
var express = require("express");
var db = require("./models");
var app = express();
var path = require("path")
var PORT = process.env.PORT || 3000;

// Bookshelf setup
const knex = require('knex')({
    client: 'mysql',
    connection: process.env.JAWSDB_URL
})
const bookshelf = require('bookshelf')(knex)

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/*',(req, res)=>{
    res.send(__dirname+'/client/dist/ngBootstrap')
})

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("🌎 Listening at http://localhost:%s/ ", PORT);
  });
});

module.exports = app;

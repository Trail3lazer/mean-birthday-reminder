require("dotenv").config();
var express = require("express");
var app = express();
var path = require("path")
var PORT = process.env.PORT || 3000;

// Bookshelf setup
const knex = require('knex')({
    client: 'mysql',
    connection: process.env.JAWSDB_URL
})
const bookshelf = require('bookshelf')(knex);

module.exports = {
    knex: knex,
    bookshelf: bookshelf
};
module.exports.db = require('./models')

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/dist/ngBootstrap"));

require("./api")(app)
app.get('/*',(req, res)=>{
    res.send(path.join(__dirname,'/client/dist/ngBootstrap'))
})


  app.listen(PORT, function() {
    console.log("🌎 Listening at http://localhost:%s/ ", PORT);
  });



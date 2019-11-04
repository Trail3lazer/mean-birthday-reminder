require("dotenv").config();
const Sequelize = require('sequelize');
var express = require("express");
var app = express();
var path = require("path")
var PORT = process.env.PORT || 3000;

// db setup
const sequelize = new Sequelize(process.env.JAWSDB_URL);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize
};
module.exports.db = require('./models')

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/dist/ngBootstrap"));

// Route Calls
require("./api")(app)
app.get('/*',(req, res)=>{
    res.send(path.join(__dirname,'/client/dist/ngBootstrap'))
})

// Start up
  sequelize.sync()
  app.listen(PORT, function() {
    console.log("🌎 Listening at http://localhost:%s/ ", PORT);
  });



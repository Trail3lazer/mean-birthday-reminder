const {sequelize, Sequelize}= require('../server')

module.exports = sequelize.define('user', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.STRING,
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },

  }, {
    // options
  });


const {sequelize, Sequelize}= require('../server')

module.exports = sequelize.define('birthday', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    },
    relation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    candy: {
        type: Sequelize.STRING,      
        allowNull: false
    },
    hobbies: {
        type: Sequelize.STRING,      
        allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    // options
  });

const bookshelf = require('../server').bookshelf

module.exports = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

    verifyPassword: function(password) {
        return this.get('password') === password;
    },
});


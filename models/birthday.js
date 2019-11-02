const { bookshelf } = require('../server')
module.exports = bookshelf.model('Birthday', {
    tableName: 'birthdays',
    hasTimestamps: true,
    
    age: function(){
        let today = new Date();
        let dob = new Date(this.date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
        let age = today.getFullYear() - dob.getFullYear() +1;
        return this.name + " will be turning " + age + " on their birthday!"
    }
  });
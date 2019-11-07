const moment = require('moment');
const year = moment().year();
const nextYear = moment(year,'YYYY').add(1, 'year').year();
const today = moment().format('YYYY-MM-DD');
console.log(today)

module.exports = (param, cb) => {
    let bdayArr = param;
    for (let i in bdayArr){
        let buddy = bdayArr[i];
        let mmdd = moment(buddy.dataValues.date,'YYYY-MM-DD').format('MM-DD');
        buddy.dataValues.age = (moment().diff(buddy.dataValues.date, 'years',false)+1)+" years old in";
        if(moment(today, 'YYYY-MM-DD').isBefore(year+'-'+mmdd)){
            buddy.dataValues.thisBday = moment(year+'-'+mmdd,'YYYY-MM-DD').format('YYYYMMDD');
            buddy.dataValues.timeToBday = moment(year+'-'+mmdd,'YYYY-MM-DD').fromNow(true);
        } else {
            buddy.dataValues.thisBday = moment(nextYear+'-'+mmdd,'YYYY-MM-DD').format('YYYYMMDD');
            buddy.dataValues.timeToBday = moment(nextYear+'-'+mmdd,'YYYY-MM-DD').fromNow(true);
        }
        buddy.dataValues.date = mmdd;
    }
    bdayArr = bdayArr.sort((a,b) => a.dataValues.thisBday - b.dataValues.thisBday);
    cb(bdayArr)
}
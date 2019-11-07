const { db } = require('../server');
const { Op } = require('sequelize');
const sendSMS = require('./smsController');

var now = new Date();
let year = now.getFullYear();
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let day = ("0" + now.getDate()).slice(-2);
let formattedDate = month + "-" + day;


var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
if (millisTill10 < 0) {
    millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
}
// setTimeout(function(){
//     checkMessagesToSend()
// }, millisTill10);

module.exports = () => {

    const numbers = [];
    const messages = [];

    const checkMessagesToSend = async () => {
        let birthdays = await db.birthday.findAll({
            where: {
                [Op.and]: [
                    { sms: true },
                    {
                        date: {
                            [Op.like]: '%-' + formattedDate + '%'
                        }
                    }
                ]
            }
        })
        for (let i in await birthdays) {
            let reminder = birthdays[i].dataValues;
            messages.push(`It's ${reminder.name}'s birthday!!! Make sure to wish your ${reminder.relation} a happy birthday. Their favorite candy is ${reminder.candy} and their hobbies include ${reminder.hobbies}, just so you have a couple ideas. Add more friends on your birthday reminder account so you will never forget!`)
            let userResponse = await db.user.findAll({ where: { id: reminder.userId } });
            let user = await userResponse[0].dataValues;
            numbers.push("1"+user.phone)
        }
        // sendSMS(numbers, messages)
    }
    checkMessagesToSend()
}
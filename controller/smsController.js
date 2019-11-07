const axios = require('axios');

const sms = (numbers, messages) => {
    const messageArr = [];
    for (let i in messages){
        let messageObj = {
            "to": numbers[i],
            "from": "Birthday Reminder",
            "content": messages[i],
        }
        messageArr.push(messageObj);
    }

    axios.post('https://rest-api.d7networks.com/secure/sendbatch', {'messages':messageArr}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic amFyZTk5MDQ6TEJGUXkyN1E='
        }
    }).then(value=>console.log(value.status)).catch(err=>console.log(err))
}

module.exports = sms;
let { db } = require('./server');
const { Op } = require('sequelize');
const dateParse = require('./controller/birthdayArrayController')

const str = (value) => {
    return JSON.stringify(value);
}

module.exports = (app) => {

    // BIRTHDAY TABLE

    app.get('/api/birthday', (req, res) => {
        db.birthday.findAll().then((result) => {
            console.log(result[result.length - 1].date)
            res.send(str(result))
        }).catch(err => console.log(err));
    })
        .get('/api/birthday/:id', (req, res) => {
            db.birthday.findAll({
                where: {
                    userId: req.params.id
                }
            }).then(result => {
                let dateArr;
                dateParse(result, arr => dateArr = arr)
                res.send(str(dateArr))
            }).catch(err => console.log(err));
        })
        .post('/api/birthday', (req, res) => {
            let record = req.body;
            let date = record.yyyy + '-' + record.mm + '-' + record.dd
            record.date = date;
            delete record.dd, record.mm, record.yyyy;
            db.birthday.create(record).then((model) => {
                res.send(str(model))
            }).catch(err => console.log(err));
        })
        .delete('/api/birthday/:id', (req, res) => {
            db.birthday.delete({
                where: {
                    userId: req.params.id
                }
            }).then((result) => {
                res.send(str(result))
            }).catch(err => console.log(err));
        })

        // SMS

        .get('/api/sms/:id',( req, res )=>{
            
        })

        // USERS TABLE

        .get('/api/users/:id', (req, res) => {
            db.birthday.findAll({
                where: {
                    userId: req.params.id
                }
            }).then((result) => {
                res.send(str(result))
            }).catch(err => console.log(err));
        })
        .post(`/api/users/authenticate`, async (req, res) => {
            let record = req.body;
            db.user.findAll({ where: { name: record.name } }).then(user => {
                if (user.length > 0) {
                    res.send(str(user[0]));
                } else {
                    res.send(str(false))
                }
            })
        })

        .post(`/api/users/signup`, async (req, res) => {
            let record = req.body;
            let existingUsers = await db.user.findAll({
                where: {
                    [Op.or]: [
                        { 'name': record.name }, { 'email': record.email }
                    ]
                }
            })
            if (existingUsers.length === 0) {
                db.user.create(record).then((result) => {
                    res.send(str(result))
                }).catch(err => console.log(err));
            } else {
                res.send(str(false));
            }
        })
}
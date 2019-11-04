let { db } = require('./server')

module.exports = (app) => {

    // BIRTHDAY TABLE

    app.get('/api/birthday', (req, res) => {
        db.birthday.findAll().then((result) => {
            console.log(result[result.length-1].date)
            res.json(result)
        }).catch(err => console.log(err));
        })
        .get('/api/birthday/:id', (req, res) => {
            db.birthday.findAll({
                where: {
                    userId: req.params.id
                }
            }).then((result) => {
                res.json(result)
            }).catch(err => console.log(err));
        })
        .post('/api/birthday', (req, res) => {
            let record = req.body;
            let date = record.mm+'/'+record.dd+'/'+record.yyyy
            record.date = date;
            delete record.dd, record.mm, record.yyyy;
            db.birthday.create(record).then((model) => {
                res.json(model)
            }).catch(err => console.log(err));
        })
        .delete('/api/birthday/:id', (req, res) => {
            db.birthday.delete({
                where: {
                    userId: req.params.id
                }
            }).then((result) => {
                res.json(result)
            }).catch(err => console.log(err));
        })

        // USERS TABLE

        .get('/api/user/:id', (req, res) => {
            db.birthday.findAll({
                where: {
                    userId: req.params.id
                }
            }).then((result) => {
                res.json(result)
            }).catch(err => console.log(err));
        })
        .post('/api/user', (req, res) => {
            let record = req.body;
            let date = record.mm+'/'+record.dd+'/'+record.yyyy
            record.date = date;
            delete record.dd, record.mm, record.yyyy;
            db.birthday.create(record).then((model) => {
                res.json(model)
            }).catch(err => console.log(err));
        })
}
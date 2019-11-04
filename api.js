let { db } = require('./server')
module.exports = (app) => {
    app.get('/api/birthday', (req, res) => {
        db.birthday.fetchAll().then((result) => {
            res.json(result)
        }).catch(err => console.log(err));
        })
        .get('/api/birthday/:id', (req, res) => {
            db.birthday.where('userId', req.params.id).fetch().then((result) => {
                res.json(result)
            }).catch(err => console.log(err));
        })
        .post('/api/birthday', (req, res) => {
            let record = req.body;
            let date = record.dd+'/'+record.mm+'/'+record.yyyy
            delete record.dd, record.mm, record.yyyy;
            record.date = date;
            db.birthday.forge(record).save().then((model) => {
                res.json(model)
            }).catch(err => console.log(err));
        })
        .delete('/api/birthday/:id', (req, res) => {
            db.birthday.where('id', req.params.id).destroy().then((result) => {
                res.json(result)
            }).catch(err => console.log(err));
        })
}
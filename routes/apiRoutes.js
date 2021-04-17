const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));


    app.post('/api/notes', (req, res) => {
        const value = req.body;
        // adds unique id to post req
        value.id = uuidv4();
        // push to db file array and writes file with updated data
        db.push(value);
            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(db), (err) => {
            err ? console.log (err) : console.log('Successfully updated!')
        });
        res.json('../db/db.json');
    })

    // delete note by grabbing the id passed from client side, searching through array for element and splicing it out
    app.delete('/api/notes/:id', (req, res) => {
        const { params: {id} } = req;

        for (const [i, element] of db.entries()) {
            if (element.id === id) {
                db.splice(i, 1);
                fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(db), (err) => {
                    err ? console.log (err) : console.log('Successfully updated!');
                });
                res.json(db);
            }
        }
    });
}
const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
let notesArray = [];

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        // res.json(req.body);

        
        // notesArray = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
        const value = req.body;
        value.id = uuidv4();
        db.push(value);
            fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(db), (err) => {
            err ? console.log (err) : console.log('Successfully updated!')
        });
        res.json('../db/db.json');
    })
    // fs read file, JSON.parse db.json, append the array and then fs.writeFile


    app.delete('/api/notes/:id', (req, res) => {
        const { params: {id} } = req;
        // const data = db.find(element => {
        //     return element.id === id;
        // })
        for (const [i, element] of db.entries()) {
            if (element.id === id) {
                db.splice(i, 1);

                // delete db[i];
                fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(db), (err) => {
                    err ? console.log (err) : console.log('Successfully updated!')
                });
                res.json(db);
            }
        }
    })
        // res.json(db));
    // need to delete from db file 
    
}
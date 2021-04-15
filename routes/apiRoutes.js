const db = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => res.json(req.body));
        // let notesArray = fs.readFileSync(db, 'utf8');
        // JSON.parse(notesArray);
        // notesArray.push(req.body);
        // fs.writeFile((db), notesArray, (err) => {
        //     err ? console.log (err) : console.log('Successfully updated!')
        // });
        
    // fs read file, JSON.parse db.json, append the array and then fs.writeFile


    app.delete('/api/notes', (req, res) => res.json(db));
    // need to delete from db file 
    
}
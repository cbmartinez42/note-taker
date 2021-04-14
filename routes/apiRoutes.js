const db = require('../db/db.json');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => res.json(db));

    app.delete('/api/notes', (req, res) => res.json(db));

    
}
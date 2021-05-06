let notes = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) =>
        res.json(notes));

    app.post('/api/notes', (req, res) => {
        console.log(notes);

        let newNote = req.body
        newNote.id = notes[notes.length - 1].id + 1;
        notes.push(newNote);
        res.json(true);
        console.log(notes);

        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    });

    app.delete("/api/notes/:id", function (req, res) {
        notes = notes.filter(note => req.params.id != note.id); 
        console.log('note deleted');
        for(i=0; i<notes.length; i++) {
            notes[i].id = i+1;
        }  
        console.log(notes);
        res.json(notes);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
        err ? console.error(err) : console.log('updated db.json file!')
        );
    });


}
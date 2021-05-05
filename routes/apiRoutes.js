const notes = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) =>
        res.json(notes));

    app.post('/api/notes', (req, res) => {
        console.log(notes);

        let newNote = {
            title: req.body.title,
            text: req.body.text,
        }

        newNote.id = notes[notes.length-1].id + 1;
        notes.push(newNote);
        res.json(true);
        console.log(notes);
        
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    });

    // app.delete(`/api/notes/${notes.length}`, (req, res) => {
    //     for(i=0; i<notes.length; i++) {
    //     notes.splice(i, 1);
    //     }
    //     console.log(notes);
    //     for(i=0; i<notes.length; i++) {
    //         notes[i].id = i;
    //     }
    //     fs.writeFile('./db/db.json', JSON.stringify(notes), (err) =>
    //         err ? console.error(err) : console.log('Success!')
    //     );
    // });

}
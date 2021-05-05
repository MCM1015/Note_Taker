const notes = require('../db/db.json');
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

        fs.writeFileSync('./db/db.json', JSON.stringify(notes), (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    });

    // app.delete("/api/notes/:id", function (req, res) {
    //     for (i = 0; i < notes.length-1; i++) {
    //             notes.splice(i, 1);
    //             console.log("Deleted note with id " + notes[i].id);
    //             break;
    //         }
    //     for(i=0; i<notes.length; i++) {
    //         notes[i].id = i+1;
    //     }
       
    //     console.log(notes);
    //     fs.writeFileSync('./db/db.json', JSON.stringify(notes), (err) =>
    //         err ? console.error(err) : console.log('updated db.json file!')
    //     );
        
    // });

}
const express = require('express');
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

const { notes } = require('./Develop/db/db.json');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

// function createnewnotes(body,notesarray){
// const note = body;
// notesarray.push(note);
// fs.writeFileSync(
//   path.join(_dirname,'./Develop/db/db.json'),
//   JSON.stringify({db:notesarray},null,2)
// );
// return note;
// }
app.get('/api/notes', (req, res) => {
  res.json(notes);
});
app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

 

//http://localhost:3000/api/notes







//http://localhost:3000/api/db

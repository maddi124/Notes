const express = require('express');

const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./Develop/public'));

const { notes } = require('./Develop/db/db.json');

//---------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.get('/notes',(req,res)=>{
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});
//-------------------------------------------------------------------------------------

app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'./Develop/db/db.json'))
  
});

app.post('/api/notes', (req, res) => {
const note= JSON.parse(fs.readFileSync('./Develop/db/db.json'));
const newnote= res.body;
note.push(newnote);
createnewnotes(note);
res.json(note);
 });
function createnewnotes(note){
  const notenew=note;
  fs.writeFileSync('./Develop/db/db.json',JSON.stringify(notenew));
}

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


//http://localhost:3000/api/notes







//http://localhost:3000/api/db

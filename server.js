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
   console.log(req.query)
 
   res.sendFile(path.join(__dirname,'./Develop/db/db.json'))
 });
 

app.post('/api/notes', (req, res) => {
const newNotes=req.body;
const data = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));

const length=(data.length).toString();
newNotes.id=length;

console.log('New Note :\n ' + JSON.stringify(newNotes));

data.push(newNotes);


fs.writeFileSync('./Develop/db/db.json', JSON.stringify(data));

res.json(data);
});

app.delete('/api/notes/:id',(req,res)=>{

const deleteid = req.params.id;


const data = JSON.parse(fs.readFileSync('./Develop/db/db.json', 'utf8'));

const result = data.filter(note=>note.id.toString() !==deleteid);

fs.writeFileSync('./Develop/db/db.json', JSON.stringify(result));

console.log(`deleted note with id : ${deleteid}`);

res.json(result);
})



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


//http://localhost:3000/
//http://localhost:3000/notes

//http://localhost:3000/api/notes
//https://young-anchorage-76744.herokuapp.com/
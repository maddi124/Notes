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
console.log("\n\nPOST request - New Note : " + JSON.stringify(newNotes));
newNotes.id='1';
newNotes.id++;

const data = JSON.parse(fs.readFileSync('./Develop/db/db.json', "utf8"));
console.log("\nGET request - Returning notes data: " + JSON.stringify(data));

data.push(newNotes);

fs.writeFileSync('./Develop/db/db.json', JSON.stringify(data));

res.json(data);
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



//http://localhost:3000/api/notes

//http://localhost:3000/api/db

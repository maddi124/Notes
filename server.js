const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const { notes } = require('./Develop/db/db.json');


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

 









//http://localhost:3000/api/db

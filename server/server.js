const db       = require('./db');
const express  = require('express');
const app      = express();

const PORT = 3030;

app.use('/api/books', require('./controllers/books'));

db.connect('mongodb://localhost:27017/', (err)=>{
    if (err) {
      throw err;
    }
    app.listen(PORT);
    console.log('Server is working on localhost: ' + PORT);
});

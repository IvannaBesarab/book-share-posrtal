const db = require('../db');

exports.all = function(cb) {
  // TODO: fill db with normal data of books 
  let books = db.get().collection('foods');
  
  books.find().toArray((err, docs) => {
    if(err) throw err;
    cb(err, docs);
  })
  
};

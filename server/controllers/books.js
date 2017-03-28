const express = require('express');
const router = express.Router();

const db = require('../db');
let Books = require('../models/booksModel');

router.get('/', function(req, res) {
  Books.all((err, docs)=>{
    res.json({books: docs})
  });
})

module.exports = router;
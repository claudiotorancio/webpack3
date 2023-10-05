//routes/books.js

const express = require('express');
const router = express.Router();

const {renderAllbooks} = require('./renderAllbooks.js');
const {createBook} = require('./createBook');
const {cutBook} = require('./cutBook');




router.get('/renderAllbooks', renderAllbooks);

router.post('/createBook', createBook);

router.delete('/cutBook/:id', cutBook);


module.exports = router;
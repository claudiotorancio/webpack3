//routes/books.js

const express = require('express');
const router = express.Router();

const {renderAllBooks} = require('./renderAllbooks.js');
const {createBook} = require('./createBook');
const {deleteBook} = require('./deleteBook');




router.get('/api/renderAllBooks', renderAllBooks);

router.post('/api/createBook', createBook);

router.delete('/api/deleteBook/:id', deleteBook);


module.exports = router;
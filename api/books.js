//routes/books.js

const express = require('express');
const router = express.Router();

const {renderAllBooks, createBook, deleteBook} = require('./controllers.js')

router.get('/api/books', renderAllBooks);

router.post('/api/books', createBook);

router.delete('/api/books/:id', deleteBook);


module.exports = router;
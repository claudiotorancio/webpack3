//routes/books.js

const express = require('express');
const router = express.Router();

const {renderAllBooks, createBook, deleteBook} = require('../backend/routes/controllers.js')

router.get('/', renderAllBooks);

router.post('/', createBook);

router.delete('/:id', deleteBook);


module.exports = router;
//routes/books.js

const express = require('express');
const router = express.Router();

const {renderAllbooks} = require('./renderAllbooks.js');
const {createBook} = require('./createBook');
const {cutBook} = require('./cutBook');




router.get('/api/renderAllbooks', renderAllbooks);

router.post('/api/createBook', createBook);

router.delete('/api/cutBook', cutBook);


module.exports = router;
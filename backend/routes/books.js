//routes/books.js

const { Router } = require('express')
const router = Router();

const { renderAtBooks, createBooks, deleteBooks } = require('./controllers.js')

router.get('/api/books', renderAtBooks);

router.post('/api/books', createBooks);

router.delete('/api/books/:id', deleteBooks);


module.exports = router;
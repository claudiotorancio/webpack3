//routes/books.js

const { Router } = require('express')
const router = Router();

const { renderAtBooks, createBooks, deleteBooks } = require('./controllers.js')

router.get('/', renderAtBooks);

router.post('/', createBooks);

router.delete('/:id', deleteBooks);


module.exports = router;
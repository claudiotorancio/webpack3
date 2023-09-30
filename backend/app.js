
//app.js

const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const cors = require('cors');


//initializacion
const app = express()



//Sett


//Middlewares
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'backend/public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(cors())


app.use('/api/books', require('../api/books.js'))

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  
 
//Static files
app.use(express.static(path.join(__dirname, 'backend', 'public')))

module.exports = app;
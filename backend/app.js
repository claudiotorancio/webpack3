const express = require('express');
const morgan = require('morgan');

const path = require('path');
const cors = require('cors');


const app = express();

// Middlewares
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Rutas
app.use('/', require('../api/books.js'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

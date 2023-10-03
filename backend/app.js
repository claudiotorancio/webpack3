const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const routes = require('../api/books');

const app = express();

// Middlewares
app.use(morgan('dev'));

const storage = multer.diskStorage({
  destination: path.join(__dirname, '/public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

app.use(multer({ storage }).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Rutas
app.use(routes);

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'backend', 'public')));

module.exports = app;

//index.js

import { config } from 'dotenv';
config()

import { fileURLToPath } from 'url';
import path from 'path';
import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../api/enrutador.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'public');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(json());

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Rutas
app.use(`/`, router);

// Archivos estáticos
app.use(express.static(outputPath));

export default app;

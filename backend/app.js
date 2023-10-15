//index.js



import { fileURLToPath } from 'url';
import path from 'path';
import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
/*import multer from 'multer';*/
import cors from 'cors';
import router from '../api/enrutador.js';








const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.join(__dirname, 'public');
/*const outputImagePath = path.join(__dirname, 'public/uploads')*/


const app = express();

// Middlewares
app.use(morgan('dev'));

/*const storage = multer.diskStorage({
  
  destination: outputImagePath,
  filename (req, file, cb) {
    
    cb(null, new Date().getTime() + path.extname(file.originalname));
      
  }
});
app.use(multer({storage, limits: { fieldSize: 10 * 1024 * 1024 }, preservePath: true }).single('image'));*/



app.use(cors());

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.use(urlencoded({ extended: false}));
app.use(json());
// Rutas
app.use(`/`, router);

// Archivos estáticos
app.use(express.static(outputPath));

export default app;

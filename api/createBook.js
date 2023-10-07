

import mongoose from 'mongoose';
import MONGODB_URI from '../backend/config.js';
import Book from '../backend/models/Book.js';



export const createBook = async (req, res) => {
    try {
    
     
      // Conexión a la base de datos
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
   
      const {title, author, isbn } = req.body;
      const newBook = new Book ({ title, author, isbn });
      console.log(newBook)
      await newBook.save();
      res.json({ message: 'Book saved' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error creating book' });
    } finally {
      // Desconexión de la base de datos
      mongoose.connection.close();
    }
  };

  
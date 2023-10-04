
require('dotenv').config();


const mongoose = require('mongoose');
const config = require('../config'); 
const Book = require('../backend/models/Book.js');

const createBook = async (req, res) => {
    try {
      const { title, author, isbn } = req.body;
      
  
      // Conexión a la base de datos
      await mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      const newBook = new Book({ title, author, isbn });
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


  module.exports = {
   createBook
  };
  
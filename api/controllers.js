require('dotenv').config();


const mongoose = require('mongoose');
const config = require('../config'); 
const Book = require('../backend/models/Book.js');



const renderAllBooks = async (req, res) => {
  try {
    // Conexión a la base de datos
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error fetching books' });
  } finally {
    // Desconexión de la base de datos
    mongoose.connection.close();
  }
};

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

const deleteBook = async (req, res) => {
  try {
    // Conexión a la base de datos
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const book = await Book.findByIdAndDelete(req.params.id);
   
    res.json({ message: 'Book deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error deleting book' });
  } finally {
    // Desconexión de la base de datos
    mongoose.connection.close();
  }
};

module.exports = {
  renderAllBooks,
  createBook,
  deleteBook,
};

const { unlink } = require('fs-extra');
const path = require('path');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config'); 
const Book = require('../models/Book.js');



const renderAllBooks = async (req, res) => {
  try {
    // Conexión a la base de datos
    await mongoose.connect(MONGODB_URI)
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
    const imagePath = '/uploads/' + req.file.filename;

    // Conexión a la base de datos
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const newBook = new Book({ title, author, isbn, imagePath });
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
    await mongoose.connect(MONGODB_URI)

    const book = await Book.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public' + book.imagePath));
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

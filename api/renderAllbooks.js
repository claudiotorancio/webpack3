
import mongoose from 'mongoose';
import MONGODB_URI from '../backend/config.js';
import Book from '../backend/models/Book.js';

export const renderAllbooks = async (req, res) => {
  try {
    // Conexión a la base de datos
    await mongoose.connect(MONGODB_URI, {
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


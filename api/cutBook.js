// cutBook.js


import mongoose from 'mongoose';
import MONGODB_URI from '../backend/config.js';
import Book from '../backend/models/Book.js';

export const cutBook = async (req, res) => {
  try {
    // Conexión a la base de datos
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const bookId = req.params.id; // Corregí la variable a minúsculas, concuerda con la que se utiliza en el findByIdAndDelete

    // Utilizamos findByIdAndDelete para eliminar el libro por su ID
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      // Si no se encuentra el libro, respondemos con un error 404
      return res.status(404).json({ error: 'Book not found' });
    }

    // Si el libro se eliminó correctamente, respondemos con un mensaje de éxito
    res.json({ message: 'Book deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting book' });
  } finally {
    // Desconexión de la base de datos
    mongoose.connection.close();
  }
};
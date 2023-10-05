// cutBook.js

const mongoose = require('mongoose');
const config = require('../config'); 
const Book = require('../backend/models/Book.js');


const cutBook = async (req, res) => {
  try {
    // Conexión a la base de datos
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Book.findByIdAndDelete(req.params.id);
   
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
  cutBook,
};

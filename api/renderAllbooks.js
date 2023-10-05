


const mongoose = require('mongoose');
const config = require('../config'); 
const Book = require('../backend/models/Book.js');

const renderAllbooks = async (req, res) => {
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

module.exports = {
    renderAllbooks,
}
  
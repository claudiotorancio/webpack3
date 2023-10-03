const { MongoClient } = require('mongodb');
const { MONGODB_URI } = require("./config.js");



// URL de conexión a tu base de datos MongoDB
const mongoURI = 'mongodb://localhost:27017/tu_basededatos';

async function connectToDatabase() {
  try {
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Conectar a la base de datos de forma asincrónica
    await client.connect();

    console.log('Conexión a MongoDB exitosa');

    // Realiza aquí las operaciones de MongoDB que necesites

    // Finaliza la conexión y cierra el cliente
    await client.close();
    
    console.log('Conexión cerrada');

    return true; // Indica que la conexión fue exitosa
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    return false; // Indica que hubo un error en la conexión
  }
}

// Llama a la función de conexión
connectToDatabase()
  .then((success) => {
    if (success) {
      console.log('La conexión a MongoDB se realizó con éxito.');
    } else {
      console.log('La conexión a MongoDB falló.');
    }
  })
  .catch((error) => {
    console.error('Error en la promesa de conexión:', error);
  });

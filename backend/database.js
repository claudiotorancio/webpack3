const { connect } = require("mongoose");
const { MONGODB_URI } = require("./config.js");

async function startServer() {
  try {
    const db = await connect(MONGODB_URI);
    console.log('DB is connected to', db.connection.name);

    // Tu lógica adicional aquí

    // Finaliza el proceso de Node.js
    process.exit(0);
  } catch (err) {
    console.error(err);
    // Finaliza el proceso con un código de error si hay un problema
    process.exit(1);
  }
}

// Iniciar la aplicación y la base de datos
startServer();

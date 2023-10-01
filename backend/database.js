const { connect } = require("mongoose");
const { MONGODB_URI } = require("./config.js");

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log('DB is connected to', db.connection.name);

    // Realiza cualquier tarea que necesitas después de la conexión

    // Luego, desconéctate y sale del proceso
    await db.connection.close();
    console.log('DB connection closed.');
    process.exit(0); // 0 indica una salida exitosa
  } catch (err) {
    console.error(err);
    process.exit(1); // 1 indica una salida con error
  }
})();



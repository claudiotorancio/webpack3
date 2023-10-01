// Importar las dependencias necesarias
const app = require('./app');
const { PORT } = require('./config');
const connectDB = require('./database');

// Función para iniciar el servidor
async function startServer() {
  try {
    // Conectar a la base de datos
    await connectDB();

    // Iniciar el servidor de Express
    const server = app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });

    // Manejo de errores no controlados
    process.on('unhandledRejection', (error) => {
      console.error('Error no controlado:', error);
      // Aquí puedes agregar lógica adicional de manejo de errores si es necesario
    });

    process.on('uncaughtException', (error) => {
      console.error('Excepción no capturada:', error);
      // Aquí puedes agregar lógica adicional de manejo de errores si es necesario
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

// Llamamos a la función para iniciar el servidor
startServer();

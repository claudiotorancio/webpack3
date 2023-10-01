//index.js

const {PORT} = require('./config.js')
const app = require('./app.js')
require('./database.js')



//Server Starter
console.log('Antes de iniciar el servidor...');
app.listen(PORT, () => {
    console.log('Server start on port', PORT);
})

  
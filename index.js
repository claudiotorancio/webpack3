

const app = require('./app.js')
require('./backend/database.js')
const {PORT} = require('./config.js')

//Server Starter
app.listen(PORT);
    console.log('Server start',PORT);
   

  
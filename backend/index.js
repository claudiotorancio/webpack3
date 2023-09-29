

const app = require('./app.js')
require('./database.js')
const {PORT} = require('./config.js')


//Server Starter
app.listen(PORT);
    console.log('Server start',PORT);
   

  
//index.js

const app = require('./app.js')
const {PORT} = require('./config.js')
require('./database.js')


//Server Starter
app.listen(PORT, () => {
    console.log(`Server start on port${PORT}`);
})

  
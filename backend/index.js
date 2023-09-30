//index.js

const app = require('./app.js')
const {PORT} = require('../api/config.js')
require('../api/database.js')



//Server Starter
app.listen(PORT, () => {
    console.log(`Server start on port${PORT}`);
})

  
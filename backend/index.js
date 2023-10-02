//index.js

const {PORT} = require('./config.js')
const app = require('./app.js')
require('./database.js')



//Server Starter
async function main() {
    await app.listen(PORT);
        console.log('Server start on port', PORT);
    }

main();

  
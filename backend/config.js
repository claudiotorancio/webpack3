//config.js

if (process.env.NODE_ENV !== 'production') {
const { config } = require("dotenv")
config()
}



const MONGODB_URI = process.env.MONGODB_URI;

const PORT = 4000 || process.env.PORT ;

module.exports = {
    MONGODB_URI,
    PORT
}

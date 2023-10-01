
const mongoose = require("mongoose");

const { MONGODB_URI } = require("./config.js");

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))


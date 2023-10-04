



const { connect} = require("mongoose");

const { MONGODB_URI } = require("./config.js");


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

(async () => {
  try {
    const db = await connect(MONGODB_URI, options);

    console.log('DB is connected to', db.connection.name);


  } catch (err) {

    console.error(err);


  }

})();


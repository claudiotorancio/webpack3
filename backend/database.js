
const { connect } = require("mongoose");

const { MONGODB_URI } = require("./config.js");

  (async () => {
    try {
      const db = await connect(MONGODB_URI)
      console.log('DB is connected to', db.connection.name);
    } catch (err) {
      console.error(err);
    }
  })();


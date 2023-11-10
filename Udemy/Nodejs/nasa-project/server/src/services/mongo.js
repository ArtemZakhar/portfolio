const mongoose = require("mongoose");

//we set up file in main folder, where all secret information is stored + needs additional import to the server.js file
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once("open", () => {
  console.log("Mongo DB connection ready!");
});

mongoose.connection.on("error", (e) => {
  console.error(e);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};

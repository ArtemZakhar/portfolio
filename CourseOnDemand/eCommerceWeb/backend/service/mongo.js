const mongoose = require("mongoose");

const CONNECTION_URL = process.env.CONNECTION_STRING;

async function dataBaseConnect() {
  await mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "eshop-database",
    })
    .then(() => {
      console.log("DB connection is ready");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { dataBaseConnect };

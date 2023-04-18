const http = require("http");
require("dotenv").config();

const app = require("./app");
const { dataBaseConnect } = require("./service/mongo");

const server = http.createServer(app);

async function startServer() {
  await dataBaseConnect();

  server.listen(8080, () => {
    console.log("Server is running http://localhost:8080");
  });
}

startServer();

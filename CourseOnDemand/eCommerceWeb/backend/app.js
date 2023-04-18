const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const api = require("./routes/api");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

const app = express();

app.use(cors());
app.options("*", cors());

require("dotenv").config();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use("/public/uploads/", express.static(path.join(__dirname + "/public/uploads/")));
app.use(errorHandler);

const api_url = process.env.API_URL;

app.use(`${api_url}`, api);

module.exports = app;

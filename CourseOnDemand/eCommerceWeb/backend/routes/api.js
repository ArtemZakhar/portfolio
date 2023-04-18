const express = require("express");
const productsRouter = require("./products/products.router");
const categoriesRouter = require("./categories/categories.router");
const ordersRouter = require("./orders/orders.router");
const usersRouter = require("./users/users.router");

const api = express.Router();



api.use("/products", productsRouter);
api.use("/users", usersRouter);
api.use("/categories", categoriesRouter);
api.use("/orders", ordersRouter);

module.exports = api;

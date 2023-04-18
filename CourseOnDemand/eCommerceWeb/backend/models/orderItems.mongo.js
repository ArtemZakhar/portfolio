const mongoose = require("mongoose");

const orderItemsInfo = new mongoose.Schema({
  quantity: Number,
});

module.exports = mongoose.model("OrderItem", orderItemsInfo);

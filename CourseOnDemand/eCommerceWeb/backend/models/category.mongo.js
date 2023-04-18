const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: String,
  icon: String,
});

module.exports = mongoose.model("Category", categorySchema);

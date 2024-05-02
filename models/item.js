const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  image_code: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

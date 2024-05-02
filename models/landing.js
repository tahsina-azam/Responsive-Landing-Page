const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema({
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

const Landing =
  mongoose.models.Landing || mongoose.model("Landing", landingSchema);

module.exports = Landing;

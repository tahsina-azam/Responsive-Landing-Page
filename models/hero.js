import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  text: { type: String, required: true },
  button_text: { type: String, required: true },
});

const Hero = mongoose.models.hero || mongoose.model("hero", heroSchema);

export default Hero;

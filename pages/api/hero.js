import dbConnect from "../../lib/dbConnect";
import Hero from "../../models/hero";

export default async function updateDataHandler(req, res) {
  await dbConnect(); // Connect to the MongoDB database
  try {
    const { heading, text, button_text } = req.body;

    // Check if the hero exists
    let hero = await Hero.findOne();

    if (!hero) {
      // If hero doesn't exist, create a new one
      hero = new Hero({ heading, text, button_text });
      await hero.save();
      return res.status(201).send({ message: "Hero created successfully" });
    }

    // If hero exists, update the values
    hero.heading = heading || hero.heading;
    hero.text = text || hero.text;
    hero.button_text = button_text || hero.button_text;
    await hero.save();

    res.status(200).send({ message: "Hero updated successfully" });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Check if all the fields are filled up correctly",
    });
  }
}

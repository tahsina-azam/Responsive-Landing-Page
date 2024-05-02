import dbConnect from "../../lib/dbConnect";
import Landing from "../../models/landing";

export default async function updateDataHandler(req, res) {
  await dbConnect(); // Connect to the MongoDB database
  try {
    const { image_code, header, text, img_url } = req.body;

    // Find the item based on the image_code
    let item = await Landing.findOne({ image_code });

    if (!item) {
      // If item doesn't exist, create a new one
      item = new Landing({ image_code, header, text, img_url });
      await item.save();
      return res.status(201).send({ message: "Item created successfully" });
    }

    // If item exists, update the values
    item.header = header || item.header;
    item.text = text || item.text;
    item.img_url = img_url || item.img_url;
    await item.save();

    res.status(200).send({ message: "Item updated successfully" });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Check if all the fields are filled up correctly",
    });
  }
}

import dbConnect from "../../lib/dbConnect";
import Hero from "../../models/hero";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();
    const hero = await Hero.findOne({});
    if (!hero) {
      return res.status(404).json({ message: "Hero data not found" });
    }
    return res.status(200).json(hero);
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

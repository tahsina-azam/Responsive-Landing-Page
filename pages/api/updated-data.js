import dbConnect from "../../lib/dbConnect";
import Landing from "../../models/landing";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();
    const items = await Landing.find({});
    if (!items || items.length === 0) {
      return res.status(404).json({ message: "Item data not found" });
    }
    return res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching item data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

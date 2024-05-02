import dbConnect from "../../lib/dbConnect";
import Data from "../../models/admin";

export default async function handler(req, res) {
  const { method, body } = req;

  if (method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).send(`Method ${method} is not allowed.`);
  }

  await dbConnect();

  try {
    const admin = await Data.Admin.findOne({ email: body.email });

    if (!admin) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    if (admin.password !== body.password) {
      return res.status(400).json({ error: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

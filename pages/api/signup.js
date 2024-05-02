import dbConnect from "../../lib/dbConnect";
import Admin from "../../models/admin";
import bcrypt from "bcrypt";

export default async function updateDataHandler(req, res) {
  await dbConnect(); // Connect to the MongoDB database
  try {
    const user = await Admin.Admin.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exists" });
    }

    await new Admin.Admin({ ...req.body }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Check if all the fields are filled up correctly",
    });
  }
}

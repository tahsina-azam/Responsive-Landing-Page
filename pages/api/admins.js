import dbConnect from "../../lib/dbConnect";
import Data from "../../models/admin";

const results = [];

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const data = await Data.Admin.find({});
        res.status(200).json({ status: "success", data: data });
      } catch (e) {
        console.error(e);
        res.status(404).json({
          status: "error",
          message: "User search could not be performed.",
        });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).send(`Method ${method} is not allowed.`);
      break;
  }
}

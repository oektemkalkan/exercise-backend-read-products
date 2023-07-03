import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Shop from "../../../db/models/Products";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const product = products.find((product) => product._id === id);

  if (request.method === "GET") {
    const shop = await Shop.findById(request.query.id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}

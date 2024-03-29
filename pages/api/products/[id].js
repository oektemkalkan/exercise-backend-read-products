//import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Products";

export default async function handler(request, response) {
  await dbConnect();
  //const { id } = request.query;

  //const product = product.find((product) => product._id === id);

  if (request.method === "GET") {
    const product = await Product.findById(request.query.id).populate(
      "reviews"
    );

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}

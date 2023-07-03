import mongoose from "mongoose";

const { Schema } = mongoose;

const shopSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const Shop =
  mongoose.models.Product || mongoose.model("Product", shopSchema, "products");

export default Shop;

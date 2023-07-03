import mongoose from "mongoose";
import  "./Review";

const { Schema } = mongoose;

const shopSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Shop =
  mongoose.models.Product || mongoose.model("Product", shopSchema);

export default Shop;

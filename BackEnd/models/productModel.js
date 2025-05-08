import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    default: "",
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Product", productSchema);

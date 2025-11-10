import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    Date: {
      type: Number,
      required: true,
    },
    bestSeller: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("productModel", productSchema);

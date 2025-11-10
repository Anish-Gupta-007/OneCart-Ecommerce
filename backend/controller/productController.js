import uploadOnCloudnary from "../config/cloudnary.js";
import { Product } from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestSeller,
    } = req.body;

    if (
      !req.files ||
      !req.files.image1 ||
      !req.files.image2 ||
      !req.files.image3 ||
      !req.files.image4
    ) {
      return res.status(400).json({ message: "All four images are required!" });
    }

    const image1 = await uploadOnCloudnary(req.files.image1[0].path);
    console.log(image1);
    const image2 = await uploadOnCloudnary(req.files.image2[0].path);
    const image3 = await uploadOnCloudnary(req.files.image3[0].path);
    const image4 = await uploadOnCloudnary(req.files.image4[0].path);

    const productData = {
      name,
      description,
      price: Number(price),
      Date: Date.now(),
      category,
      subcategory: subCategory,
      size: size.split(","),
      bestSeller: bestSeller === "true" ? true : false,
      image1,
      image2,
      image3,
      image4,
    };
    console.log(productData);
    const product = await Product.create(productData);
    return res.status(201).json(product);
  } catch (err) {
    console.log("Add product error", err);
    return res.status(500).json({ message: `Add product error ${err}` });
  }
};

export const ListProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    if (!product) {
      return res
        .status(400)
        .json({ message: "product didint find on list product" });
    }
    return res.status(201).json(product);
  } catch (err) {
    console.log("list product error", err);
    return res.status(500).json({ message: `List product error ${err}` });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(400)
        .json({ message: "product didint find on remove product" });
    }
    return res.status(201).json(product);
  } catch (err) {
    console.log("remove product error", err);
    return res.status(500).json({ message: `remove product error ${err}` });
  }
};

import express from "express";
import {
  addProduct,
  ListProduct,
  removeProduct,
} from "../controller/productController.js";
import Upload from "../middleware/multer.js";
import AdminAuth from "../middleware/AdminAuth.js";

const ProductRoute = express.Router();

ProductRoute.post(
  "/addProduct",
  Upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

ProductRoute.get("/getproduct", ListProduct);
ProductRoute.post("/removeproduct/:id", AdminAuth, removeProduct);
export default ProductRoute;

import express from "express";
const CartRouter = express.Router();

import { isAuth } from "../middleware/isAuth.js";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controller/cartController.js";

CartRouter.post("/get", isAuth, getUserCart);
CartRouter.post("/add", isAuth, addToCart);
CartRouter.post("/update", isAuth, updateCart);

export default CartRouter;

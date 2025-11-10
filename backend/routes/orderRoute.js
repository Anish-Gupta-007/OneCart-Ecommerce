import express from "express";
import {
  allOrder,
  placeOrder,
  placeOrderRazorpay,
  updateStatus,
  userOrder,
  verifyRazorPay,
} from "../controller/orderController.js";
import { isAuth } from "../middleware/isAuth.js";
import adminAuth from "../middleware/AdminAuth.js";

const orderRoute = express.Router();
// FOR USERS
orderRoute.post("/placeorder", isAuth, placeOrder);
orderRoute.post("/razorpay", isAuth, placeOrderRazorpay);
orderRoute.post("/verifyrazorpay", isAuth, verifyRazorPay);
orderRoute.post("/userorder", isAuth, userOrder);

// FOR ADMIN

orderRoute.post("/list", adminAuth, allOrder);
orderRoute.post("/status", adminAuth, updateStatus);

export default orderRoute;

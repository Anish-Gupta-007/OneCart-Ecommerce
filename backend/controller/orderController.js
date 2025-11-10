import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

const razorpayInstance = new razorpay({
  key_id: process.env.RazorPay_apikey,
  key_secret: process.env.RazorPay_secret,
});
const currency = "inr";
console.log("razorpayInstance", razorpayInstance);

export const placeOrderRazorpay = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    const userId = req.userId;
    const orderData = {
      items,
      amount,
      userId,
      address,
      paymentMethod: "Razorpay",
      status: "Order Placed",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new Order(orderData);
    await newOrder.save();
    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };
    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(err);
        return res.status(500).json(order);
      }
      res.status(200).json(order);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const { items, amount, address } = req.body;
    console.log(req.body);
    const userId = req.userId;
    const orderData = {
      items,
      amount,
      address,
      userId,
      status: "Order Placed",
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new Order(orderData);
    await newOrder.save();
    await User.findByIdAndUpdate(userId, { cartData: {} });
    return res.status(201).json({ message: "order place" });
  } catch (error) {
    console.error("Error in placeOrder:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const verifyRazorPay = async (req, res) => {
  try {
    const userId = req.userId;
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === "paid") {
      await Order.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      await User.findByIdAndUpdate(userId, { cartData: {} });
      return res.status(200).json({ mesaage: "payment ScessFull" });
    } else {
      res.json({ mesaage: "Payment failed" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ mesaage: err.mesaage });
  }
};

export const userOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const order = await Order.find({ userId });
    return res.status(200).json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "user order error" });
  }
};

// For Admin

export const allOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status });
    return res.status(200).json({ message: "status Updated" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

import user from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;
    const userData = await user.findById(req.userId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    let cartData = userData.cartData || {};
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await user.findByIdAndUpdate(req.userId, { cartData });
    return res.status(200).json({ message: "Item added to cart successfully" });
  } catch (err) {
    console.log("error from addToCart", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCart = async (req, res) => {
  try {
    const { itemId, size, quantity } = req.body;
    const userData = await user.findById(req.userId);
    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;
    await user.findByIdAndUpdate(req.userId, { cartData });
    return res.status(200).json({ message: "Cart updated successfully" });
  } catch (err) {
    console.log("error from updateCart", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserCart = async (req, res) => {
  try {
    const userData = await user.findById(req.userId);
    let cartData = await userData.cartData;
    return res.status(200).json({ cartData });
  } catch (err) {
    console.log("error from getUserCart", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

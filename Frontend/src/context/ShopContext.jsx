import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthDatacontext } from "../context/AuthCotext";
import axios from "axios";
import { use } from "react";
import { UserDataContext } from "./UserContext";
// import { set } from "mongoose";
// import user from "../../../backend/models/userModel";
// chaacha
import { toast } from "react-toastify";

export const ShopDataContext = createContext();
function ShopContext({ children }) {
  const [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  let { serverUrl } = useContext(AuthDatacontext);
  const { userData } = useContext(UserDataContext);

  let currency = "₹";
  let deliveryCharge = 50;

  console.log("userData", userData);

  const getProducts = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/getproduct");
      console.log(result.data);
      setProducts(result.data);
    } catch (err) {
      console.log("error from getProducts", err);
    }
  };

  const addToCart = async (itemId, size) => {
    if (!size) {
      alert("Please select a size");
      return;
    }
    let cartData = structuredClone(cartItem);
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

    setCartItem(cartData);

    if (userData) {
      try {
        const result = await axios.post(
          serverUrl + "/api/cart/add",
          { itemId, size },
          { withCredentials: true }
        );
        toast.success("Item added to cart! 🛒");
        console.log(result.data);
      } catch (err) {
        console.log("error from addToCart", err);
      }
    }
  };

  const getUserCart = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/cart/get",
        {},
        { withCredentials: true }
      );
      console.log("hello");
      console.log(result);
      setCartItem(result.data.cartData);
    } catch (err) {
      console.log(err);
    }
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);

    if (userData) {
      try {
        const result = await axios.post(
          serverUrl + "/api/cart/update",
          {
            itemId,
            size,
            quantity,
          },
          { withCredentials: true }
        );
      } catch (err) {
        console.log("error from updateQuantity", err);
      }
    }
  };

  const getCartItems = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const itam in cartItem[items]) {
        try {
          if (cartItem[items][itam] > 0) {
            totalCount += cartItem[items][itam];
          }
        } catch (err) {
          console.log("error in getCartItems", err);
        }
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((products) => products._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (err) {
          console.log("error in getCartAmount", err);
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getUserCart();
  }, []);

  let value = {
    products,
    currency,
    deliveryCharge,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItem,
    getCartItems,
    setCartItem,
    updateQuantity,
    getCartAmount,
  };

  return (
    <div>
      <ShopDataContext.Provider value={value}>
        {children}
      </ShopDataContext.Provider>
    </div>
  );
}

export default ShopContext;

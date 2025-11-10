import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import rozorpay from "../assets/Razorpay.jpg";
import { ShopDataContext } from "../context/ShopContext";
import { AuthDatacontext } from "../context/AuthCotext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("cod");
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });
  const {
    cartItem,
    setCartItem,
    getCartAmount,
    products,
    currency,
    deliveryCharge,
  } = useContext(ShopDataContext);
  const { serverUrl } = useContext(AuthDatacontext);
  console.log("🛒 cartItem:", cartItem);

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        const { data } = await axios.post(
          serverUrl + "/api/order/verifyrazorpay",
          response,
          { withCredentials: true }
        );
        if (data) {
          navigate("/order");
          setCartItem({});
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItem = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((products) => products._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItem.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItem,
        amount: getCartAmount() + deliveryCharge,
      };
      console.log("orderData", orderData);
      switch (method) {
        case "cod":
          const result = await axios.post(
            serverUrl + "/api/order/placeorder",
            orderData,
            { withCredentials: true }
          );
          console.log(result.data);
          if (result.data) {
            setCartItem({});
            navigate("/order");
          } else {
            console.log(result.data.message);
          }
          break;
        case "rozorpay":
          const resultRazorpay = await axios.post(
            serverUrl + "/api/order/razorpay",
            orderData,
            { withCredentials: true }
          );
          if (resultRazorpay.data) {
            initPay(resultRazorpay.data);
          }
        default:
          break;
      }
    } catch (err) {
      console.log("onsubmithendler", err);
    }
  };
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center flex-col  justify-center  gap-[50px] md:flex-row relative">
      <div className="lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]">
        <form
          onSubmit={onSubmitHandler}
          className="lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]"
        >
          <div className="py-[10px]">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="First name"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={onchangeHandler}
              name="firstName"
              value={formData.firstName}
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={onchangeHandler}
              name="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="email"
              placeholder="email address"
              className="w-[100%] h-[50px] rounded-md  bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]"
              onChange={onchangeHandler}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="street"
              className="w-[100%] h-[50px] rounded-md  bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]"
              onChange={onchangeHandler}
              name="street"
              value={formData.street}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="City"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={onchangeHandler}
              name="city"
              value={formData.city}
            />
            <input
              type="text"
              placeholder="state"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={onchangeHandler}
              name="state"
              value={formData.state}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="text"
              placeholder="Pincode"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={onchangeHandler}
              name="pincode"
              value={formData.pincode}
            />
            <input
              type="text"
              placeholder="Country"
              className="w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] "
              required
              onChange={onchangeHandler}
              name="country"
              value={formData.country}
            />
          </div>
          <div className="w-[100%] h-[70px] flex items-center justify-between px-[10px]">
            <input
              type="numbers"
              placeholder="Phone"
              className="w-[100%] h-[50px] rounded-md  bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434]"
              onChange={onchangeHandler}
              name="phone"
              value={formData.phone}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-[18px] active:bg-slate-600 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] right-[35%] bottom-[10%] border-[1px] border-[#80808049] ml-[30px] mt-[20px] "
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]">
        <div className="lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col">
          <CartTotal />
          <div className="py-[10px]">
            <Title text1={"PAYMENT"} text2={"METHOD "} />
          </div>
          <div className="w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-[0px] justify-center gap-[50px] ">
            <button
              onClick={() => setMethod("rozorpay")}
              className={`w-[150px] h-[50px] rounded-sm ${
                method === "rozorpay"
                  ? "border-[5px] border-blue-900 rounded-sm"
                  : ""
              }`}
            >
              <img
                src={rozorpay}
                alt=""
                className="w-[100%] h-[100%] object-fill rounded-sm"
              />
            </button>
            <button
              onClick={() => setMethod("cod")}
              className={`w-[200px] h-[50px] bg-gradient-to-l from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${
                method === "cod"
                  ? "border-[5px] border-blue-500 rounded-sm"
                  : ""
              }`}
            >
              CASH ON DELHIVERY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

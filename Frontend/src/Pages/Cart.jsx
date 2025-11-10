import React, { useContext, useEffect, useState } from "react";
import Title from "../Components/Title";
import { useNavigate } from "react-router-dom";

import { ShopDataContext } from "../context/ShopContext";
import { IoTrashBin } from "react-icons/io5";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { products, currency, cartItem, updateQuantity } =
    useContext(ShopDataContext);

  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <div className="h-[8%] w-[100%] text-center mt-[80px] ">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
        {cartData.map((item, index) => {
          const productsData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div className="w-[100%] h-[10%] border-t border-b" key={index}>
              <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048] py-[10px] px-[20px] rounded-2xl relative">
                <img
                  src={productsData.image1}
                  alt=""
                  className="w-[100px] h-[100px] rounded-md"
                />
                <div className="flex items-start justify-center flex-col gap-[10px]">
                  <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
                    {productsData.name}
                  </p>
                  <div className="flex items-center gap-[20px]">
                    <p className="text-[20px] text-[#aaf4e7] ">
                      {currency}
                      {productsData.price}
                    </p>
                    <p className="w-[40px] h-[40px] text-[16px] text-[white] bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9] ">
                      {item.size}
                    </p>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-[white] text-[18px] font-semibold bg-[#518080b4] rounded-md border-[1px] border-[#9ff9f9] absolute left-[75%] md:left-[50%] top-[46%px] md:top-[40%] "
                  onChange={(e) =>
                    e.target.value === " " || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />
                <IoTrashBin
                  className="text-[#9ff9f9] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start items-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <button
            className="text-[18px] hover:bg-slate-600 cursor-pointer bg-[#51808048] py-[10px} px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] ml-[30px] mt-[20px]"
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/placeorder");
              }
            }}
          >
            {" "}
            PROCEED TO CHEACKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

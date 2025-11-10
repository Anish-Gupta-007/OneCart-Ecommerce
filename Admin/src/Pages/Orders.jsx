import React from "react";
import Nav from "../Components/Nav";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { SiEbox } from "react-icons/si";
import { authDataConetxt } from "../../Context/AuthContext";
import { useEffect } from "react";

function Orders() {
  let [orders, setOrders] = useState([]);
  let { serverUrl } = useContext(authDataConetxt);

  const fetchAllOrder = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/order/list",
        {},
        { withCredentials: true }
      );
      console.log(result.data);
      setOrders(result.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const stausHendler = async (e, orderId) => {
    try {
      const result = await axios.post(
        serverUrl + "/api/order/status",
        {
          orderId,
          status: e.target.value,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      if (result.data) {
        await fetchAllOrder();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllOrder();
  }, []);
  return (
    <div className="w-[98vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]  ">
      <Nav />
      <div className="w-[100%] h-[100%] flex items-center lg:justify-start justify-center">
        <SideBar />
        <div className="lg:w-[85%] md:w-[70%] lg:ml-[310px] md:ml-[250px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden pt-[50px] ml-[100px]">
          <div className="w-[400px] h-[50px] text-[28px] md:text[40px] mb-[20px] text-[white]">
            All Order List
          </div>
          {orders.map((order, index) => (
            <div
              className="w-[90%] h-[40%] bg-slate-600 rounded-xl flex lg:items-center items-start justify-between flex-col lg:flex-row p-[10px]  md:px-[20px] gap-[20px]"
              key={index}
            >
              <SiEbox className="w-[60px] h-[60px] text-[black] p-[5px] rounded-lg bg-[white]" />
              <div>
                <div className="flex items-start justify-center flex-col gap-[5px] text-[16px] text-[#56dbfc]">
                  {order.items.map((items, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        <p key={index}>
                          {items.name.toUpperCase()}*{items.quantity}{" "}
                          <span>{items.size}</span>
                        </p>
                      );
                    } else {
                      return (
                        <p key={index}>
                          {items.name.toUpperCase()}*{items.quantity}{" "}
                          <span>{items.size}</span>
                        </p>
                      );
                    }
                  })}
                </div>
                <div className="text-[15px] text-green-100 ">
                  <div>
                    {order.address.firstName + " " + order.address.lastName}
                    <p>{order.address.street + ", "}</p>
                    <p>
                      {order.address.city +
                        ", " +
                        order.address.state +
                        ", " +
                        order.address.pincode}
                    </p>
                    <p>{order.address.phone}</p>
                  </div>
                </div>
              </div>
              <div className="text-[15px] text-green-100 ">
                <p>Items:{order.items.length}</p>
                <p>Method:{order.paymentMethod}</p>
                <p>Payment:{order.payment ? "Done" : "Pending"}</p>
                <p>Date:{new Date(order.date).toLocaleDateString()}</p>
                <p className="text-[20px] ">₹{order.amount}</p>
              </div>
              <select
                name=""
                id=""
                value={order.status}
                className="px-[5px] py-[10px] bg-slate-500 rounded-lg border-[1px] border-[#96eef3]"
                onChange={(e) => stausHendler(e, order._id)}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out Of Delhivery">Out Of Delhivery</option>
                <option value="Delhiverd">Delhiverd</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;

import React from "react";
import Nav from "../Components/Nav";
import SideBar from "../Components/SideBar";
import { useState } from "react";
import { useContext } from "react";
import { authDataConetxt } from "../../Context/AuthContext";
import axios from "axios";
import { useEffect } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const { serverUrl } = useContext(authDataConetxt);
  const fetchList = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/product/getproduct");
      if (!result) {
        console.log("result not found");
      }
      setList(result.data);
      console.log(result.data);
    } catch (err) {
      console.log("error on list.jsx", err);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  const removeList = async (id) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/product/removeproduct/${id}`,
        {},
        { withCredentials: true }
      );
      if (result.data) {
        fetchList();
      } else {
        console.log("failed to remove product!!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] ">
      <Nav />
      <div className="w-[100%] h-[100%] flex items-center justify-start">
        <SideBar />
        <div className="w-[82%] h-[100%] lg:ml-[320px] md:ml[230px] mt-[70px] flex flex-col gap-[30px] overflow-x-hidden py-[50px] ml-[100px] ">
          <div className="w-[400px] h-[50px] text-[28px] md:text-[35px] md:pl-[100px] mb-[20px] text-[white]">
            All Listed Product
          </div>
          {list.length > 0 ? (
            list.map((item, i) => (
              <div
                className="w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px] md:ml-[100px] "
                key={i}
              >
                <img
                  src={item.image1}
                  alt=""
                  className="w-[30%] md:w-[120px] h-[90%] rounded-lg"
                />
                <div className="w-[90%] h-[80%]  flex flex-col items-start justify-center gap-[2px]  ">
                  <div className="w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]">
                    {item.name}
                  </div>
                  <div className="w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]">
                    {item.category}
                  </div>
                  <div className="w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]">
                    ₹{item.price}
                  </div>
                </div>
                <div className="w-[10%] h-[100%] bg-transparent flex items-center justify-center ">
                  <span
                    className="w-[35px] h-[30%] flex items-center justify-center rounded-md md:hover:bg-red-300 md:hover:text-black cursor-pointer hover:text-red-300"
                    onClick={() => removeList(item._id)}
                  >
                    X
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-lg"> No Product Availeble </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

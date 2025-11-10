import React, { useContext, useState } from "react";
import logo from "../assets/vcartLogo.png";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { RiSearchFill } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { BsCollectionFill } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthDatacontext } from "../context/AuthCotext";
import { ShopDataContext } from "../context/ShopContext";
const Nav = () => {
  let { getCurrentUser, userData } = useContext(UserDataContext);
  let { serverUrl } = useContext(AuthDatacontext);
  const { showSearch, setShowSearch, search, setSearch, getCartItems } =
    useContext(ShopDataContext);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      getCurrentUser();
    } catch (err) {
      console.log("error from handleLogut", err);
    }
  };
  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black ">
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px] ">
        <img src={logo} alt="" className="w-[30px]" />
        <h1 className="text-[20px] text-[black] font-sans"> OneCart</h1>
      </div>
      <div className="w-[50%] lg:w-[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-[white]">
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl"
            onClick={() => navigate("/collections")}
          >
            Collections
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl"
            onClick={() => navigate("/about")}
          >
            About
          </li>
          <li
            className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex items-center justify-end gap-[25px]">
        {!showSearch && (
          <FaSearch
            className="w-[30px] h-[30px] text-[#000000] cursor-pointer"
            onClick={() => {
              setShowSearch((prev) => !prev);
              navigate("/collections");
            }}
          />
        )}
        {showSearch && (
          <RiSearchFill
            className="w-[30px] h-[30px] text-[#000000] cursor-pointer"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {!userData && (
          <FaUserAlt
            className="w-[25px] h-[25px] text-[#000000] cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          />
        )}
        {userData && (
          <div
            className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1)}{" "}
          </div>
        )}
        <FaCartArrowDown
          className="w-[25px] h-[25px] text-[#000000] cursor-pointer hidden md:block"
          onClick={() => navigate("/cart")}
        />
        <p className="absolute w-[17px] h-[17px] items-center md:flex justify-center bg-[black] px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px] hidden ">
          {getCartItems()}
        </p>
      </div>
      {showSearch && (
        <div className="w-[100%] h-[70px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here"
            className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
      )}
      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white] ">
            {!userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                  navigate("/login");
                }}
              >
                Logout
              </li>
            )}
            <li
              className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/order");
                setShowProfile(false);
              }}
            >
              Orders
            </li>
            <li
              className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              onClick={() => {
                navigate("/about");
                setShowProfile(false);
              }}
            >
              About
            </li>
          </ul>
        </div>
      )}
      <div className="w-[100vw] h-[90px] flex items-center justify-center px-[20px] gap-[30px] fixed bottom-0 left-0 bg-[#191818] md:hidden text-[20px]">
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px] ">
          <IoMdHome
            className="w-[30px] h-[30px] text-[white] md:hidden"
            onClick={() => navigate("/")}
          />
          Home
        </button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px] ">
          <BsCollectionFill
            className="w-[25px] h-[25px] text-[white] md:hidden"
            onClick={() => navigate("/collections")}
          />
          Collections
        </button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px] ">
          <BiSolidContact
            className="w-[25px] h-[25px] text-[white] md:hidden"
            onClick={() => navigate("/contact")}
          />
          Contact
        </button>
        <button
          className="text-[white] flex items-center justify-center flex-col gap-[2px] "
          onClick={() => navigate("/cart")}
        >
          <FaCartArrowDown className="w-[25px] h-[25px] text-[white] md:hidden" />
          Cart
        </button>
        <p className="absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px] py-[5px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]">
          {getCartItems()}
        </p>
      </div>
    </div>
  );
};

export default Nav;

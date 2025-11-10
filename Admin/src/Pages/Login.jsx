import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import axios from "axios";
import { authDataConetxt } from "../../Context/AuthContext";
import { adminDataContext } from "../../Context/AdminContext";
import { use } from "react";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { serverUrl } = useContext(authDataConetxt);
  const { adminData, getAdmin } = useContext(adminDataContext);
  const [loading, setLoading] = useState(false);

  const adminLogin = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      getAdmin();
      navigate("/");
      setLoading(true);

      console.log(result.data);
      toast.success("Admin Login SucessFully");
    } catch (err) {
      console.log("eror on admin login", err);
      setLoading(false);

      toast.err("admin login fail");
    }
  };
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
        <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
          <img src={logo} alt="" className="w-[40px] " />
          <h1>OneCart</h1>
        </div>
        <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
          <span className="text-[25px] font-semibold">Login page</span>
          <span className=" text-[16px]">
            Welcome to OneCart, Apply to admin login
          </span>
        </div>
        <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
          <form
            action=""
            className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
            onSubmit={adminLogin}
          >
            <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
              <input
                type="text"
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder:[#ffffffc7] px-[20px] font-semibold"
                placeholder=" enter Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type={show ? "text" : "password"}
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder:[#ffffffc7] px-[20px] font-semibold"
                placeholder=" enter Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {!show && (
                <FaRegEye
                  className="w- [20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
              {show && (
                <IoIosEyeOff
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
              <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
                {loading ? <Loading /> : " Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

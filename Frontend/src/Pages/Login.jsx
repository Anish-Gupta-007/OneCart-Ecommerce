import React, { useContext, useState } from "react";
import logo from "../assets/vcartLogo.png";
import GooglelLogo from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { AuthDatacontext } from "../context/AuthCotext";
import { auth, provider } from "../../utils/FireBase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { serverUrl } = useContext(AuthDatacontext);
  const { getCurrentUser } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/");
      setLoading(true);
      toast.success("Login SucessFully");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;
      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        {
          name,
          email,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/");
      toast.success("Login SucessFully");
    } catch (err) {
      console.log(err);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="" className="w-[40px] " />
        <h1>OneCart</h1>
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Login page</span>
        <span className=" text-[16px]">
          Welcome to OneCart place Your Order
        </span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
          onSubmit={handleLogin}
        >
          <div
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer "
            onClick={googleLogin}
          >
            <img src={GooglelLogo} alt="" className="w-[20px]" /> Login Your
            account with google
          </div>
          <div className="w-[100%] h-[20px] flex items-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

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
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoIosEyeOff
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              Create Acccount
            </button>
            <p className=" flex gap-[10px]">
              You don't have any Account?
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/registraion")}
              >
                {loading ? <Loading /> : "  Register"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

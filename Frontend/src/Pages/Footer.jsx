import React from "react";
import logo from "../assets/vcartLogo.png";

const Footer = () => {
  return (
    <div className="w-[100vw] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]">
      <div className="w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]">
        <div className="md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]">
          <div className="flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]">
            <img
              src={logo}
              alt=""
              className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            />
            <p className="text-[19px] md:text-[20px] text-black">OneCart</p>
          </div>
          <p className="text-[15px] text-[#1e2223] hidden md:block">
            {" "}
            One cart is your all in one shopping destination, Offering top
            quality products Unbeatable deals and fast delivery all packed by
            trusted service designed to make your life Easier every day{" "}
          </p>
          <p className="text-[15px] text-[#1e2223] flex md:hidden">
            {" "}
            Fast easy reliable oneCart Shoping
          </p>
        </div>
        <div className="md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center">
          <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
            <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              COMPANY
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              Home
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              About Us
            </li>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              Delivery
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="w-[40%] h-[100%] flex items-center justify-center flex-col text-center">
          <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
            <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              Get in Touch
            </p>
          </div>
          <ul>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              +91-7067881648
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              contact@OneCart.com
            </li>
            <li className="text-[15px] text-[#1e2223] hidden md:block cursor-pointer">
              +1-123-456-7890
            </li>
            <li className="text-[15px] text-[#1e2223] cursor-pointer">
              admin@OneCart.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

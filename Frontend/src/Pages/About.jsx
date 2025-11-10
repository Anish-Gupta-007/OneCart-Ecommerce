import React from "react";
import Title from "../Components/Title";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="w-[99vw] md:w-[99vw]  min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center flex-col  justify-center pt-[80px] gap-[50px]">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="w-[100%] flex items-center justify-center flex-col lg:flex-row">
        <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
          <img
            src={about}
            alt=""
            className="lg;w-[65%] w-[80%] shadow-md shadow-black rounded-sm"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]">
          <p className="lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]">
            {" "}
            One cart born for smart seamless Shopping Created To delivery
            quality products Trending styles and everyday in one place With
            Reliable Service great deal and fast delivery One card make your
            online shopping experience Simple satisfy and stress free{" "}
          </p>
          <p className="lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]">
            {" "}
            Modern Sopher combining style convenience and affordability Whether
            it fashion essentials and trends We bring everything you need to one
            trusted platform with fast delivery Easy return and a customer first
            Shopping experience you'll love{" "}
          </p>
          <p className="lg:w-[80%] w-[100%] text-[white]  text-[15px] lg:text-[18px] mt-[10] font-bold">
            {" "}
            Our Mission
          </p>
          <p className="lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]">
            {" "}
            Our mission is redefined Online shopping by delivery quality
            affordability and convenience 1 cart contact customer with Trust
            product and brand Offering seamless customer-focused Experience that
            saves time Add value and feeds every lifestyle you need{" "}
          </p>
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-center flex-col gap-[10px] ">
        <Title text1={"Why"} text2={"Choose Us"} />
        <div className="w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] ">
          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              {" "}
              Quality Assurance{" "}
            </b>
            <p>
              We Guarantee quality through strict checks, reliable sourcing ,
              and a commitment to coustomer satisfaction always.
            </p>
          </div>
          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Convenience
            </b>
            <p>
              Soft easily with fast delivery, Simple navigation, secure
              checkouts, And everything you need in one place
            </p>
          </div>
          <div className="lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">
              Exceptional customer service
            </b>
            <p>
              Our dedicated Support team Ensure quick response, Helpful Solution
              And a smooth shopping experience Every time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

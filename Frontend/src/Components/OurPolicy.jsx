import React from "react";
import Title from "./Title";
import { TbExchange } from "react-icons/tb";
import { TbShoppingBagDiscount } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className="w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px]">
      <div className="h-[8%] w-[100%] text-center mt-[70px] ">
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          {" "}
          Customer friendly policies - Committed to your satisfaction and safety
        </p>
      </div>
      <div className="w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]">
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
          <TbExchange className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            Easy Exchange Policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            {" "}
            Exchange made easy simple quick and customer friendly process
          </p>
        </div>
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
          <TbShoppingBagDiscount className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            7 days replacement policy
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            {" "}
            Sopping with confidence - 7 days easy replacement guarantee
          </p>
        </div>
        <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
          <MdOutlineSupportAgent className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]" />
          <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">
            Best Customer support
          </p>
          <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">
            {" "}
            Trusted customer support - Your Satisfaction is my responsibility
          </p>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-slate-400"></div>
      <div className="w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center mt-[20px]">
        {" "}
        Copyright @2025OneCart.com-All Right Reserved
      </div>
    </div>
  );
};

export default OurPolicy;

// import React from "react";
// import Title from "./Title";
// import { TbExchange, TbShoppingBagDiscount } from "react-icons/tb";
// import { MdOutlineSupportAgent } from "react-icons/md";

// const OurPolicy = () => {
//   return (
//     <div className="w-full min-h-screen md:min-h-[70vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] py-10 md:py-16">
//       {/* Title */}
//       <div className="text-center mb-8">
//         <Title text1={"OUR"} text2={"POLICY"} />
//         <p className="text-[13px] md:text-[20px] px-4 text-blue-100 max-w-[600px] mx-auto">
//           Customer friendly policies - Committed to your satisfaction and safety
//         </p>
//       </div>

//       {/* Policy cards */}
//       <div className="w-full flex flex-wrap items-center justify-center gap-10 md:gap-14">
//         {/* Card 1 */}
//         <div className="w-[320px] sm:w-[380px] flex flex-col items-center gap-3 text-center">
//           <TbExchange className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#90b9ff]" />
//           <p className="font-semibold text-[19px] md:text-[25px] text-[#a5e8f7]">
//             Easy Exchange Policy
//           </p>
//           <p className="font-semibold text-[12px] md:text-[18px] text-[aliceblue]">
//             Exchange made easy, simple, quick, and customer friendly.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="w-[320px] sm:w-[380px] flex flex-col items-center gap-3 text-center">
//           <TbShoppingBagDiscount className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#90b9ff]" />
//           <p className="font-semibold text-[19px] md:text-[25px] text-[#a5e8f7]">
//             7 Days Replacement Policy
//           </p>
//           <p className="font-semibold text-[12px] md:text-[18px] text-[aliceblue]">
//             Shop with confidence – 7 days easy replacement guarantee.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="w-[320px] sm:w-[380px] flex flex-col items-center gap-3 text-center">
//           <MdOutlineSupportAgent className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-[#90b9ff]" />
//           <p className="font-semibold text-[19px] md:text-[25px] text-[#a5e8f7]">
//             Best Customer Support
//           </p>
//           <p className="font-semibold text-[12px] md:text-[18px] text-[aliceblue]">
//             Trusted support – Your satisfaction is our responsibility.
//           </p>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-[1px] bg-slate-400 mt-10"></div>

//       {/* Footer */}
//       <div className="w-full py-3 bg-[#dbfcfcec] text-center text-[13px] md:text-[15px]">
//         Copyright ©2025 OneCart.com – All Rights Reserved
//       </div>
//     </div>
//   );
// };

// export default OurPolicy;

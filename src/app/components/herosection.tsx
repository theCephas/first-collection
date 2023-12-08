import React from "react";

const Herosection = () => {
  return (
    <div className="px-8 lg:px-10">
      <div className="m-auto flex flex-col items-center justify-center text-center gap-6">
        <p className="text-[40px] sm:text-[56px] w-full sm:w-[679px] gilroy font-[700] leading-[56px] text-[#060606] text-center ">
          Shop quality and affordable fashion accessories{" "}
        </p>
        <p className="text-[14px] w-full sm:w-[535px] font-[400] leading-[20.3px] text-[#060606] text-center ">
          Get trendy shoes, bags, purses, and headties, and transform your
          everyday style into something extraordinary
        </p>
        <button
          style={{
            boxShadow: "0px 11px 22px 0px rgba(255, 92, 0, 0.25)",
          }}
          className="text-[14px] text-[#fefefe] font-[600] active:scale-75 active:duration-100 transform flex py-[12px] px-[16px] items-center flex-col justify-center gap-[10px] rounded-[8px] bg-[#ff5c00] "
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Herosection;

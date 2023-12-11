"use client";

import React, { useState } from "react";
import VectorLeft1 from "../../../public/vectorleft1.svg";
import VectorLeft2 from "../../../public/vectorleft2.svg";
import VectorRight1 from "../../../public/vectorright1.svg";
import VectorRight2 from "../../../public/vectorright2.svg";
import Slide1 from "../../../public/slide1.svg";
import Slide2 from "../../../public/slide2.svg";
import Slide3 from "../../../public/slide3.svg";
import Slide4 from "../../../public/slide4.svg";
import Slide from "../../../public/slide.png";
import Image from "next/image";

const Herosection = () => {
  return (
    <div className="mb-20 bg-[#fffafa -10 h-[800px] reltive">
      <div className="px-8 lg:px-10 pb-[150px] m-auto flex flex-col items-center justify-center text-center gap-6 pt-[100px] lg:pt-[130px]">
        <p className="text-[40px] sm:text-[56px] w-full md:w-[679px] font-judson font-[700] leading-[56px] text-[#060606] text-center ">
          Shop quality and affordable fashion accessories{" "}
        </p>
        <p className="text-[14px] w-full sm:w-[535px] gilroy font-[400] leading-[20.3px] text-[#060606] text-center ">
          Get trendy shoes, bags, purses, and headties, and transform your
          everyday style into something extraordinary
        </p>

        <button
          style={{
            boxShadow: "0px 11px 22px 0px rgba(255, 92, 0, 0.25)",
          }}
          className="text-[14px] text-[#fefefe] font-[600] z-10 active:scale-75 active:duration-100 transform flex py-[12px] px-[16px] items-center flex-col justify-center gap-[10px] rounded-[8px] bg-[#ff5c00] "
        >
          Start Shopping
        </button>
      </div>
      <div className="mt-[100px] sm:mt-[50px]">
        <div className="float-left mt-[-250px] relative ">
          <Image
            src={VectorLeft1}
            alt="Vector"
            className="w-[160px] md:w-[100%]"
          />
          <Image
            src={VectorLeft2}
            alt="Vector"
            className="mt-[-50px] md:mt-[-100px] w-[160px] md:w-[100%] "
          />
        </div>
        <div className="float-right mt-[-250px] relative">
          <Image
            src={VectorRight1}
            alt="Vector"
            className="mb-[-50px] md:mb-[-100px] w-[160px] md:w-[100%] "
          />
          <Image
            src={VectorRight2}
            alt="Vector"
            className="w-[160px] md:w-[100%]"
          />
        </div>
        <div className="flex slides gap-6 z-30 flex-nowrap overflow-scroll float-right mt-[-40px] ">
          <Image src={Slide1} alt="Vector" className="h-[340px] rounded-lg  " />
          <Image src={Slide2} alt="Vector" className="h-[340px] rounded-lg " />
          <Image
            src={Slide3}
            alt="Vector"
            className="h-[255px] mt-[82px] rounded-lg "
          />
          <Image
            src={Slide4}
            alt="Vector"
            className="h-[320px] rounded-lg mt-[20px] "
          />
          <Image
            src={Slide}
            alt="Vector"
            className="h-[340px] rounded-lg rounded-tr-none rounded-br-none "
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;

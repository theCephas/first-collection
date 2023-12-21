"use client";

import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { ButtonPrimary } from "./Buttons";

const Herosection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mb-10 mt-[-90px] pt-[50px] h-[140vh] sm:h-[150vh]">
      <div className="px-8 lg:px-10 pb-[150px] m-auto flex flex-col items-center justify-center text-center gap-6 pt-[50px] lg:pt-[80px] ">
        <p
          data-aos="zoom-in"
          className="text-[40px] sm:text-[56px] w-full md:w-[679px] font-judson font-[700] leading-[56px] text-[#060606] text-center "
        >
          Shop quality and affordable fashion accessories{" "}
        </p>
        <p
          data-aos="zoom-in-up"
          className="text-[14px] w-full sm:w-[535px] gilroy font-[400] leading-[20.3px] text-[#060606] text-center "
        >
          Get trendy shoes, bags, purses, and headties, and transform your
          everyday style into something extraordinary
        </p>
        <ButtonPrimary classes="w-fit px-4 shadow-xl shadow-orange-600/50">
          {"Start Shopping"}
        </ButtonPrimary>
      </div>
      <div className="mt-[100px] sm:mt-[50px]">
        <div data-aos="zoom-in-up" className="float-left mt-[-250px] relative ">
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
        <div data-aos="zoom-in-up" className="float-right mt-[-250px] relative">
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
        <div
          data-aos="fade-up"
          className="flex slides gap-6 z-30 flex-nowrap overflow-scroll float-right mt-[-40px] "
        >
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

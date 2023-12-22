"use client";

import React, { useState } from "react";
import Star from "../../../public/star.svg";
import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { TestimonialDesign } from "./Icons";

const Testimonials = () => {
  const Evidences = [
    {
      id: 1,
      report:
        "I absolutely love my purchase! The quality of the shoes exceeded my expectations. Comfortable, stylish, and worth every penny",
      name: "Adesola Benita",
    },
    {
      id: 2,
      report:
        "I absolutely love my purchase! The quality of the shoes exceeded my expectations. Comfortable, stylish, and worth every penny",
      name: "Osho Iseoluwa",
    },
    {
      id: 3,
      report:
        "I absolutely love my purchase! The quality of the shoes exceeded my expectations. Comfortable, stylish, and worth every penny",
      name: "Victor Idowu",
    },
    {
      id: 4,
      report:
        "I absolutely love my purchase! The quality of the shoes exceeded my expectations. Comfortable, stylish, and worth every penny",
      name: "Adesola Benita",
    },
    {
      id: 5,
      report:
        "I absolutely love my purchase! The quality of the shoes exceeded my expectations. Comfortable, stylish, and worth every penny",
      name: "Ukeme Bassey",
    },
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % Evidences.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? Evidences.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="max-w-[1080px] mx-auto px-6 xl:px-0 py-[60px]">
      <div className="flex mb-16">
        <div className="flex gap-4 items-center justify-center m-auto ">
          <span className="font-judson w-full sm:w-[528px] text-[18px] sm:text-[40px] font-[700] leading-[120%] text-[#060606] text-center m-auto pt-14 ">
            What our customers have said about our products
          </span>
          <Image
            width={0}
            height={0}
            src={Star}
            alt="Star Icon"
            className="w-[79px] h-[76.098px] flex-shrink-0 sm:w-[200.999px] sm:h-[193.616px] "
          />
        </div>
      </div>
      <div className="flex">
        {Evidences.map((evidence, index) => (
          <div
            key={index}
            className={`w-52 h-52 ${
              index === 1 && "scale-75 mr-10 blur-[1.5px]"
            } ${index === 3 && "scale-75 ml-10 blur-[1.5px]"} ${
              index === 4 && "scale-50 blur-[2px]"
            } ${
              index === 0 && "scale-50 blur-[2px]"
            } p-3 bg-black rounded-xl items-start gap-2.5 flex flex-col justify-between overflow-hidden relative`}
          >
            <p className=" text-zinc-100 text-sm font-normal font-['Gilroy'] leading-tight">
              {evidence.report}
            </p>
            <p className="text-neutral-200 text-sm font-semibold font-['Gilroy'] leading-tight">
              {evidence.name}
            </p>
            <div className="absolute bottom-0 right-0">
              <TestimonialDesign />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

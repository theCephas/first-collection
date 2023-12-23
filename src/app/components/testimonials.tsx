"use client";

import React, { useState } from "react";
import Star from "../../../public/star.svg";
import Image from "next/image";
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
    <div className="max-w-[1080px] mx-auto px-6 xl:px-0 py-[60px] flex flex-col items-center overflow-hidden">
      <div className="flex mb-16 w-full">
        <p className="font-judson w-[11.8rem] sm:w-[24rem] lg:w-[33rem] text-[18px] sm:text-[40px] font-[700] leading-[120%] text-[#060606] text-center m-auto pt-14 relative">
          What our customers have said about our products
          <Image
            width={0}
            height={0}
            src={Star}
            alt="Star Icon"
            className="w-[5rem] h-auto sm:w-[9rem] lg:w-[12rem] flex-shrink-0  absolute top-10 lg:top-0 -right-16 sm:-right-28 lg:-right-48"
          />
        </p>
      </div>
      <div className="flex ">
        {Evidences.map((evidence, index) => (
          <div
            key={index}
            className={`h-[10.6rem] min-w-[12rem] md:h-[12.6rem] ${
              index === 1 && "scale-75 sm:mr-10 blur-[1.5px]"
            } ${index === 3 && "scale-75 sm:ml-10 blur-[1.5px]"} ${
              index === 4 && "scale-50 blur-[2px]"
            } ${
              index === 0 && " scale-50 blur-[2px]"
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

"use client";

import React, { useState } from "react";
import Star from "../../../public/star.svg";
import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Glider from "react-glider";
import "glider-js/glider.min.css";

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
    <div className="max-w-[1080px] mx-auto px-8 lg:px-10 py-[60px]">
      <div className="flex">
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
      {/* <div>
        {Evidences.map((evidence, index) => (
          <div key={index}>
            {evidence.name}
            {evidence.report}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonials;

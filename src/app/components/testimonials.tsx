"use client";

import React from "react";
import Star from "../../../public/star.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  function SampleNextArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
          padding: "0.35px",
          border: "none",
          position: "absolute",
          right: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          borderRadius: "100%",
          padding: "0.35px",
          border: "none",
          position: "absolute",
          left: "30px",
          zIndex: "10",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,

          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,

          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,

          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,

          initialSlide: 1,
        },
      },
    ],
  };
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
        
        <Slider {...settings} className="flex gap-20  ">
          {Evidences.map((evidence, index) => (
            <div
              key={index}
              className="w-[148px] flex items-start gap-[7.34px] h-[203px] rounded-[12px] bg-[#040404]  "
            >
              <p>{evidence.report}</p>
              <p>{evidence.name}</p>
            </div>
          ))}
        </Slider>
      </div>
         */}
    </div>
  );
};

export default Testimonials;

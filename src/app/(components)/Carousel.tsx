"use client";

import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface CarouselProps {
  name: string;
  slides: Array<{
    id: number;
    url: string;
    name: string;
    price: number;
  }>;
}

const Carousel: React.FC<CarouselProps> = ({ name, slides }) => {
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
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className="max-w-[1080px] mx-auto pt-16">
      <div className="px-8 lg:px-0 ">
        <p className="gilroy text-[14px] text-[#040404] font-[600] leading-[20.3px] ">
          {name}
        </p>
      </div>
      <div className="w-full m-auto ">
        <Slider {...settings} className="flex gap-20  ">
          {slides.map((item, index) => (
            <div key={index} className="w-full m-auto py-10">
              <ProductCard
                classes={"w-[160px] m-auto"}
                imageSrc={item.url}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

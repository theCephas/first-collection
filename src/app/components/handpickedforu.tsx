"use client";

import React from "react";
import Item1 from "../../../public/item1.svg";
import Item2 from "../../../public/item2.svg";
import Item3 from "../../../public/item3.svg";
import Item4 from "../../../public/item4.svg";
import Item5 from "../../../public/item5.svg";
import Item6 from "../../../public/item6.svg";
import Item7 from "../../../public/item7.svg";
import ProductCard from "../productcard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { url } from "inspector";

const Handpicked: React.FC = (props) => {
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
          padding: "0px",
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
          padding: "0px",
          border: "none",
          position: "absolute",
          left: "10px",
          zIndex: 100,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    afterChange: function (index: number) {
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`;
    },
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const Slides = [
    {
      id: 1,
      url: Item1,
      name: "Nike Air Sneakers",
      price: 17000,
    },
    {
      id: 2,
      url: Item2,
      name: "Gucci Leather Bag",
      price: 17000,
    },
    {
      id: 3,
      url: Item3,
      name: 'Dior 6" heels',
      price: 17000,
    },
    {
      id: 4,
      url: Item4,
      name: "Ophidia GG Mediu...",
      price: 17000,
    },
    {
      id: 5,
      url: Item6,
      name: "Ego Heels",
      price: 17000,
    },
    {
      id: 6,
      url: Item7,
      name: "Prada spiky shoe",
      price: 17000,
    },
    {
      id: 7,
      url: Item5,
      name: "Nike Sneakers",
      price: 17000,
    },
  ];
  return (
    <div className="max-w-[1080px] mx-auto ">
      <div className="px-8 lg:px-10 ">
        <p>Handpicked for you</p>
      </div>
      <Slider {...settings} className="flex gap-3 ml-8 lg:ml-10 ">
        {Slides.map((item, index) => (
          <div key={index} className="w-full m-auto py-10">
            <ProductCard
              imageSrc={item.url}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Handpicked;

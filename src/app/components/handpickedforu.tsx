"use client";

import React from "react";
import Item1 from "../../../public/item1.svg";
import Item2 from "../../../public/item2.svg";
import Item3 from "../../../public/item3.svg";
import Item4 from "../../../public/item4.svg";
import Item5 from "../../../public/item5.svg";
import Item6 from "../../../public/item6.svg";
import Item7 from "../../../public/item7.svg";
import Image from "next/image";
import ProductCard from "../productcard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Handpicked: React.FC = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="pl-8 lg:pl-10 ">
      <div>
        <p>Handpicked for you</p>
      </div>
      <Slider {...settings}>
        <div>
          <ProductCard
            imageSrc={Item1}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item2}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item3}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item4}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item5}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item6}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item6}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
        <div>
          <ProductCard
            imageSrc={Item6}
            name="Nike Air Sneakers"
            price={17000}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Handpicked;

"use client";

import React, { useCallback, useEffect, useState } from "react";
import Item1 from "../../../public/item1.svg";
import ProductCard from "../(components)/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fetch } from "../Helpers/Fetch";

const Handpicked: React.FC = (props) => {
  const [products, setProducts] = useState([]);
  const csrfToken =
    "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";

  const fetchProducts = useCallback(async () => {
    try {
      const data = await Fetch("products/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
        },
      });

      // console.log(data);
      setProducts(data);
    } catch (err: any) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  //

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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
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

  return (
    <div className="max-w-[1080px] mx-auto mb-[-80px] lg:mb-[-100px]">
      <div className="px-8 lg:px-0 ">
        <p className="gilroy text-[14px] text-[#040404] font-[600] leading-[20.3px] ">
          Handpicked for you
        </p>
      </div>
      <div className="w-full m-auto ">
        <Slider {...settings} className="flex gap-20  ">
          {products &&
            products.map((item: any, index) => (
              <div key={index} className="w-full m-auto py-10 h-full">
                <ProductCard
                  id={item.id}
                  classes={"w-[160px] m-auto"}
                  imageSrc={`https://first-collectionz.onrender.com${
                    item.image || ""
                  }`}
                  // imageSrc={Item1}
                  name={item.name?.toUpperCase()}
                  price={item.price}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Handpicked;

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
  const [isLoading, setIsLoading] = useState(false);
  const csrfToken =
    "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await Fetch("products/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
        },
      });

      if (data.detail || data.email || data.password) {
        throw new Error(
          data.detail
            ? data.detail
            : data.email
            ? data.email[0]
            : data.password
            ? data.password[0]
            : ""
        );
      }

      // console.log(data);
      setProducts(data);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
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
          {products
            ? products?.map((item: any, index) => (
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
              ))
            : isLoading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="px-[0.5rem] max-w-[300px] w-[100%]">
                  <div className="w-[100%] h-[150px] md:h-[170px] lg:h-[220px] animate-pulse bg-gray-300 rounded-[1rem]"></div>
                </div>
              ))
            : ""}
        </Slider>
      </div>
    </div>
  );
};

export default Handpicked;

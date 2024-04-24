"use client";
import React, { useCallback, useEffect, useState } from "react";
import ProductsHero from "./(components)/ProductsHero";
import FilterSection from "./(components)/FilterSection";
import Item1 from "../../../../../public/item1.svg";
import Item2 from "../../../../../public/item5.svg";
import Item3 from "../../../../../public/item3.svg";
import ProductCard from "@/app/(components)/ProductCard";
import { Fetch } from "@/app/Helpers/Fetch";

const Products = () => {
  const [pageNum, setPageNum] = useState(1);
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

  return (
    <>
      <ProductsHero />
      <section className="mt-12 max-w-[67.5rem] mx-auto flex flex-col lg:grid lg:grid-cols-6 gap-6 px-6 xl:px-0">
        <FilterSection />
        <aside className="col-span-5 flex flex-col items-center mb-14">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 h-fit gap-6">
            {products?.map((item: any, i) => (
              <ProductCard
                key={i + 1}
                classes={""}
                // imageSrc={item.image}
                imageSrc={
                  (pageNum === 1 && Item1) ||
                  (pageNum === 2 && Item2) ||
                  (pageNum === 3 && Item3)
                }
                name={item.name?.toUpperCase()}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="justify-start items-center gap-6 flex mt-14 ">
            <button
              onClick={() =>
                pageNum > 1 ? setPageNum((prev) => prev - 1) : ""
              }
              className="text-neutral-400 text-sm font-normal gilroy leading-tight cursor-pointer"
            >
              Prev
            </button>
            <div className="justify-start items-start gap-2 flex">
              {[1, 2, 3].map((item, i) => (
                <button
                  onClick={() => setPageNum(item)}
                  key={i + 1}
                  className={`${
                    pageNum === item ? "text-black" : "text-neutral-400"
                  } text-sm font-semibold gilroy leading-tight cursor-pointer`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                pageNum < 3 ? setPageNum((prev) => prev + 1) : ""
              }
              className="text-black text-sm font-normal gilroy leading-tight cursor-pointer"
            >
              Next
            </button>
          </div>
        </aside>
      </section>
    </>
  );
};
export default Products;

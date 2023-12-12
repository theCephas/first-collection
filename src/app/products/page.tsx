"use client";
import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import ProductsHero from "./(components)/ProductsHero";
import FilterSection from "./(components)/FilterSection";
import ProductCard from "../productcard/ProductCard";
import Item1 from "../../../public/item1.svg";
import Item2 from "../../../public/item5.svg";
import Item3 from "../../../public/item3.svg";

const Five: number[] = [1, 2, 3, 4, 5];

const Products = () => {
  const [pageNum, setPageNum] = useState(1);
  return (
    <PageWrapper>
      <ProductsHero />
      <section className="mt-12  max-w-[67.5rem] mx-auto grid grid-cols-6 gap-6">
        <FilterSection />
        <div className="col-span-5 grid grid-cols-5 h-fit gap-3">
          {[...Five, ...Five, ...Five, ...Five, ...Five].map((item, i) => (
            <div key={i + 1}>
              {
                <ProductCard
                  imageSrc={
                    (pageNum === 1 && Item1) ||
                    (pageNum === 2 && Item2) ||
                    (pageNum === 3 && Item3)
                  }
                  name={"Nike Air Sneakers"}
                  price={17000}
                />
              }
            </div>
          ))}
        </div>
      </section>
      {/* Pagination */}
      <div className="w-36 h-5 justify-start items-start gap-6 flex mb-14 mt-14 max-w-[67.5rem] mx-auto">
        <p
          onClick={() => (pageNum > 1 ? setPageNum((prev) => prev - 1) : "")}
          className="text-neutral-400 text-sm font-normal gilroy leading-tight cursor-pointer"
        >
          Prev
        </p>
        <div className="justify-start items-start gap-2 flex">
          {[1, 2, 3].map((item, i) => (
            <span
              onClick={() => setPageNum(item)}
              key={i + 1}
              className={`${
                pageNum === item ? "text-black" : "text-neutral-400"
              } text-sm font-semibold gilroy leading-tight cursor-pointer`}
            >
              {item}
            </span>
          ))}
        </div>
        <p
          onClick={() => (pageNum < 3 ? setPageNum((prev) => prev + 1) : "")}
          className="text-black text-sm font-normal gilroy leading-tight cursor-pointer"
        >
          Next
        </p>
      </div>
    </PageWrapper>
  );
};
export default Products;

//  imageSrc: string;
// name: string;
// price: number;

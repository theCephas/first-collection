"use client";
import { ButtonPrimary } from "@/app/components/Buttons";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useFetchProducts } from "@/app/Helpers/useFetchProducts";

const ProductsHero = () => {
  const [count, setCount] = useState(1);
  const { products, isLoading }: { products: any; isLoading: boolean } =
    useFetchProducts();

  const handleHeroChange = useCallback(() => {
    setCount((prev) => (prev < 3 ? prev + 1 : 1));
  }, []);

  useEffect(() => {
    const interCount = setInterval(handleHeroChange, 5000);

    return () => {
      clearInterval(interCount);
    };
  }, [handleHeroChange]);

  return (
    <section className="flex flex-col gap-4 md:grid md:grid-rows-1 md:grid-cols-2 mt-16 md:mt-32 items-center px-6 lg:px-12 max-w-[67.5rem] mx-auto relative">
      <aside className=" justify-start items-center flex flex-col gap-5 md:col-start-2">
        {products.length > 0 ? (
          <Image
            className="w-full h-72 lg:h-[30rem] object-cover rounded-lg"
            alt={products[count]?.name}
            width={10000000}
            height={10000000}
            src={`https://first-collectionz.onrender.com${
              products[count]?.image || ""
            }`}
          />
        ) : isLoading ? (
          <div className="w-full col-span-3 col-start-2">
            <div className="w-full h-72 lg:h-[30rem] animate-pulse bg-gray-300 rounded-[1rem]"></div>
          </div>
        ) : (
          <Image
            className="w-full h-72 lg:h-[30rem] object-cover rounded-lg"
            alt={products[count]?.name}
            width={10000000}
            height={10000000}
            src={`/shoe${count}.png`}
          />
        )}
      </aside>
      <aside className="flex flex-col sm:items-center md:items-start gap-8 md:col-start-1 md:row-start-1">
        <p className="text-black text-4xl font-bold font-['Judson'] leading-10 sm:max-w-lg sm:text-center md:text-start">
          Buy while stock last Get 10% off when you buy a pair
        </p>

        <ButtonPrimary classes="w-fit px-4 shadow-xl shadow-orange-600/50">
          {"Buy Now"}
        </ButtonPrimary>
      </aside>
      <div className="md:absolute md:bottom-8 md:left-1/2 md:translate-x-3 justify-start items-center gap-2 inline-flex">
        {[1, 2, 3].map((item) => (
          <div
            onClick={() => setCount(item)}
            key={item}
            className={`cursor-pointer rounded-full  ${
              count === item
                ? "w-6 h-6 bg-[#ff5c00]"
                : "w-3 h-3 border border-[#ff5c00]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductsHero;

"use client";
import { ButtonPrimary } from "@/app/components/Buttons";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const ProductsHero = () => {
  const [count, setCount] = useState(1);

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
    <section className="grid grid-cols-2 mt-32 items-center px-12 max-w-[67.5rem] mx-auto">
      <aside className="flex flex-col gap-4">
        <p className="w-96 text-black text-4xl font-bold font-['Judson'] leading-10">
          Buy while stock last Get 10% off when you buy a pair
        </p>

        <ButtonPrimary classes="w-fit px-4">{"Buy Now"}</ButtonPrimary>
      </aside>
      <aside className=" justify-start items-center flex flex-col gap-5 relative">
        <Image
          className="w-full h-[30rem] object-cover"
          alt=""
          width={10000000}
          height={10000000}
          src={`/shoe${count}.png`}
        />
        <div className="absolute bottom-8 left-5 justify-start items-center gap-2 inline-flex">
          {[1, 2, 3].map((item) => (
            <div
              onClick={() => setCount(item)}
              key={item}
              className={`cursor-pointer rounded-full  ${
                count === item
                  ? "w-6 h-6 bg-orange-600"
                  : "w-3 h-3 border border-orange-600"
              }`}
            />
          ))}
        </div>
      </aside>
    </section>
  );
};
export default ProductsHero;

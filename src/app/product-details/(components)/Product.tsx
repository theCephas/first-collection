"use client";
import { BackIcon } from "@/app/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductDescriptionAndRating } from "./ProductDescriptionAndRating";

const Product = () => {
  return (
    <section className="mt-6 max-w-[67.5rem] mx-auto px-6 xl:px-0">
      <Link className="" href="/products">
        <BackIcon />
      </Link>
      <div className="mt-6 sm:mt-14 md:mt-24 flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-1 gap-6">
        <aside className="h-full w-full col-span-3 col-start-2  overflow-hidden">
          <Image
            className="w-full h-72 lg:h-full rounded-xl border border-neutral-100 object-cover"
            width={1000000}
            height={1000000}
            alt=""
            src="/shoe3.png"
          />
        </aside>
        <aside className="col-start-1 row-start-1 grid grid-cols-3 lg:flex lg:flex-col gap-4">
          {["/shoe1.png", "/shoe2.png", "/shoe3.png"].map((item, i) => (
            <Image
              key={i}
              className="w-full h-full object-cover rounded-xl border border-neutral-100"
              width={10000}
              height={10000}
              alt=""
              src={item}
            />
          ))}
        </aside>
        <aside className="hidden lg:block">
          <ProductDescriptionAndRating />
        </aside>
      </div>
    </section>
  );
};
export default Product;

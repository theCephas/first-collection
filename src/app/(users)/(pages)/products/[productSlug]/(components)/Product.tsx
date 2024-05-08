"use client";
import { BackIcon } from "@/app/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductDescriptionAndRating } from "./ProductDescriptionAndRating";

interface Props {
  productDetails: any;
}
const Product = ({ productDetails }: Props) => {
  return (
    <section className="mt-6 max-w-[67.5rem] mx-auto px-6 xl:px-0">
      <Link className="" href="/products">
        <BackIcon />
      </Link>
      <div className="mt-6 sm:mt-14 md:mt-24 flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-1 gap-6 lg:max-h-[510px]">
        {productDetails ? (
          <aside className="h-full w-full col-span-3 col-start-2  overflow-hidden">
            <Image
              className="w-full h-72 lg:h-full rounded-xl border border-neutral-100 object-cover"
              width={1000000}
              height={1000000}
              alt=""
              src={
                `https://first-collectionz.onrender.com${
                  productDetails?.image || ""
                }` || ""
              }
            />
          </aside>
        ) : (
          <div className="w-full col-span-3 col-start-2">
            <div className="w-full h-72 lg:h-[510px] animate-pulse bg-gray-300 rounded-[1rem]"></div>
          </div>
        )}
        <aside className="col-start-1 row-start-1 grid grid-cols-3 lg:flex lg:flex-col gap-4 lg:max-h-[160px]">
          {[1, 2, 3].map((item) =>
            productDetails ? (
              <Image
                key={item}
                className="w-full h-full object-cover rounded-xl border border-neutral-100"
                width={10000}
                height={10000}
                alt=""
                src={`https://first-collectionz.onrender.com${
                  productDetails?.image || ""
                }`}
              />
            ) : (
              <div className="w-full">
                <div className="w-full h-[160px] animate-pulse bg-gray-300 rounded-[1rem]"></div>
              </div>
            )
          )}
        </aside>
        <aside className="hidden lg:block">
          <ProductDescriptionAndRating productDetails={productDetails} />
        </aside>
      </div>
    </section>
  );
};
export default Product;

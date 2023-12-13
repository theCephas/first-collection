import React from "react";
import PageWrapper from "../components/PageWrapper";
import { BackIcon } from "../components/Icons";

import Image from "next/image";
import { Minus, Plus, Star } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "../components/Buttons";
import Link from "next/link";
import ProductReview from "./(components)/ProductReview";

const ProductDetails = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-[67.5rem] mx-auto px-6 xl:px-0">
        <Link href="/products">
          <BackIcon />
        </Link>
        <div className="mt-6 flex flex-col gap-6">
          <aside className=" h-72 rounded-xl border border-neutral-100 overflow-hidden">
            <Image
              className="w-full"
              width={100000}
              height={100000}
              alt=""
              src="/shoe3.png"
            />
          </aside>
          <aside className="grid grid-cols-3 gap-4">
            {["/shoe1.png", "/shoe2.png", "/shoe3.png"].map((item, i) => (
              <Image
                key={i}
                className="w-full rounded-xl border border-neutral-100"
                width={10000}
                height={10000}
                alt=""
                src={item}
              />
            ))}
          </aside>
        </div>
      </section>
      {/*  */}
      <section className="mt-14 max-w-[67.5rem] mx-auto px-6 xl:px-0 flex flex-col gap-8">
        {/* DESCRIPTION AND RATING */}
        <div className="flex-col justify-start items-start gap-2 flex">
          <p className="text-black text-sm font-medium gilroy leading-tight">
            Balenciaga 3xl Sneakers
          </p>
          <p className="text-orange-600 text-lg font-medium font-['Inter'] leading-relaxed">
            ₦ 17,000
          </p>
          <div className="justify-start items-center gap-2 flex">
            <div className="justify-start items-start gap-0.5 flex">
              {[1, 2, 3, 4].map((item) => (
                <Star
                  key={item}
                  style={{ color: "#FE833D" }}
                  className="w-[12px] h-[12px]"
                />
              ))}
            </div>
            <p className="text-black text-xs font-normal gilroy leading-none">
              (0) no ratings yet.
            </p>
          </div>
        </div>

        {/* AVAILABLE COLORS */}
        <div className="flex-col justify-start items-start gap-2 flex">
          <p className="text-black text-sm font-medium gilroy leading-tight">
            Available colours
          </p>
          <div className="justify-start items-center gap-1 flex">
            {["black", "orange-600", "white", "zinc-600", "amber-500"].map(
              (item, i) => (
                <div
                  key={i + 1}
                  className={`w-6 h-6 relative bg-${item} rounded-2xl border border-neutral-200`}
                />
              )
            )}
          </div>
        </div>

        {/* AVAILABLE SIZES */}
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <p className="text-black text-sm font-medium gilroy leading-tight">
              Available sizes
            </p>
            <p className="text-orange-600 text-xs font-medium gilroy leading-none">
              size guide
            </p>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            {[38, 40, 42].map((item) => (
              <div
                key={item}
                className={`p-4 ${
                  item === 38
                    ? "bg-orange-600 text-white"
                    : "bg-zinc-100 text-black"
                } rounded-full  text-sm font-semibold gilroy leading-tight`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* QUANTITY */}
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="text-black text-sm font-medium gilroy leading-tight">
            Quantity
          </div>
          <div className="px-3 py-2 rounded-lg border border-zinc-100 flex-col justify-center items-center gap-2.5 flex">
            <div className="justify-center items-center gap-6 inline-flex">
              <Minus style={{ color: "#B3B3B3" }} />
              <div className="text-black text-sm font-semibold gilroy leading-tight">
                1
              </div>
              <Plus />
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="w-full flex gap-6">
          <ButtonSecondary classes="">{"Add to cart"}</ButtonSecondary>
          <ButtonPrimary classes="w-full">{"Checkout"}</ButtonPrimary>
        </div>
      </section>
      {/*  */}
      <ProductReview />
    </PageWrapper>
  );
};

export default ProductDetails;

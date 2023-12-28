"use client";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { Minus, Plus, Star } from "lucide-react";
import React, { useState } from "react";

export const ProductDescriptionAndRating = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="w-full h-full mt-14 sm:m-0 sm:px-4 sm:py-6 sm:border border-neutral-100 rounded-xl lg:rounded-none lg:p-0 lg:border-none flex flex-col gap-8">
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
        <div className="justify-start items-start gap-3 sm:gap-1 md:gap-3 inline-flex">
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
            <Minus
              onClick={() => {
                if (quantity === 0) return;
                setQuantity((prev) => prev - 1);
              }}
              className="cursor-pointer"
              style={{ color: quantity === 0 ? "#B3B3B3" : "" }}
            />
            <p className="text-black text-sm font-semibold gilroy leading-tight">
              {quantity}
            </p>
            <Plus
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="w-full flex sm:flex-col gap-6">
        <ButtonSecondary classes=" sm:px-1">{"Add to cart"}</ButtonSecondary>
        <ButtonPrimary classes="w-full sm:px-1">{"Checkout"}</ButtonPrimary>
      </div>
    </section>
  );
};

"use client";
import { Delete } from "./Icons";
import React, { useState } from "react";
import { Quantity } from "../(components)/Quantity";
import Image from "next/image";

export const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full justify-between items-start inline-flex gap-2">
      <Image
        alt=""
        width={10000}
        height={10000}
        className="w-auto h-[8rem]  sm:h-44 rounded-xl border border-neutral-100"
        src="/shoe1.png"
      />

      <div className="flex-col justify-start items-start gap-3 inline-flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <p className="text-black text-base font-normal gilroy leading-normal">
            Baleciaga 3xl Sneakers
          </p>
          <p className="text-orange-600 text-sm font-medium gilroy leading-tight">
            ₦ 17,000
          </p>
        </div>
        <div className="flex-col justify-start items-start gap-1 flex">
          <p className="text-neutral-700 text-xs font-normal gilroy leading-none">
            Color: Purple
          </p>
          <p className="text-neutral-700 text-xs font-normal gilroy leading-none">
            Size: 40
          </p>
        </div>
        <Quantity
          classes="py-1 sm:px-3 sm:py-2"
          text={quantity}
          setQuantity={setQuantity}
          max={10}
        />
      </div>
      <aside className="w-[24px] h-[24px]">
        <Delete />
      </aside>
    </div>
  );
};

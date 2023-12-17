"use client";
import React from "react";
import Modal from "./Modal";
import { X } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  return (
    <Modal isOpen={true} onClose={() => true}>
      <section className="w-[25.5rem] ">
        <div className="justify-between items-center flex">
          <p className="text-black text-2xl font-normal font-judson leading-7">
            Cart (3)
          </p>
          <X />
        </div>
        {/*  */}
        <div className="w-96 h-44 justify-start items-start gap-4 inline-flex">
          <div className="w-44 h-44 rounded-xl border border-neutral-100 justify-center items-center flex">
            <Image
              alt=""
              width={10000}
              height={10000}
              className="w-56 h-56"
              src="/shoe1.png"
            />
          </div>
          <div className="flex-col justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <p className="text-black text-base font-normal font-['Gilroy'] leading-normal">
                Baleciaga 3xl Sneakers
              </p>
              <p className="text-orange-600 text-sm font-medium font-['Gilroy'] leading-tight">
                ₦ 17,000
              </p>
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <p className="text-neutral-700 text-xs font-normal font-['Gilroy'] leading-none">
                Color: Purple
              </p>
              <p className="text-neutral-700 text-xs font-normal font-['Gilroy'] leading-none">
                Size: 40
              </p>
            </div>
            <div className="px-3 py-2 rounded-lg border border-zinc-100 flex-col justify-center items-center gap-2.5 flex">
              <div className="justify-center items-center gap-6 inline-flex">
                <div className="w-4 h-4 relative" />
                <div className="text-black text-sm font-semibold font-['Gilroy'] leading-tight">
                  1
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div>
          </div>
          <div className="w-4 h-4 relative" />
        </div>
      </section>
    </Modal>
  );
};
export default Cart;

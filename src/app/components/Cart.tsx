"use client";
import React from "react";
import Modal from "./Modal";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { Delete } from "./Icons";

interface CartProps {
  close: () => void;
}

const Cart = ({ close }: CartProps) => {
  return (
    <Modal isOpen={true} onClose={close}>
      <section className="">
        <div className="justify-between items-center flex mb-12">
          <p className="text-black text-2xl font-normal font-judson leading-7 ">
            Cart (3)
          </p>
          <X onClick={close} className="cursor-pointer" />
        </div>
        {/*  */}
        <div className="flex flex-col items-start gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-full justify-between items-start inline-flex gap-2"
            >
              <Image
                alt=""
                width={10000}
                height={10000}
                className="w-auto h-[9rem]  sm:h-44 rounded-xl border border-neutral-100"
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

                <div className="py-1 sm:px-3 sm:py-2 rounded-lg border border-zinc-100 justify-center items-center gap-6 inline-flex">
                  <Minus />
                  <span className="text-black text-sm font-semibold gilroy leading-tight">
                    1
                  </span>
                  <Plus />
                </div>
              </div>
              <aside className="w-[24px] h-[24px]">
                <Delete />
              </aside>
            </div>
          ))}
        </div>
      </section>
    </Modal>
  );
};
export default Cart;

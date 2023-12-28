"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { Delete } from "./Icons";
import { ButtonPrimary } from "./Buttons";
import { Quantity } from "../(components)/Quantity";

interface CartProps {
  close: () => void;
}

const Cart = ({ close }: CartProps) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Modal isOpen={true} onClose={close}>
      <div className="p-3 sm:p-6 lg:pr-20">
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
                />
              </div>
              <aside className="w-[24px] h-[24px]">
                <Delete />
              </aside>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full pl-6 pr-24 py-4 border-t border-neutral-200 flex-col justify-center items-start gap-8 flex">
        <div className="self-stretch justify-between items-center  flex">
          <p className="text-neutral-700 text-sm font-normal gilroy leading-tight">
            Total Amount:
          </p>
          <p className="text-orange-600 text-lg font-semibold gilroy leading-relaxed">
            ₦ 51,000
          </p>
        </div>
        <ButtonPrimary classes="w-full">{"Checkout"}</ButtonPrimary>
      </div>
    </Modal>
  );
};
export default Cart;

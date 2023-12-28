"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { X } from "lucide-react";
import { ButtonPrimary } from "./Buttons";
import { CartItem } from "./CartItem";

interface CartProps {
  close: () => void;
}

const Cart = ({ close }: CartProps) => {
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
            <CartItem key={item} />
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

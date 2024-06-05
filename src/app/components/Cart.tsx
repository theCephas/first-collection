"use client";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "./Modal";
import { X } from "lucide-react";
import { ButtonPrimary } from "./Buttons";
import { CartItem } from "./CartItem";
import { Fetch } from "../Helpers/Fetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken } from "../Helpers/Helpers";
import { useRouter } from "next/navigation";

interface CartProps {
  close: () => void;
}

const Cart = ({ close }: CartProps) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = getToken();
  const router = useRouter();
  const csrfToken =
    "GbNPtaAOmlk4D8EXpe7OxvKsJUcZosqDaHzoOhlvfLLyRiDSBNrKlpVoKsbNhkBz";

  const getCartItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await Fetch("cart/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
      if (data.id) throw new Error(data.id[0]);
      if (data.detail) throw new Error(data.detail);
      if (data.error) throw new Error(data.error);

      setCartItems(data.data);
    } catch (err: any) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  const sumTotalAmount = (items: any) => {
    console.log(items);
    // const total = items.reduce((item: any) => (item.price += item.price));
    // console.log(total);
    return "total";
  };

  return (
    <Modal isOpen={true} onClose={close}>
      <div className="p-3 sm:p-6 lg:pr-20">
        <div className="justify-between items-center flex mb-12">
          <p className="text-black text-2xl font-normal font-judson leading-7 ">
            Cart ({cartItems.length})
          </p>
          <X onClick={close} className="cursor-pointer" />
        </div>
        {/*  */}
        <div className="flex flex-col items-start gap-6">
          {cartItems.length > 0 ? (
            cartItems.map((item, i) => <CartItem key={i + 1} item={item} />)
          ) : isLoading ? (
            <div className="flex justify-center items-center mx-auto">
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-orange-600 animate-bounce [animation-delay:.7s]"></div>
              </div>
            </div>
          ) : (
            <span className="mx-auto text-xl text-orange-600">
              {"You have added no items to your Cart yet"}
            </span>
          )}
        </div>
      </div>
      {cartItems.length > 0 && (
        <div className="w-full pl-6 pr-24 py-4 border-t border-neutral-200 flex-col justify-center items-start gap-8 flex">
          <div className="self-stretch justify-between items-center  flex">
            <p className="text-neutral-700 text-sm font-normal gilroy leading-tight">
              Total Amount:
            </p>
            <p className="text-orange-600 text-lg font-semibold gilroy leading-relaxed">
              ₦ 51,000
              {/* {sumTotalAmount(cartItems)} */}
            </p>
          </div>
          <ButtonPrimary classes="w-full">{"Checkout"}</ButtonPrimary>
        </div>
      )}
    </Modal>
  );
};
export default Cart;

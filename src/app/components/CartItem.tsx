"use client";
import { Delete } from "./Icons";
import React, { useState } from "react";
import { Quantity } from "../(components)/Quantity";
import Image from "next/image";
import { Fetch } from "../Helpers/Fetch";
import { getToken } from "../Helpers/Helpers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

interface Props {
  item: any;
  close: () => void;
}

export const CartItem = ({ item, close }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { token } = getToken();
  const router = useRouter();
  const csrfToken =
    "JxQvgGXo8yteepXgJ7HUp5gUNwOHEs3cHdy8S1UgjM5QLFqcXEWuOF2aGd3836fM";

  const deleteCartItems = async () => {
    // console.log(item.id);
    try {
      const data = await Fetch(`cart/${item.id}/delete/`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": csrfToken,
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(data);
      if (data.id) throw new Error(data.id[0]);
      if (data.detail) throw new Error(data.detail);
      if (data.error) throw new Error(data.error);
    } catch (err: any) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="w-full justify-between items-start inline-flex gap-2">
      <Image
        alt={item.name || ""}
        width={10000}
        height={10000}
        className="w-[8rem] h-[8rem] sm:h-44 sm:w-44 rounded-xl border border-neutral-100 object-cover select-none "
        src={`https://first-collectionz.onrender.com${item.image || ""}`}
      />

      <div className="flex-col justify-start items-start gap-3 inline-flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <p
            onClick={() => {
              router.push(`/products/${item.id}`);
              close();
            }}
            className="text-black text-base font-normal gilroy leading-normal cursor-pointer hover:underline select-none"
          >
            {item.name?.toUpperCase()}
          </p>
          <p className="text-orange-600 text-sm font-medium gilroy leading-tight">
            ₦ {item.price}
          </p>
        </div>
        <div className="flex-col justify-start items-start gap-1 flex">
          <p className="text-neutral-700 text-xs font-normal gilroy leading-none">
            Color: {item.colours}
          </p>
          <p className="text-neutral-700 text-xs font-normal gilroy leading-none">
            Size: {item.size}
          </p>
        </div>
        <Quantity
          classes="py-1 sm:px-3 sm:py-2"
          text={quantity}
          setQuantity={setQuantity}
          max={item.quantity}
        />
      </div>
      <aside onClick={deleteCartItems} className="w-[24px] h-[24px]">
        <Delete />
      </aside>
    </div>
  );
};

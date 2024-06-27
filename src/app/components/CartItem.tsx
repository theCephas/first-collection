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
import { Confirm } from "notiflix";

interface Props {
  item: any;
  close: () => void;
  getCartItems: () => void;
}

export const CartItem = ({ item, close, getCartItems }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { token } = getToken();
  const router = useRouter();
  const csrfToken =
    "jEu90PtuEIJ21jlX3YmInaVOrUPgLyAWhkcMCaqmPWlEyzOThvBiMKH4kB4HacMw";

  const deleteCartItems = async () => {
    return Confirm.show(
      "Delete Cart Item",
      "Are you sure you want to delete this item from your cart",
      "Yes",
      "Cancel",
      async () => {
        try {
          const data = await Fetch(`cart/${item.cart_id}/delete/`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "X-CSRFToken": csrfToken,
              Authorization: `Bearer ${token}`,
            },
          });

          // console.log(data);
          if (data.id) throw new Error(data.id[0] + "id");
          if (data.detail) throw new Error(data.detail + "detail");
          if (data.error) throw new Error(data.error + "error");

          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
          });

          getCartItems();
        } catch (err: any) {
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
          });
        }
      },
      () => {
        return;
      },
      {
        titleColor: "#FE833D",
        okButtonBackground: "#FE833D",
      }
    );
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
      <aside
        onClick={deleteCartItems}
        className="w-[24px] h-[24px] cursor-pointer"
      >
        <Delete />
      </aside>
    </div>
  );
};

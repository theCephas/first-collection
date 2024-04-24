"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface QuantityProps {
  classes: string;
  text: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  max: number;
}

export const Quantity = ({
  classes,
  text,
  setQuantity,
  max,
}: QuantityProps) => {
  return (
    <div
      className={` rounded-lg border border-zinc-100 justify-center items-center gap-6 flex ${classes}`}
    >
      <Minus
        onClick={() => {
          if (text === 1) return;
          setQuantity((prev) => prev - 1);
        }}
        className="cursor-pointer"
        style={{ color: text === 1 ? "#B3B3B3" : "" }}
      />
      <p className="text-black text-sm font-semibold gilroy leading-tight">
        {text}
      </p>
      <Plus
        onClick={() => {
          if (text === max) return;
          setQuantity((prev) => prev + 1);
        }}
        className="cursor-pointer"
        style={{ color: text === max ? "#B3B3B3" : "" }}
      />
    </div>
  );
};

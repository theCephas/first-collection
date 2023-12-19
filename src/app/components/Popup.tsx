import { X } from "lucide-react";
import React from "react";

interface PopupProps {
  text: string;
  type: string;
}

const Popup = ({ text, type }: PopupProps) => {
  return (
    <div
      className={`absolute right-1 top-12 max-w-[24rem] h-fit p-4 bg-white rounded-xl shadow border ${
        type === "error" ? "border-red-600" : "border-green-600"
      } flex-col justify-start items-start gap-2.5 flex`}
    >
      <div className="self-stretch justify-start items-start gap-6 inline-flex">
        <p className="grow shrink basis-0 text-neutral-700 text-sm font-normal gilroy leading-tight">
          {text}
        </p>
        <X size={16} className="cursor-pointer" />
      </div>
    </div>
  );
};
export default Popup;

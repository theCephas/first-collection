import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface PopupProps {
  text: string;
  type: string;
}

const Popup = ({ text, type }: PopupProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className={`absolute right-0 top-0 lg:top-12 w-[15rem] md:w-[19rem] lg:w-[27rem] h-fit p-4 bg-white rounded-xl shadow border ${
          type === "error" ? "border-red-600" : "border-green-600"
        } justify-between gap-3 md:gap-6 flex z-50`}
      >
        <p className="text-neutral-700 text-sm font-normal gilroy leading-tight">
          {text}
        </p>
        <X size={24} className="cursor-pointer min-w-[24px]" />
      </motion.div>
    </AnimatePresence>
  );
};
export default Popup;

import React, { ReactNode } from "react";

interface ButtonProps {
  classes: string;
  children: ReactNode | string;
}

export const ButtonPrimary = ({ classes, children }: ButtonProps) => {
  return (
    <button
      className={`h-11 flex justify-center items-center  bg-[#ff5c00] active:scale-75 active:duration-100 transform hover:bg-orange-500 active:bg-[#ff5c00] rounded-lg text-zinc-100 text-sm font-semibold gilroy leading-tight transition-colors duration-300 ${classes} `}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ classes, children }: ButtonProps) => {
  return (
    <button
      className={`w-full h-11 flex justify-center items-center  rounded-lg border border-black active:scale-75 active:duration-100 transform hover:border-neutral-700 text-black hover:text-neutral-700 active:text-white active:bg-black text-sm font-semibold gilroy leading-tight transition-colors duration-300 ${classes}`}
    >
      {children}
    </button>
  );
};

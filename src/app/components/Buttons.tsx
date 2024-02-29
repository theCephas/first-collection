import React, { ReactNode } from "react";

interface ButtonProps {
  classes: string;
  children: ReactNode | string;
  click?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

export const ButtonPrimary = ({
  classes,
  children,
  buttonType,
  click,
}: ButtonProps) => {
  return (
    <button
      onClick={click}
      type={buttonType || "button"}
      className={`h-11 flex justify-center items-center  bg-[#ff5c00] active:scale-95 active:duration-100 transform hover:bg-orange-500 active:bg-[#ff5c00] rounded-lg text-zinc-100 text-sm font-semibold gilroy leading-tight transition-colors duration-300 ${classes} `}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({
  classes,
  children,
  buttonType,
  click,
}: ButtonProps) => {
  return (
    <button
      onClick={click}
      type={buttonType || "button"}
      className={`w-full h-11 flex justify-center items-center  rounded-lg border border-orange-500 active:scale-95 active:duration-100 transform hover:border-transparent hover:bg-orange-500 text-orange-500 hover:text-white active:text-white text-sm font-semibold gilroy leading-tight transition-all duration-500 ${classes}`}
    >
      {children}
    </button>
  );
};

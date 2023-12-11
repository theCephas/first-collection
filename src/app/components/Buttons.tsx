import React, { ReactNode } from "react";

interface ButtonProps {
  classes: string;
  children: ReactNode | string;
}

export const ButtonPrimary = ({ classes, children }: ButtonProps) => {
  return (
    <button
      className={`h-11 flex justify-center items-center  bg-orange-600 rounded-lg text-zinc-100 text-sm font-semibold gilroy leading-tight ${classes}`}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ classes, children }: ButtonProps) => {
  return (
    <button
      className={`w-full h-11 flex justify-center items-center  rounded-lg border border-black text-black text-sm font-semibold gilroy leading-tight ${classes}`}
    >
      {children}
    </button>
  );
};

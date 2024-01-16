import React from "react";

interface AuthInputProps {
  name: string;
  val: string;
  identifier: string;
  changeHandler: (
    identifier: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  children: React.ReactNode;
  inputType: string;
}

export const AuthInput = ({
  name,
  val,
  identifier,
  changeHandler,
  children,
  inputType,
}: AuthInputProps) => {
  return (
    <label className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1">
      {children}
      <input
        className="w-full h-11 px-3 py-2 rounded-md border border-zinc-400 placeholder:text-zinc-400 focus:outline-orange-600 text-sm font-normal font-['Gilroy'] leading-tight"
        type={inputType}
        placeholder={name}
        onChange={(e) => changeHandler(identifier, e)}
        value={val}
      />
    </label>
  );
};

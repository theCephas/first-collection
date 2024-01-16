import React from "react";
import { HideIcon, ShowIcon } from "./AuthIcons";

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

interface AuthPasswordInputProps extends AuthInputProps {
  passwordFocus: boolean;
  seePassword: boolean;
  setPasswordFocus: React.Dispatch<React.SetStateAction<boolean>>;
  setSeePassword: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthPasswordInput = ({
  val,
  changeHandler,
  children,
  passwordFocus,
  seePassword,
  setPasswordFocus,
  setSeePassword,
}: AuthPasswordInputProps) => {
  return (
    <label
      className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
      htmlFor="password"
    >
      {children}
      <div
        className={`flex h-11 px-3 py-2 rounded-md   ${
          passwordFocus
            ? "border-2 border-orange-600"
            : "border border-zinc-400"
        }`}
      >
        <input
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          className="w-full  placeholder:text-zinc-400 text-sm font-normal font-['Gilroy'] leading-tight focus:outline-none"
          type={seePassword ? "text" : "password"}
          placeholder="Pasword"
          onChange={(e) => changeHandler("password", e)}
          value={val}
        />
        <aside
          onClick={() => setSeePassword((prev) => !prev)}
          className="cursor-pointer"
        >
          {!seePassword && <ShowIcon />}
          {seePassword && <HideIcon />}
        </aside>
      </div>
    </label>
  );
};

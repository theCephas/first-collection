"use client";
import React, { useState } from "react";
import { AuthWrapper } from "../(components)/AuthWrapper";
import Image from "next/image";
import { CheckIcon, HideIcon, ShowIcon } from "../(components)/AuthIcons";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { BackIcon } from "@/app/components/Icons";
import Popup from "@/app/components/Popup";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [hasAcc, setHasAcc] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <AuthWrapper
      classes={"hue-rotate-[-10deg] saturate-[150%]"}
      url={"/auth-female.png"}
      alt={"lady"}
      heroHeader={
        hasAcc
          ? "Welcome back to First Collection"
          : "Get started with First Collection"
      }
      heroText={
        hasAcc
          ? "Be in the loop for exclusive deals."
          : "Be in the loop for exclusive deals. Your unique fashion story begins with a simple sign-up"
      }
    >
      <main className="h-full w-full flex relative pt-20 md:py-14 sm:px-10 md:px-0">
        <Image
          alt="logo"
          width={32}
          height={24}
          className={`w-auto absolute md:hidden top-0 left-1/2 -translate-x-1/2 invert`}
          src="/logo.svg"
        />

        <a href="/" className="absolute top-8 md:top-4 left-0 sm:pl-10 md:pl-0">
          <BackIcon />
        </a>

        <section className="my-auto flex flex-col gap-6 w-full">
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <h3 className="text-black text-2xl font-semibold gilroy leading-9">
              {hasAcc ? "Sign In" : "Sign Up"}
            </h3>
            <p className="text-black text-sm font-normal font-['Gilroy'] leading-tight">
              {hasAcc
                ? " Welcome back to our store!!!"
                : "Fill in your details let's get you started"}
            </p>
          </div>

          {/* FORM SIDE */}
          <form className="flex flex-col gap-6" action="">
            {/* First Name */}
            {!hasAcc && (
              <label
                className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
                htmlFor="first-name"
              >
                First Name
                <input
                  className="w-full h-11 px-3 py-2 rounded-md border border-zinc-400 placeholder:text-zinc-400 focus:outline-orange-600 text-sm font-normal font-['Gilroy'] leading-tight"
                  type="text"
                  placeholder="First name"
                />
              </label>
            )}
            {/* Last Name */}
            {!hasAcc && (
              <label
                className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
                htmlFor="last-name"
              >
                Last Name
                <input
                  className="w-full h-11 px-3 py-2 rounded-md border border-zinc-400 placeholder:text-zinc-400 focus:outline-orange-600 text-sm font-normal font-['Gilroy'] leading-tight"
                  type="text"
                  placeholder="Last name"
                />
              </label>
            )}
            {/* Email */}
            <label
              className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
              htmlFor="email"
            >
              Email Address
              <input
                className="w-full h-11 px-3 py-2 rounded-md border border-zinc-400 placeholder:text-zinc-400 focus:outline-orange-600 text-sm font-normal font-['Gilroy'] leading-tight"
                type="email"
                placeholder="Email address"
              />
            </label>
            {/* Password */}
            <label
              className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
              htmlFor="password"
            >
              Password
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
            {/* CheckBox */}
            <div className="text-neutral-700 text-sm font-normal gilroy leading-tight flex items-center gap-1">
              <div
                onClick={() => setChecked((prev) => !prev)}
                className={`bg-transparent rounded border border-black w-4 h-4 cursor-pointer flex items-center justify-center`}
              >
                {checked && <CheckIcon />}
              </div>
              <span>Keep me logged In.</span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="w-full mt-8 flex flex-col gap-3  ">
              <ButtonPrimary classes="w-full">
                {hasAcc ? "Sign In" : "Sign Up"}
              </ButtonPrimary>
              <ButtonSecondary classes="w-full">
                {hasAcc ? "Sign In" : "Sign Up"} with Google
              </ButtonSecondary>

              <div className="text-neutral-700 text-sm font-normal font-['Gilroy'] leading-tight flex gap-1">
                {"Don't have an account?"}
                <span
                  onClick={() => setHasAcc((prev) => !prev)}
                  className="text-orange-600 cursor-pointer"
                >
                  {hasAcc ? "Sign Up" : "Sign In"}
                </span>
              </div>
            </div>
          </form>
        </section>
        <Popup
          text={
            "Oops! It seems there was an issue check your password and try again."
          }
          type={"error"}
        />
      </main>
    </AuthWrapper>
  );
};
export default Login;

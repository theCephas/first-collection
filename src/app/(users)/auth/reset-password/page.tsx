"use client";
import React, { useState } from "react";
import AuthWrapper from "../(components)/AuthWrapper";
import Image from "next/image";
import { HideIcon, ShowIcon } from "../(components)/AuthIcons";
import { ButtonPrimary } from "@/app/components/Buttons";
import { BackIcon } from "@/app/components/Icons";
import { Fetch } from "@/app/Helpers/Fetch";
import { LoaderIcon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpValues, setOtpValues] = useState("");
  const csrfToken =
    "eR4Ea8PrLmUxWL3uiOi76KruaV7fcGthInQdvfA8EMl1aV2punC3UECqbt635yEd";

  const handleChangePassword = async () => {
    setLoading(true);
    const email = localStorage.getItem("email");

    try {
      if (!email) throw new Error("Invalid Email address");

      if (password !== confirmPassword)
        throw new Error(
          "The passwords you entered do not match, please try again."
        );

      const data = await Fetch("api/accounts/validate-reset-password/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: {
          email: email,
          otp: otpValues,
          new_password: password,
        },
      });

      console.log(await data);

      if (await data.error) {
        throw new Error(data.error);
      }

      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
      });
    } catch (err: any) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper
      classes={"opacity-50"}
      url={"/slide1.svg"}
      alt={"bag"}
      heroHeader={"No worries!!"}
      heroText={"We will help you reset it"}
    >
      <main className="h-full w-full flex relative pt-20 md:py-14 sm:px-10 md:px-0">
        <Image
          alt="logo"
          width={32}
          height={24}
          className={`w-auto absolute md:hidden top-0 left-1/2 -translate-x-1/2 invert`}
          src="/logo.svg"
        />

        <a
          href="/auth/login"
          className="absolute top-8 md:top-4 left-0 sm:pl-10 md:pl-0"
        >
          <BackIcon />
        </a>

        <section className="my-auto flex flex-col gap-6 w-full">
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <h3 className="text-black text-2xl font-semibold gilroy leading-9">
              {"Reset Password"}
            </h3>
            <p className="text-black text-sm font-normal gilroy leading-tight">
              {"Enter your new Password"}
            </p>
          </div>

          {/* FORM SIDE */}
          <form className="flex flex-col gap-6">
            <label
              className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
              htmlFor="otp"
            >
              <input
                type="text"
                placeholder="Enter OTP"
                className={`w-full h-[50px] md:h-[60px] p-2 sm:p-3 border border-orange-600 text-orange-600 rounded-[9px] text-xl sm:text-2xl text-center focus:outline-orange-600 placeholder:text-base`}
                maxLength={6}
                value={otpValues}
                onChange={(e) => {
                  if (!/^[0-9]*$/.test(e.target.value)) return;
                  setOtpValues(e.target.value);
                }}
                required
              />
            </label>

            <label
              className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
              htmlFor="password"
            >
              Password
              <div
                className={`flex h-11 px-3 py-2 rounded-md border border-zinc-400 ${
                  passwordFocus && "border-2 border-orange-600"
                }`}
              >
                <input
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  className="w-full  placeholder:text-zinc-400 text-sm font-normal gilroy focus:outline-none leading-tight"
                  type={seePassword ? "text" : "password"}
                  placeholder="Pasword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <label
              className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
              htmlFor="password"
            >
              Confirm Password
              <div
                className={`flex h-11 px-3 py-2 rounded-md border border-zinc-400 ${
                  confirmPasswordFocus && "border-2 border-orange-600"
                }`}
              >
                <input
                  onFocus={() => setConfirmPasswordFocus(true)}
                  onBlur={() => setConfirmPasswordFocus(false)}
                  className="w-full  placeholder:text-zinc-400 text-sm font-normal gilroy leading-tight focus:outline-none"
                  type={seePassword ? "text" : "password"}
                  placeholder="Confirm Pasword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

            {/* ACTION BUTTONS */}
            <div className="w-full flex flex-col gap-3  ">
              <aside onClick={handleChangePassword}>
                <ButtonPrimary classes="w-full">
                  {loading ? (
                    <LoaderIcon className="animate-spin" />
                  ) : (
                    "Change Password"
                  )}
                </ButtonPrimary>
              </aside>
            </div>
          </form>
        </section>
      </main>
      <ToastContainer />
    </AuthWrapper>
  );
};
export default ResetPassword;

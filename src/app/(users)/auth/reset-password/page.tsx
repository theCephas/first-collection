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
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const csrfToken =
    "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";

  const handleSendLink: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await Fetch("api/accounts/forgot-password/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: { email: email },
      });

      console.log(await data);

      // if ((await data.error) || data.email) {
      //   throw new Error(data.error || data.email[0]);
      // }

      // toast.success("Login successful!", {
      //   position: "top-right",
      //   autoClose: 5000,
      // });
    } catch (err: any) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }

    // setEmailConfirmed((prev) => !prev);
  };

  return (
    <AuthWrapper
      classes={""}
      url={"/auth-male.png"}
      alt={"man"}
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
              {emailConfirmed ? "Reset Password" : "Forgot Password?"}
            </h3>
            <p className="text-black text-sm font-normal gilroy leading-tight">
              {emailConfirmed
                ? "Enter your new Password"
                : "Enter your email address"}
            </p>
          </div>

          {/* FORM SIDE */}
          <form className="flex flex-col gap-6" action="">
            {/* Email */}
            {!emailConfirmed && (
              <label
                className="flex flex-col text-black text-sm font-semibold gilroy leading-tight gap-1"
                htmlFor="email"
              >
                {" Email Address"}
                <input
                  className="w-full h-11 px-3 py-2 rounded-md border border-zinc-400 placeholder:text-zinc-400 text-sm font-normal gilroy leading-tight focus:outline-orange-600"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            )}
            {/* Password */}
            {emailConfirmed && (
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
            )}
            {emailConfirmed && (
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
            )}

            {/* ACTION BUTTONS */}
            <div className="w-full flex flex-col gap-3  ">
              <aside onClick={handleSendLink}>
                <ButtonPrimary classes="w-full">
                  {loading ? (
                    <LoaderIcon className="animate-spin" />
                  ) : (
                    "Send the link"
                  )}
                </ButtonPrimary>
              </aside>
            </div>
          </form>
        </section>
      </main>
    </AuthWrapper>
  );
};
export default ResetPassword;

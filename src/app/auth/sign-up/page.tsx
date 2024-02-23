"use client";
import React, { useState } from "react";
import { AuthWrapper } from "../(components)/AuthWrapper";
import Image from "next/image";
import { CheckIcon, HideIcon, ShowIcon } from "../(components)/AuthIcons";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { BackIcon } from "@/app/components/Icons";
import Popup from "@/app/components/Popup";
import Link from "next/link";
import { Fetch } from "@/app/Helpers/Fetch";
import { LoaderIcon } from "lucide-react";
import { AuthInput, AuthPasswordInput } from "../(components)/AuthInput";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const csrfToken =
    "g6qDP1Pc5S1TxI4pvuj7nVAvZ6TZ7sWRJ3awjtGXgrE5B1Qx2Y5h9oPfdxN5cj9t";

  const cancelPopup = () => {
    setStatus("");
  };

  const changeHandler = (
    identifier: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserInput((prev) => ({
      ...prev,
      [identifier]: e.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const userData = {
      username: `${userInput.firstName}_${userInput.lastName}`,
      email: userInput.email,
      password: userInput.password,
    };

    setLoading(true);

    try {
      const data = await Fetch("accounts/create/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: userData,
      });

      console.log(data);

      toast.success("🦄 Wow so easy!");

      // setMsg("Account created");
      // setStatus("success");
    } catch (err: any) {
      console.log(err.message);
      // setMsg(err.message);
      // setStatus("error");
      toast.error("🦄 Wow so easy!");
    } finally {
      // setTimeout(() => {
      //   cancelPopup();
      // }, 5000);
      setLoading(false);
    }
  };

  return (
    <AuthWrapper
      classes={"hue-rotate-[-10deg] saturate-[150%]"}
      url={"/auth-female.png"}
      alt={"lady"}
      heroHeader={"Get started with First Collection"}
      heroText={
        "Be in the loop for exclusive deals. Your unique fashion story begins with a simple sign-up"
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
              {"Sign Up"}
            </h3>
            <p className="text-black text-sm font-normal font-['Gilroy'] leading-tight">
              {"Fill in your details let's get you started"}
            </p>
          </div>

          {/* FORM SIDE */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            action=""
          >
            {/* First Name */}
            <AuthInput
              name={"First Name"}
              identifier="firstName"
              changeHandler={changeHandler}
              inputType="text"
              val={userInput.firstName}
            >
              First Name
            </AuthInput>

            {/* Last Name */}
            <AuthInput
              name={"Last name"}
              identifier="lastName"
              changeHandler={changeHandler}
              inputType="text"
              val={userInput.lastName}
            >
              Last Name
            </AuthInput>

            {/* Email */}
            <AuthInput
              name={"Email address"}
              identifier="email"
              changeHandler={changeHandler}
              inputType="email"
              val={userInput.email}
            >
              Email Address
            </AuthInput>

            {/* Password */}
            <AuthPasswordInput
              name=""
              identifier=""
              passwordFocus={passwordFocus}
              setPasswordFocus={setPasswordFocus}
              seePassword={seePassword}
              setSeePassword={setSeePassword}
              changeHandler={changeHandler}
              inputType="password"
              val={userInput.password}
            >
              Password
            </AuthPasswordInput>

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
            <div className="w-full mt-8 flex flex-col gap-3  items-center">
              <ButtonPrimary classes="w-full">
                {loading ? <LoaderIcon className="animate-spin" /> : "Sign Up"}
              </ButtonPrimary>

              <ButtonSecondary classes="w-full">
                {"Sign Up"} with Google
              </ButtonSecondary>

              <div className="text-neutral-700 text-sm font-normal font-['Gilroy'] leading-tight flex gap-1">
                {"Don't have an account?"}
                <Link
                  href="/auth/log-in"
                  className="text-orange-600 cursor-pointer"
                >
                  {"Sign In"}
                </Link>
              </div>
            </div>
          </form>
        </section>
        {status.length > 0 && (
          <Popup cancel={cancelPopup} text={msg} type={status} />
        )}
      </main>
      <ToastContainer />
    </AuthWrapper>
  );
};
export default SignUp;

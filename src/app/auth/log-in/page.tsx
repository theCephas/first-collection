"use client";
import React, { useState } from "react";
import { AuthWrapper } from "../(components)/AuthWrapper";
import Image from "next/image";
import { BackIcon } from "@/app/components/Icons";
import { CheckIcon, HideIcon, ShowIcon } from "../(components)/AuthIcons";
import Link from "next/link";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import Popup from "@/app/components/Popup";
import { Fetch } from "@/app/Helpers/Fetch";
import { AuthInput, AuthPasswordInput } from "../(components)/AuthInput";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();

  const csrfToken =
    "mSIS6Zl5GXSxcogcjdQRyyS8hOW74FYRG4pesxTGjzh9ViEqXCfykYAbOzZC11CI";

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
      username: userInput.username,
      password: userInput.password,
    };

    setLoading(true);

    try {
      const data = await Fetch("accounts/token/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: userData,
      });

      console.log(data);

      setMsg("Successful Login");
      setStatus("Success");
      router.push("/");
    } catch (err: any) {
      setMsg(err.message);
      setStatus("error");
    } finally {
      setTimeout(() => {
        cancelPopup();
      }, 5000);
      setLoading(false);
    }
  };

  return (
    <AuthWrapper
      classes={"hue-rotate-[-10deg] saturate-[150%]"}
      url={"/auth-female.png"}
      alt={"lady"}
      heroHeader={"Welcome back to First Collection"}
      heroText={"Be in the loop for exclusive deals."}
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
              {"Sign In"}
            </h3>
            <p className="text-black text-sm font-normal font-['Gilroy'] leading-tight">
              {" Welcome back to our store!!!"}
            </p>
          </div>

          {/* FORM SIDE */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            action=""
          >
            {/* Email */}
            <AuthInput
              name={"Username"}
              identifier="username"
              changeHandler={changeHandler}
              inputType="username"
              val={userInput.username}
            >
              User Name
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
              {showForgotPassword && (
                <p className="text-sm gilroy flex gap-2">
                  Forgot Password?
                  <Link
                    href="/auth/reset-password"
                    className="text-orange-600 font-medium"
                  >
                    Reset
                  </Link>
                </p>
              )}
              <ButtonPrimary classes="w-full">
                {" "}
                {loading ? <LoaderIcon className="animate-spin" /> : "Sign In"}
              </ButtonPrimary>
              <ButtonSecondary classes="w-full">
                {"Sign In"} with Google
              </ButtonSecondary>

              <div className="text-neutral-700 text-sm font-normal font-['Gilroy'] leading-tight flex gap-1">
                {"Don't have an account?"}
                <Link
                  href="/auth/sign-up"
                  className="text-orange-600 cursor-pointer"
                >
                  {"Sign Up"}
                </Link>
              </div>
            </div>
          </form>
        </section>
        {status.length > 0 && (
          <Popup cancel={cancelPopup} text={msg} type={status} />
        )}
      </main>
    </AuthWrapper>
  );
};

export default Login;

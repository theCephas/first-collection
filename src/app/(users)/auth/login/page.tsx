"use client";
import React, { useState } from "react";
import AuthWrapper from "../(components)/AuthWrapper";
import Image from "next/image";
import { BackIcon } from "@/app/components/Icons";
import Link from "next/link";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { Fetch } from "@/app/Helpers/Fetch";
import { AuthInput, AuthPasswordInput } from "../(components)/AuthInput";
import { Check, LoaderIcon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { setCookie } from "@/app/Helpers/Helpers";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const csrfToken =
    "rMdfpVMYyxbaaaIpIqGGOSL69pWzRpdIViZOK2xFrXCEokHkUZ0CCMW2aXVnKhoE";

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
      email: userInput.email,
      password: userInput.password,
    };

    setLoading(true);

    try {
      const data = await Fetch("api/accounts/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: userData,
      });

      // console.log(data);

      if (await data.error) {
        throw new Error(data.error);
      }

      setCookie(data.tokens, checked);

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 5000,
      });

      router.push("/products");
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
              name={"Email"}
              identifier="email"
              changeHandler={changeHandler}
              inputType="email"
              val={userInput.email}
            >
              Email
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
                className={`rounded border  w-4 h-4 cursor-pointer flex items-center justify-center ${
                  checked
                    ? "bg-blue-500 border-transparent"
                    : "bg-transparent border-black"
                }`}
              >
                {checked && <Check color="white" />}
              </div>
              <span>Keep me logged In.</span>
            </div>

            {/* ACTION BUTTONS */}
            <div className="w-full mt-8 flex flex-col gap-3  items-center">
              <p className="text-sm gilroy flex gap-2">
                Forgot Password?
                <Link
                  href="/auth/reset-password"
                  className="text-orange-600 font-medium"
                >
                  Reset
                </Link>
              </p>

              <ButtonPrimary buttonType="submit" classes="w-full">
                {" "}
                {loading ? <LoaderIcon className="animate-spin" /> : "Sign In"}
              </ButtonPrimary>

              <ButtonSecondary classes="w-full">
                {"Sign In"} with Google
              </ButtonSecondary>

              <div className="text-neutral-700 text-sm font-normal font-['Gilroy'] leading-tight flex gap-1">
                {"Don't have an account?"}
                <Link
                  href="/auth/register"
                  className="text-orange-600 cursor-pointer"
                >
                  {"Sign Up"}
                </Link>
              </div>
            </div>
          </form>
        </section>
      </main>
      <ToastContainer />
    </AuthWrapper>
  );
};

export default Login;

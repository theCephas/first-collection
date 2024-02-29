"use client";
import React, { useState } from "react";
import AuthWrapper from "../(components)/AuthWrapper";
import Image from "next/image";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { BackIcon } from "@/app/components/Icons";
import Link from "next/link";
import { Fetch } from "@/app/Helpers/Fetch";
import { Asterisk, LoaderIcon } from "lucide-react";
import { AuthInput, AuthPasswordInput } from "../(components)/AuthInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { isEmpty, isValidEmail, validPassword } from "@/app/Helpers/Helpers";

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const router = useRouter();

  const csrfToken =
    "QXXFTyqas1rI5W01ExT9njr9gQaDNL9hlcGwkwzMgnm08hd1YGVN7asb18AlL5qi";

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
      full_name: `${userInput.firstName}_${userInput.lastName}`,
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

      console.log(await data);

      router.push("/auth/login");

      toast.success("Account created successfully!", {
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
              <Asterisk size={10} color="#ff5c00" />
            </AuthInput>

            {/* Last Name */}
            <AuthInput
              name={"Last name"}
              identifier="lastName"
              changeHandler={changeHandler}
              inputType="text"
              val={userInput.lastName}
            >
              Last Name <Asterisk size={10} color="#ff5c00" />
            </AuthInput>

            {/* Email */}
            <AuthInput
              name={"Email address"}
              identifier="email"
              changeHandler={changeHandler}
              inputType="email"
              val={userInput.email}
              focus={
                userInput.email.length > 0 && !isValidEmail(userInput.email)
                  ? "border-orange-600"
                  : ""
              }
            >
              Email Address <Asterisk size={10} color="#ff5c00" />
              {userInput.email.length > 0 && !isValidEmail(userInput.email) && (
                <p className="text-[10px] ml-3 font-light text-orange-600">
                  Kindly enter a valid email address
                </p>
              )}
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
              Create a strong Password <Asterisk size={10} color="#ff5c00" />
            </AuthPasswordInput>

            {/* Strong password */}
            <ul
              className="text-neutral-700 text-sm font-normal gilroy leading-tight flex flex-col sm:flex-row gap-1 sm:justify-between list-disc list-inside

"
            >
              <li
                className={`text-xs sm:text-center ${
                  /[A-Z]/.test(userInput.password)
                    ? "text-green-600"
                    : "text-zinc-500"
                }`}
              >
                Has uppercase letter
              </li>
              <li
                className={`text-xs sm:text-center ${
                  /\d/.test(userInput.password) ||
                  /[!@#$%^&*]/.test(userInput.password)
                    ? "text-green-600"
                    : "text-zinc-500"
                }`}
              >
                Has number or symbol
              </li>
              <li
                className={`text-xs sm:text-center ${
                  userInput.password.length >= 8
                    ? "text-green-600"
                    : "text-zinc-500"
                }`}
              >
                Is at least 8 characters long
              </li>
            </ul>

            {/* ACTION BUTTONS */}
            <div className="w-full mt-8 flex flex-col gap-3  items-center">
              {validPassword(userInput.password) &&
              !isEmpty(userInput.firstName) &&
              !isEmpty(userInput.lastName) &&
              isValidEmail(userInput.email) ? (
                <ButtonPrimary buttonType="submit" classes={`w-full`}>
                  {loading ? (
                    <LoaderIcon className="animate-spin" />
                  ) : (
                    "Sign Up"
                  )}
                </ButtonPrimary>
              ) : (
                <ButtonPrimary classes={`w-full opacity-50 cursor-not-allowed`}>
                  Sign Up
                </ButtonPrimary>
              )}

              <ButtonSecondary classes="w-full">
                {"Sign Up"} with Google
              </ButtonSecondary>

              <div className="text-neutral-700 text-sm font-normal font-['Gilroy'] leading-tight flex gap-1">
                {"Don't have an account?"}
                <Link
                  href="/auth/login"
                  className="text-orange-600 cursor-pointer"
                >
                  {"Sign In"}
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
export default SignUp;

"use client";
import React, { useState } from "react";
import AuthWrapper from "../(components)/AuthWrapper";
import Image from "next/image";
import { ButtonPrimary } from "@/app/components/Buttons";
import { BackIcon } from "@/app/components/Icons";
import { Fetch } from "@/app/Helpers/Fetch";
import { LoaderIcon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const csrfToken =
    "eR4Ea8PrLmUxWL3uiOi76KruaV7fcGthInQdvfA8EMl1aV2punC3UECqbt635yEd";

  const handleSendLink = async () => {
    setLoading(true);

    try {
      const data = await Fetch("api/accounts/validate-reset-password/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: { email: email },
      });

      console.log(await data);

      if (await data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("email", email);

      toast.success(data.message, {
        position: "top-right",
        autoClose: 5000,
      });

      router.push("/auth/reset-password");
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
              {"Forgot Password?"}
            </h3>
            <p className="text-black text-sm font-normal gilroy leading-tight">
              {"Enter your email address"}
            </p>
          </div>

          {/* FORM SIDE */}
          <form className="flex flex-col gap-6">
            {/* Email */}
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
      <ToastContainer />
    </AuthWrapper>
  );
};
export default ForgotPassword;

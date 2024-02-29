"use client";
import React, { useEffect, useState } from "react";
import { AuthWrapper } from "../(components)/AuthWrapper";
import Image from "next/image";
import { BackIcon } from "@/app/components/Icons";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { LoaderIcon, Timer } from "lucide-react";
import { OtpInputs } from "./components/OtpInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTP = () => {
  const [time, setTime] = useState(60);
  const numberOfInputs = 5;
  const [otpValues, setOtpValues] = useState(Array(numberOfInputs).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);

  // Count Down
  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  // Format Timen
  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Resend
  const handleReset = async () => {
    try {
      setTimeout(() => {
        toast.success("Check your  email for the verification code");
        setTime(60);
        setOtpValues(Array(numberOfInputs).fill(""));
      }, 1000);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Submit
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (otpValues.join("").length < 5) return;

    setIsVerifying(true);

    try {
      if (time === 0)
        throw new Error(
          "OTP expired. Please try again! Click 'Resend' to get a new OTP."
        );

      setTimeout(() => {
        toast.success("OTP Verified Successfully");
      }, 1000);
    } catch (err: any) {
      setTimeout(() => {
        toast.error(err.message);
      }, 1000);
    } finally {
      setTimeout(() => {
        setIsVerifying(false);
      }, 1500);
    }
  };

  return (
    <AuthWrapper
      classes={"hue-rotate-[-10deg] saturate-[150%]"}
      url={"/auth-female.png"}
      alt={"lady"}
      heroHeader={"Confirm your Email address"}
      heroText={
        "A six digit code has been sent to the email address you provided."
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
        <section className="my-auto mx-auto flex flex-col items-center gap-16 gilroy">
          <p className="items-center  text-xl flex flex-col">
            <span className="text-black">Enter OTP sent to</span>
            <span className="text-orange-600 font-bold">cephas@gmail.com</span>
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-14">
            <div className="flex flex-col items-end">
              {/* Inputs */}
              <OtpInputs otpValues={otpValues} setOtpValues={setOtpValues} />
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                {time > 0 ? (
                  formatTime(time)
                ) : (
                  <span className="text-red-500">{"Didn't receive OTP"}</span>
                )}

                <Timer size="16" color={time > 0 ? "#FF8F05" : "#353535"} />
              </p>
            </div>
            <div className="w-full flex flex-col -mt-5">
              <ButtonPrimary
                buttonType="submit"
                classes={`w-full mt-5 ${
                  otpValues.join("").length < 5 &&
                  "opacity-40 cursor-not-allowed"
                }`}
              >
                {isVerifying ? <LoaderIcon className="animate-spin" /> : "Done"}
              </ButtonPrimary>
              {time === 0 && (
                <ButtonSecondary click={handleReset} classes="w-full mt-5">
                  Resend
                </ButtonSecondary>
              )}
            </div>
          </form>
        </section>
      </main>
      <ToastContainer />
    </AuthWrapper>
  );
};

export default OTP;

"use client";
import React, { useEffect, useState } from "react";
import AuthWrapper from "../(components)/AuthWrapper";
import Image from "next/image";
import { BackIcon } from "@/app/components/Icons";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { LoaderIcon, Timer } from "lucide-react";
import { OtpInputs } from "./components/OtpInputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTP = () => {
  const [time, setTime] = useState(60);
  const [otpValues, setOtpValues] = useState("");
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

  // Format Time
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
        setOtpValues("");
      }, 1000);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // Submit
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (otpValues.length < 6) return;

    setIsVerifying(true);
    console.log(otpValues);

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
        <section className="w-full my-auto mx-auto flex flex-col items-center gap-16 gilroy">
          <p className="items-center  text-xl flex flex-col">
            <span className="text-black">Enter OTP sent to</span>
            <span className="text-orange-600 font-bold">cephas@gmail.com</span>
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-14">
            <div className="flex flex-col items-end">
              {/* Inputs */}
              <input
                type="text"
                // name="quantity"
                // pattern="[1-9]"
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
              {/* Timer */}
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                {time > 0 ? (
                  formatTime(time)
                ) : (
                  <span className="text-red-500">{"Didn't receive OTP"}</span>
                )}

                <Timer size="16" color={time > 0 ? "#FF8F05" : "#353535"} />
              </p>
            </div>
            {/* Action Buttons */}
            <div className="w-full flex flex-col -mt-5">
              <ButtonPrimary
                buttonType="submit"
                classes={`w-full mt-5 ${
                  otpValues.length < 6 && "opacity-40 cursor-not-allowed"
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

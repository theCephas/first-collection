"use client";
import React, {
  LegacyRef,
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { AuthWrapper } from "../(components)/AuthWrapper";
import Image from "next/image";
import { BackIcon } from "@/app/components/Icons";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/Buttons";
import { Timer } from "lucide-react";

// type InputRefsArray = MutableRefObject<HTMLInputElement | null | undefined>;
type InputRefsArray = Array<React.RefObject<HTMLInputElement>>;

const OTP = () => {
  const [time, setTime] = useState(60);
  const numberOfInputs = 5;
  const [otpValues, setOtpValues] = useState(Array(numberOfInputs).fill(""));
  // const inputRefs: InputRefsArray = Array.from({ length: numberOfInputs }, () =>
  //   useRef<HTMLInputElement>(null)
  // );

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

  // Input classes 65644
  const inputClasses = `w-full h-[40px] md:h-[60px] p-2 sm:p-3 border border-primary-200 text-primary-200 rounded-[9px] text-xl sm:text-2xl text-center focus:outline-none`;

  const handleInputChange = (index: number, val: string) => {
    if (!/^[0-9]*$/.test(val)) return;
    if (otpValues.join("").length >= 5 && val.length !== 0) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = val;
    console.log(newOtpValues);
    setOtpValues(newOtpValues);

    // Move focus to the next input
    if (val !== "" && index < numberOfInputs - 1) {
      const nextInput = document.getElementById(`otpInput_${index + 1}`);
      nextInput && nextInput.focus();
    }
  };

  const handlePaste = (val: string) => {
    if (val.length > 5 && otpValues.join("").length >= 5) return;
    if (val.length > 1) {
      // const digitArray = Array.from(String(val), Number);
      const digitArray = val.split("");

      const paddedDigitArray = digitArray.concat(
        Array(5 - digitArray.length).fill("")
      );
      // console.log(digitArray);

      setOtpValues([...paddedDigitArray]);

      // Move focus to the next input
      if (val.length <= 5) {
        const nextInput = document.getElementById(
          `otpInput_${digitArray?.length - 1}`
        );
        nextInput && nextInput.focus();
      }
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index === 0) return;

    const target = e.target as HTMLInputElement;

    if (target.value === "" && e.key === "Backspace") {
      const prevInput = document.getElementById(`otpInput_${index - 1}`);
      prevInput && prevInput.focus();
    }
  };

  // Format Timen
  const formatTime = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  // Submit
  const handleSubmit = () => {
    window.alert(otpValues.join(""));
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
              <div className="flex justify-between md:grid grid-cols-5 gap-3 max-w-[500px]">
                {otpValues.map((value, i) => (
                  <input
                    key={i + 1}
                    type="text"
                    name="quantity"
                    pattern="[1-9]"
                    id={`otpInput_${i}`}
                    className={`${inputClasses}`}
                    value={value}
                    onKeyDown={(e) => {
                      handleBackspace(e, i);
                    }}
                    onChange={(e) => {
                      handleInputChange(i, e.target.value);
                    }}
                    onPaste={(e) =>
                      handlePaste(e.clipboardData.getData("text/plain"))
                    }
                    maxLength={1}
                    // ref={inputRefs[i]}
                    required
                  />
                ))}
              </div>
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
              <ButtonPrimary buttonType="submit" classes="w-full mt-5">
                Done
              </ButtonPrimary>
              <ButtonSecondary click={() => setTime(60)} classes="w-full mt-5">
                Resend
              </ButtonSecondary>
            </div>
          </form>
        </section>
      </main>
    </AuthWrapper>
  );
};

export default OTP;

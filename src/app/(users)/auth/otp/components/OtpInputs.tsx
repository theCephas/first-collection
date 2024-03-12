import React, { useEffect, useRef, useState } from "react";

interface Props {
  otpValues: string[];
  setOtpValues: React.Dispatch<React.SetStateAction<string[]>>;
}

let currentOTPIndex: number = 0;
export const OtpInputs = ({ otpValues, setOtpValues }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  // Input classes
  const inputClasses = `w-full h-[40px] md:h-[60px] p-2 sm:p-3 border border-primary-200 text-primary-200 rounded-[9px] text-xl sm:text-2xl text-center focus:outline-orange-600`;

  const handleInputChange = (val: string) => {
    if (!/^[0-9]*$/.test(val)) return;
    if (otpValues.join("").length >= 5 && val.length !== 0) return;

    const newOtpValues: string[] = [...otpValues];
    newOtpValues[currentOTPIndex] = val;

    // Move focus to the next input
    if (!val) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtpValues(newOtpValues);
  };

  const handlePaste = (val: string) => {
    if (val.length > 5 || otpValues.join("").length >= 5) return;
    if (val.length > 1) {
      const digitArray = val.split("");

      const paddedDigitArray = digitArray.concat(
        Array(5 - digitArray.length).fill("")
      );

      setOtpValues([...paddedDigitArray]);

      // Move focus to the next input
      if (val.length <= 5) {
        setActiveOTPIndex(digitArray?.length);
      }
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target as HTMLInputElement;
    if (index === 0 && target.value === "") return;
    currentOTPIndex = index;
    if (target.value === "" && e.key === "Backspace") {
      setActiveOTPIndex(currentOTPIndex - 1);
    }
  };

  return (
    <div className="flex justify-between md:grid grid-cols-5 gap-3 max-w-[500px]">
      {otpValues.map((value, i) => (
        <input
          key={i + 1}
          type="text"
          name="quantity"
          pattern="[1-9]"
          id={`otpInput_${i}`}
          className={`${inputClasses} ${
            value !== "" && "border-2 border-orange-600"
          }`}
          value={value}
          ref={i === activeOTPIndex ? inputRef : null}
          onKeyDown={(e) => {
            handleBackspace(e, i);
          }}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
          onPaste={(e) => handlePaste(e.clipboardData.getData("text/plain"))}
          maxLength={1}
          required
        />
      ))}
    </div>
  );
};

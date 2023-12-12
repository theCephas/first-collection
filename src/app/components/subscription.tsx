import React from "react";
import PrettyShoe from "../../../public/prettyshoe.svg";
import Surge from "../../../public/surge.svg";
import Image from "next/image";
import { ButtonPrimary } from "./Buttons";

const Subscription = () => {
  return (
    <div className="max-w-[1080px] mx-auto px-8 lg:px-10">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 my-20 mb-[200px] relative">
        <Image
          width={0}
          height={0}
          src={PrettyShoe}
          alt="Pretty Shoe"
          className="w-[300px] lg:w-[400px] m-auto lg:m-0 rounded-[8px] transform rotate-[-30deg] "
        />
        <div className="flex flex-col items-center mt-[120px] lg:mt-10">
          <Image
            width={0}
            height={0}
            src={Surge}
            alt="Surge-Like"
            className="absolute right-0 top-[290px] lg:top-[-20px]"
          />
          <div>
            <p className="text-center lg:text-left text-[#060606] font-judson text-[18px] sm:text-[40px] font-[700] ">
              Subscribe to our Mailing List
            </p>
            <p className="text-center lg:text-left text-[14px] font-[400] gilroy text-[#060606] py-6 ">
              Be the first to get new updates on sale, discounts and new
              arrivals!
            </p>
            <form
              action=""
              className="flex gap-4 items-center lg:items-start justify-center lg:justify-normal"
            >
              <input
                type="text"
                placeholder="Email Address"
                className="text-[14px] gilroy leading-[20.3px] font-[400] text-[#b3b3b3] outline-none py-[8px] px-[12px] flex items-center gap-[12px] rounded-[6px] border-[#b3b3b3] border "
              />
              <ButtonPrimary classes="w-fit px-4 shadow-xl shadow-orange-600/50">
                {"Submit"}
              </ButtonPrimary>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

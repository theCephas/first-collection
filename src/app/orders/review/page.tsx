import React from "react";
import Balenciaga1 from "../../../../public/balenciaga1.svg";
import { Star } from "lucide-react";
import ProfileWrapper from "@/layout/ProfileWrapper";
import HistoryWrapper from "@/app/profiles/history/(components)/HistoryWrapper";
import Image from "next/image";

const Page = () => {
  return (
    <ProfileWrapper>
      <HistoryWrapper>
        <div className="gilroy w-full">
          <p className="text-[12px] font-[400] text-[#040404] ">
            Select the stars to rate this product
          </p>
          <div className="flex justify-between w-full my-4 rounded-[12px] border border-[#f6f6f6] bg-[#fbfbfb] p-[8px] ">
            <div className="flex gap-3">
              <Image
                src={Balenciaga1}
                alt={`Balenciaga`}
                width={0}
                height={0}
              />
              <div className="flex flex-col gap-3">
                <p className="text-[14px] sm:text-[16px] font-[400] text-[#040404] ">
                  Balenciaga 3xl Sneakers
                </p>
                <div className="flex gap-2 text-[#040404]">
                  <Star size={20} />
                  <Star size={20} />
                  <Star size={20} />
                  <Star size={20} />
                  <Star size={20} />
                </div>
                <p className="text-[14px] sm:hidden flex font-[500] leading-[20.3px] text-[#040404] ">
                  ₦ 17,000
                </p>
              </div>
            </div>
            <p className="hidden sm:flex text-[14px] font-[500] leading-[20.3px] text-[#040404] ">
              ₦ 17,000
            </p>
          </div>

          <form>
            <p className="mb-2">Leave a review for this product</p>
            <input
              type="text"
              placeholder="Review title"
              className="outline-none my-4 border h-[44px] flex flex-col items-center border-[#b3b3b3] text-[#b3b3b3] text-[14px] font-[400] hover:border-[#ff5c00] focus:border-[#ff5c00] "
            />
          </form>
        </div>
      </HistoryWrapper>
    </ProfileWrapper>
  );
};

export default Page;

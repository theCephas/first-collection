"use client";
import React from "react";
import Balenciaga1 from "../../../../public/balenciaga1.svg";
import { Star } from "lucide-react";
import HistoryWrapper from "@/app/profiles/history/(components)/HistoryWrapper";
import Image from "next/image";
import withAuth from "@/app/auth/(components)/withAuth";

const Page = () => {
  return (
    <>
      <HistoryWrapper>
        <div className="gilroy w-full mb-12">
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
            <p className="text-[12px] font-[400] text-[#040404] ">
              Leave a review for this product
            </p>
            <input
              type="text"
              placeholder="Review title"
              className="outline-none my-4 w-full border py-[8px] px-[12px] rounded-[6px] flex flex-col items-center border-[#b3b3b3] text-[#b3b3b3] text-[14px] font-[400] hover:border-[#ff5c00] focus:border-[#ff5c00] "
            />
            <textarea
              placeholder="Type your review"
              className="outline-none h-[171px] w-full border py-[8px] px-[12px] rounded-[6px] flex flex-col items-center border-[#b3b3b3] text-[#b3b3b3] text-[14px] font-[400] hover:border-[#ff5c00] focus:border-[#ff5c00] "
            />
            <button className="py-[12px] px-[16px] text-[14px] text-[#f2f2f2] font-[600] duration-700 hover:bg-[#e96d26] mt-4 rounded-[8px] bg-[#ff5c00] w-full sm:w-[200px] flex items-center justify-center gap-[10px] ">
              Submit Your Review
            </button>
          </form>
        </div>
      </HistoryWrapper>
    </>
  );
};

export default withAuth(Page);

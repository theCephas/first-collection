import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Balenciaga1 from "../../../../../public/balenciaga1.svg";
import Balenciaga2 from "../../../../../public/balenciaga2.svg";
import OnGoing from "@/app/(components)/OnGoing";

const page = () => {
  return (
    <>
      <div className="max-w-[1080px] mx-auto px-8 lg:px-10 ">
        <div className="flex items-center mt-6 mb-16">
          <Link href="/order-summary">
            <ChevronLeft color="black" />
          </Link>

          <div className="flex m-auto justify-center items-center">
            <div className="w-4 h-4 relative bg-orange-600 rounded-[200px]" />
            <div className="w-[60px] h-1 relative bg-orange-600" />
            <div className="w-4 h-4 relative rounded-[200px] border border-orange-600 bg-orange-600" />
            <div className="w-[60px] h-1 relative bg-orange-600" />
            <div className="w-4 h-4 relative rounded-[200px] border border-orange-600" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 w-full">
          <div className="my-6 w-full">
            <form className="w-full px-4 py-6 rounded-xl border border-neutral-100 flex-col gap-6 flex">
              <p className="font-judson text-[24px] text-[#040404] font-[400]">
                Personal Details
              </p>
              <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="outline-none rounded-[6px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
                readOnly
              />

              <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Bull"
                className="outline-none rounded-[6px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
                readOnly
              />

              <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                Email Address
              </label>
              <input
                type="email"
                placeholder="johnbull@gmail.com"
                className="outline-none rounded-[6px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
                readOnly
              />

              <div className="flex gap-4 justify-between items-center">
                <div className="flex flex-col gap-1">
                  <label className="flex justify-between gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                    City/Town
                  </label>
                  <input
                    type="text"
                    placeholder="City"
                    className="outline-none rounded-[6px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] w-full "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    className="outline-none rounded-[6px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] w-full"
                  />
                </div>
              </div>
              <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                Shipping Address
              </label>
              <input
                type="address"
                placeholder="Shipping Address"
                className="outline-none rounded-[6px] py-[8px] px-[12px] flex items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
              />
            </form>

            <Link
              href="/order-summary"
              className="w-full h-11 px-4 my-8 py-3 bg-orange-600 rounded-lg flex-col justify-center items-center gap-2.5 hidden lg:inline-flex "
            >
              <div className="justify-center items-center gap-2 inline-flex">
                <div className="text-zinc-100 text-sm font-semibold font-['Gilroy'] leading-tight">
                  Proceed
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:mt-5">
            <div className="rounded-xl border border-neutral-100 px-4 py-6 w-full lg:w-[400px]">
              <div className="flex flex-col gap-3">
                <OnGoing
                  imageSrc={Balenciaga1}
                  name="Balenciaga 3d Sneakers"
                  color="Purple"
                  size={40}
                  price={17000}
                  classes="w-full lg:w-auto"
                />
                <OnGoing
                  imageSrc={Balenciaga2}
                  name="Balenciaga 3d Sneakers"
                  color="Purple"
                  size={40}
                  price={17000}
                  classes="w-full lg:w-auto"
                />
                <OnGoing
                  imageSrc={Balenciaga1}
                  name="Balenciaga 3d Sneakers"
                  color="Purple"
                  size={40}
                  price={17000}
                  classes="w-full lg:w-auto"
                />
              </div>
              <div className="w-full h-[58px] my-6 p-4 bg-neutral-50 rounded-xl border border-neutral-100 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <p className="text-neutral-700 text-sm font-normal font-['Gilroy'] leading-tight">
                    Total Amount:
                  </p>
                  <p className="text-orange-600 text-lg font-semibold font-['Gilroy'] leading-relaxed">
                    ₦ 51,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/order-summary"
            className="w-full h-11 px-4 mb-10 py-3 bg-orange-600 rounded-lg flex-col justify-center items-center gap-2.5 lg:hidden inline-flex "
          >
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="text-zinc-100 text-sm font-semibold font-['Gilroy'] leading-tight">
                Complete Payment With Paystack
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;

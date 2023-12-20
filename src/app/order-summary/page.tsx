import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Balenciaga1 from "../../../public/balenciaga1.svg";
import Balenciaga2 from "../../../public/balenciaga2.svg";
import PageWrapper from "../components/PageWrapper";
import OnGoing from "../(components)/OnGoing";

const Page = () => {
  return (
    <PageWrapper>
      <div className="max-w-[1080px] mx-auto px-8 lg:px-10 ">
        <div className="flex items-center mt-6 mb-20">
          <Link href="/">
            <ChevronLeft color="black" />
          </Link>

          <div className="flex m-auto justify-center items-center">
            <div className="w-4 h-4 relative bg-orange-600 rounded-[200px]" />
            <div className="w-[60px] h-1 relative bg-orange-600" />
            <div className="w-4 h-4 relative rounded-[200px] border border-orange-600" />
            <div className="w-[60px] h-1 relative bg-orange-600" />
            <div className="w-4 h-4 relative rounded-[200px] border border-orange-600" />
          </div>
        </div>

        <p className="text-black pb-5 text-2xl font-normal font-['Judson'] leading-[28.80px]">
          Order Summary (3)
        </p>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="flex flex-col gap-3">
              <OnGoing
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full md:w-[500px]"
              />
              <OnGoing
                imageSrc={Balenciaga2}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full md:w-[500px]"
              />
              <OnGoing
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full md:w-[500px]"
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

            {/* Button to proceed */}

            <button className="w-full h-11 px-4 mb-4 py-3 bg-orange-600 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <div className="text-zinc-100 text-sm font-semibold font-['Gilroy'] leading-tight">
                  Proceed
                </div>
              </div>
            </button>
          </div>

          <div className="mb-6 flex flex-col gap-4">
            <div className="w-[409px] h-[61px] flex-col justify-start items-start gap-1 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-4 h-4 p-1 rounded-[200px] border border-orange-600 justify-center items-center flex">
                  <div className="w-2 h-2 relative bg-orange-600 rounded-[200px]" />
                </div>
                <div className="text-black text-base font-medium font-['Gilroy'] leading-normal">
                  Home Delivery
                </div>
              </div>
              <div className="pl-[33px] justify-start items-start gap-2.5 inline-flex">
                <div className="w-[376px] text-neutral-700 text-xs font-normal font-['Gilroy'] leading-[17.40px]">
                  We will deliver the products to your door step. Delivery fee
                  will be communicated to you shortly{" "}
                </div>
              </div>
            </div>

            <div className="w-[411px] h-[61px] flex-col justify-start items-start gap-1 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-4 h-4 relative rounded-[200px] border border-orange-600" />
                <div className="text-black text-base font-medium font-['Gilroy'] leading-normal">
                  Store Pick-up
                </div>
              </div>
              <div className="pl-[33px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-[378px] text-neutral-700 text-xs font-normal font-['Gilroy'] leading-[17.40px]">
                  The product will be available for pick-up from our store at
                  Shop A49 main market, Ughelli, Delta State.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;

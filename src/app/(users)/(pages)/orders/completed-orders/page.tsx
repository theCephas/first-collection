"use client";
import React from "react";
import Balenciaga1 from "../../../../../../public/balenciaga1.svg";
import Balenciaga2 from "../../../../../../public/balenciaga2.svg";
import Image from "next/image";
import Completed from "@/app/(components)/Completed";
import HistoryWrapper from "../../profiles/history/(components)/HistoryWrapper";
import withAuth from "@/app/(users)/auth/(components)/withAuth";

const Page = () => {
  return (
    <>
      <HistoryWrapper>
        <div className="w-full flex flex-col gap-8 mb-14">
          <div className="w-full">
            <p className="text-[12px] pb-4 font-[400] leading-[17.4px] text-[#040404] ">
              Nov 2, 2023
            </p>
            <div className="flex flex-col gap-3">
              <Completed
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <Completed
                imageSrc={Balenciaga2}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <Completed
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-[100%]"
              />
            </div>
          </div>

          <div className="w-full">
            <p className="text-[12px] pb-4 font-[400] leading-[17.4px] text-[#040404] ">
              Oct 15, 2023
            </p>
            <div className="flex flex-col gap-3">
              <Completed
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <Completed
                imageSrc={Balenciaga2}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <Completed
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-[100%]"
              />
            </div>
          </div>
        </div>
      </HistoryWrapper>
    </>
  );
};

export default withAuth(Page);

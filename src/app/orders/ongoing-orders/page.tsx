import React from "react";
import ProfileWrapper from "@/layout/ProfileWrapper";
import HistoryWrapper from "@/app/profiles/history/(components)/HistoryWrapper";
import Balenciaga1 from "../../../../public/balenciaga1.svg";
import Balenciaga2 from "../../../../public/balenciaga2.svg";
import Image from "next/image";
import OnGoing from "@/app/(components)/OnGoing";

const Page = () => {
  return (
    <ProfileWrapper>
      <HistoryWrapper>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full">
            <p className="text-[12px] pb-4 font-[400] leading-[17.4px] text-[#040404] ">
              Nov 2, 2023
            </p>
            <div className="flex flex-col gap-3">
              <OnGoing
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <OnGoing
                imageSrc={Balenciaga2}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <OnGoing
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
              <OnGoing
                imageSrc={Balenciaga1}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <OnGoing
                imageSrc={Balenciaga2}
                name="Balenciaga 3d Sneakers"
                color="Purple"
                size={40}
                price={17000}
                classes="w-full"
              />
              <OnGoing
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
    </ProfileWrapper>
  );
};

export default Page;

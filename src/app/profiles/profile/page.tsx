"use client";
import React, { Suspense, useCallback, useEffect } from "react";
import ProfileWrapper from "@/layout/ProfileWrapper";
import withAuth from "@/app/auth/(components)/withAuth";
import { Fetch } from "@/app/Helpers/Fetch";
import { getToken } from "@/app/Helpers/Helpers";
import { useUser } from "@/app/Helpers/useUser";

const Profile = () => {
  const user = useUser();

  return (
    <ProfileWrapper>
      <div className="mt-20 mb-[150px] flex flex-col md:flex-row gap-6">
        {user && (
          <form className="w-full px-4 py-6 rounded-xl border border-neutral-100 flex-col gap-6 flex">
            <label className="flex justify-between">
              <p className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
                First Name
              </p>
              <p className="text-right gilroy text-[14px] font-[500] text-[#ff5c00]  ">
                Edit
              </p>
            </label>
            <p className=" rounded-[6px] py-[8px] px-[12px] flex items-center  border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] ">
              {user?.firstName}
            </p>
            <input
              type="text"
              placeholder="John"
              className="hidden outline-none rounded-[6px] py-[8px] px-[12px] items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
              readOnly
            />

            <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
              Last Name
            </label>
            <p className=" rounded-[6px] py-[8px] px-[12px] flex items-center  border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] ">
              {user?.lastName}
            </p>
            <input
              type="text"
              placeholder="Bull"
              className="hidden outline-none rounded-[6px] py-[8px] px-[12px] items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
              readOnly
            />

            <label className="gilroy text-[14px] font-[600] leading-[20.3px] text-[#040404] ">
              Email Address
            </label>
            <p className=" rounded-[6px] py-[8px] px-[12px] flex items-center  border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] ">
              {user?.email}
            </p>
            <input
              type="email"
              placeholder="johnbull@gmail.com"
              className="hidden outline-none rounded-[6px] py-[8px] px-[12px] items-center focus:border-[#ff5c00] border border-[#b3b3b3] text-[#040404] gilroy text-[14px] leading-[20.3px] font-[400] mt-[-22px] "
              readOnly
            />
          </form>
        )}

        <form className="w-full h-[204px] px-4 py-6 rounded-xl border border-neutral-100 flex-col gap-6 flex">
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

          <button className="bg-[#ff5c00] mt-[25px] py-[12px] px-[16px] rounded-[8px] flex justify-center items-center hover:bg-[#ee8040] duration-700 text-[#f2f2f2] gilroy font-[600] text-[14px] w-full ">
            Update
          </button>
        </form>
      </div>
    </ProfileWrapper>
  );
};

export default withAuth(Profile);

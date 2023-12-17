"use client";
import Image from "next/image";
import React from "react";

export const SearchResults = () => {
  return (
    <section className="absolute left-6 sm:left-[20%]  bg-white rounded-2xl overflow-hidden shadow flex-col justify-start items-start gap-4 inline-flex z-50 p-4">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="w-[15rem] md:w-[34.5rem] p-2 bg-neutral-50 rounded-xl border border-neutral-100 flex-col justify-start items-start gap-2.5 inline-flex"
        >
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <div className="w-12 h-12 rounded-md justify-center items-center flex overflow-hidden">
              <Image
                alt=""
                width={100000}
                height={100000}
                className="w-full h-auto"
                src="/shoe3.png"
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch justify-between items-start flex">
                <div className="w-fit">
                  <span className="text-black text-xs font-normal gilroy leading-none">
                    Balenciaga 3xl{" "}
                  </span>
                  <span className="text-black text-xs font-semibold gilroy leading-none">
                    Sne
                  </span>
                  <span className="text-black text-xs font-normal gilroy leading-none">
                    akers
                  </span>
                </div>
                <div className="text-orange-600 text-xs font-medium gilroy leading-none whitespace-nowrap">
                  ₦ 17,000
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

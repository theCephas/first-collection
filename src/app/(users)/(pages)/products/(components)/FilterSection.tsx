"use client";
import React from "react";

type filter = {
  title: string;
  categories: string[];
};

interface Props {
  filter: (text: string) => void;
}

type filters = filter[];

const Filter: filters = [
  {
    title: "Categories",
    categories: [
      "Bags",
      "Head Ties",
      "Male Shoes",
      "Male Shoes",
      "Female Shoes",
      "Purses",
    ],
  },
];

const FilterSection = ({ filter }: Props) => {
  return (
    <aside className="">
      <div className="lg:flex-col gap-6 justify-start items-start flex ">
        {Filter.map((item, i) => (
          <div
            key={i + 1}
            className={`w-full flex-col justify-start items-start gap-6 flex rounded-xl border border-neutral-100 p-3.5 overflow-hidden ${
              item.title !== "Categories" &&
              item.title !== "Brands" &&
              "hidden lg:flex"
            }  ${item.title === "Brands" && "hidden sm:flex"}`}
          >
            <h4 className="text-black text-base font-semibold gilroy leading-normal">
              {item.title}
            </h4>
            <ul
              className={`w-full lg:flex-col justify-start items-start gap-4 flex overflow-scroll hide-scroll pr-2`}
            >
              {item.categories.map((cat, i) => (
                <li
                  key={i + 1}
                  className="text-zinc-600 whitespace-nowrap text-base font-normal gilroy leading-normal cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="hidden w-full flex-col justify-start items-start gap-6 lg:flex rounded-xl border border-neutral-100 p-3.5">
          <h4 className="text-black text-base font-semibold gilroy leading-normal">
            Price
          </h4>
          <ul className="flex-col justify-start items-start gap-4 flex">
            <li
              onClick={() => filter("lowest")}
              className="text-zinc-600 text-sm font-normal gilroy leading-normal px-3 pr-5 py-3 rounded-md border border-zinc-400 cursor-pointer"
            >
              Lowest Price
            </li>
            <li
              onClick={() => filter("highest")}
              className="text-zinc-600 text-sm font-normal gilroy leading-normal px-3 pr-5 py-3 rounded-md border border-zinc-400 cursor-pointer"
            >
              Highest Price
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
export default FilterSection;

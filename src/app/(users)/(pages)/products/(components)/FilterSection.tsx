"use client";
import { FilterIcon } from "./ProductsIcons";
import React from "react";
// import styles from '/Fiter.modules.css'

type filter = {
  title: string;
  categories: string[];
};

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
  {
    title: "Brands",
    categories: [
      "Nike",
      "Naked Wolfe",
      "Adiddas",
      "Fila",
      "Reebok",
      "View more",
    ],
  },
  {
    title: "Colors",
    categories: ["Beige", "Black", "Blue", "Brown", "Cyan", "View more"],
  },
];

const FilterSection = () => {
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
              className={`w-full lg:flex-col justify-start items-start gap-4 flex overflow-scroll hide-scroll`}
            >
              {item.categories.map((cat, i) => (
                <li
                  key={i + 1}
                  className="text-zinc-600 whitespace-nowrap text-base font-normal gilroy leading-normal"
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
            <li className="text-zinc-600 text-sm font-normal gilroy leading-normal px-3 pr-5 py-3 rounded-md border border-zinc-400">
              Lowest Price
            </li>
            <li className="text-zinc-600 text-sm font-normal gilroy leading-normal px-3 pr-5 py-3 rounded-md border border-zinc-400">
              Highest Price
            </li>
          </ul>
        </div>
      </div>

      <div className="justify-end mt-4 items-center gap-0.5 flex cursor-pointer lg:hidden">
        <FilterIcon />
        <p className="text-zinc-600 text-base font-normal gilroy leading-normal">
          Filters
        </p>
      </div>
    </aside>
  );
};
export default FilterSection;

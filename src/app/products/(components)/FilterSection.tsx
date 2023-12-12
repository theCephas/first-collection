import React from "react";

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
    <div className="  flex-col gap-6 justify-start items-start flex">
      {Filter.map((item, i) => (
        <div
          key={i + 1}
          className="w-full flex-col justify-start items-start gap-6 flex rounded-xl border border-neutral-100 p-3.5"
        >
          <h4 className="text-black text-base font-semibold font-['Gilroy'] leading-normal">
            {item.title}
          </h4>
          <ul className="flex-col justify-start items-start gap-4 flex">
            {item.categories.map((cat, i) => (
              <li
                key={i + 1}
                className="text-zinc-600 text-base font-normal font-['Gilroy'] leading-normal"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default FilterSection;

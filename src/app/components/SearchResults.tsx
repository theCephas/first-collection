"use client";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  searchResult: any;
  query: string;
  close: () => void;
}

export const SearchResults = ({ searchResult, query, close }: Props) => {
  const router = useRouter();
  return (
    <section className="absolute max-h-[400px] left-6 sm:left-[20%]  bg-white rounded-2xl overflow-scroll hide-scroll shadow flex-col justify-start items-start gap-4 inline-flex z-50 border-[16px] border-white">
      {searchResult.length > 0 ? (
        searchResult.map((item: any, i: number) => (
          <div
            key={i + 1}
            onClick={() => {
              close();
              router.push(`/products/${item.id}`);
            }}
            className="w-[15rem] md:w-[34.5rem] p-2 bg-neutral-50 hover:bg-neutral-200 rounded-xl border border-neutral-100 flex-col justify-start items-start gap-2.5 flex active:scale-95 cursor-pointer"
          >
            <div className="self-stretch items-stretch gap-4 flex h-12">
              <div className="w-12 h-12 rounded-md justify-center flex items-center overflow-hidden">
                <Image
                  alt=""
                  width={100000}
                  height={100000}
                  className="w-full h-auto"
                  src={`https://first-collectionz.onrender.com${
                    item.image || ""
                  }`}
                />
              </div>
              <div className="flex justify-between gap-2 h-full grow">
                <aside className="w-fit flex flex-col gap-1 justify-between h-full">
                  <span className="text-black text-xs font-bold gilroy leading-none cursor-pointer">
                    {item.name.toUpperCase()}
                  </span>

                  <span className="text-black text-xs font-normal gilroy leading-none">
                    {item.description.charAt(0).toUpperCase()}
                    {item.description.length > 25
                      ? item.description
                          .split("")
                          .splice(0, 25)
                          .join("")
                          .slice(1)
                          .toLowerCase() + "..."
                      : item.description.slice(1).toLowerCase()}
                  </span>
                </aside>
                <span className="text-orange-600 text-xs font-medium gilroy leading-none whitespace-nowrap">
                  ₦{item.price}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-orange-600 text-xl font-bold flex flex-col gap-3 items-center">
          <AlertCircle color="#ff5c00" size={50} />
          <span>{'No Product available for "{query}"'}</span>
        </div>
      )}
    </section>
  );
};

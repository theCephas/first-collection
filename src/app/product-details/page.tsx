import React from "react";
import PageWrapper from "../components/PageWrapper";
import { BackIcon } from "../components/Icons";

import Image from "next/image";
import { Minus, Plus, Star } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "../components/Buttons";
import Link from "next/link";

const ProductDetails = () => {
  return (
    <PageWrapper>
      <section className="mt-24 max-w-[67.5rem] mx-auto px-6 xl:px-0">
        <Link href="/products">
          <BackIcon />
        </Link>
        <div className="mt-6 flex flex-col gap-6">
          <aside className=" h-72 rounded-xl border border-neutral-100 overflow-hidden">
            <Image
              className="w-full"
              width={100000}
              height={100000}
              alt=""
              src="/shoe3.png"
            />
          </aside>
          <aside className="grid grid-cols-3 gap-4">
            {["/shoe1.png", "/shoe2.png", "/shoe3.png"].map((item, i) => (
              <Image
                key={i}
                className="w-full rounded-xl border border-neutral-100"
                width={10000}
                height={10000}
                alt=""
                src={item}
              />
            ))}
          </aside>
        </div>
      </section>
      {/*  */}
      <section className="mt-14 max-w-[67.5rem] mx-auto px-6 xl:px-0 flex flex-col gap-8">
        {/* DESCRIPTION AND RATING */}
        <div className="flex-col justify-start items-start gap-2 flex">
          <p className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
            Balenciaga 3xl Sneakers
          </p>
          <p className="text-orange-600 text-lg font-medium font-['Inter'] leading-relaxed">
            ₦ 17,000
          </p>
          <div className="justify-start items-center gap-2 flex">
            <div className="justify-start items-start gap-0.5 flex">
              {[1, 2, 3, 4].map((item) => (
                <Star
                  key={item}
                  style={{ color: "#FE833D" }}
                  className="w-[12px] h-[12px]"
                />
              ))}
            </div>
            <p className="text-black text-xs font-normal font-['Gilroy'] leading-none">
              (0) no ratings yet.
            </p>
          </div>
        </div>

        {/* AVAILABLE COLORS */}
        <div className="flex-col justify-start items-start gap-2 flex">
          <p className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
            Available colours
          </p>
          <div className="justify-start items-center gap-1 flex">
            {["black", "orange-600", "white", "zinc-600", "amber-500"].map(
              (item, i) => (
                <div
                  key={i + 1}
                  className={`w-6 h-6 relative bg-${item} rounded-2xl border border-neutral-200`}
                />
              )
            )}
          </div>
        </div>

        {/* AVAILABLE SIZES */}
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <p className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
              Available sizes
            </p>
            <p className="text-orange-600 text-xs font-medium font-['Gilroy'] leading-none">
              size guide
            </p>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            {[38, 40, 42].map((item) => (
              <div
                key={item}
                className={`p-4 ${
                  item === 38
                    ? "bg-orange-600 text-white"
                    : "bg-zinc-100 text-black"
                } rounded-full  text-sm font-semibold font-['Gilroy'] leading-tight`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* QUANTITY */}
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
            Quantity
          </div>
          <div className="px-3 py-2 rounded-lg border border-zinc-100 flex-col justify-center items-center gap-2.5 flex">
            <div className="justify-center items-center gap-6 inline-flex">
              <Minus style={{ color: "#B3B3B3" }} />
              <div className="text-black text-sm font-semibold font-['Gilroy'] leading-tight">
                1
              </div>
              <Plus />
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="w-full flex gap-6">
          <ButtonSecondary classes="">{"Add to cart"}</ButtonSecondary>
          <ButtonPrimary classes="w-full">{"Checkout"}</ButtonPrimary>
        </div>
      </section>
      {/*  */}
      <section className="mt-14 max-w-[67.5rem] mx-auto px-6 xl:px-0">
        <div className="px-4 py-6 bg-white rounded-xl border border-neutral-100 justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch text-black text-sm font-normal font-['Gilroy'] leading-tight flex flex-col gap-6">
            <p className="text-black text-base font-semibold font-['Gilroy'] leading-normal">
              Product Description
            </p>
            {[
              "Responsive Cushioning: The Air Zoom unit in the sole delivers exceptional cushioning and energy return with every step, ensuring a smooth and responsive ride.",
              "Lightweight and Breathable: The engineered mesh upper keeps your feet cool and comfortable, while the lightweight design helps you stay fast and agile.",
              "Secure Fit: Dynamic Flywire technology wraps your foot for a secure and personalized fit, providing the support you need during your runs.",
              "Versatile Style: With its sleek design and signature Nike Swoosh, the Pegasus 38 seamlessly transitions from your daily run to casual wear.",
            ].map((item, i) => (
              <p key={i + 1}>{item}</p>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="px-4 py-6 bg-white rounded-xl border border-neutral-100 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch h-80 flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-black text-base font-medium font-['Gilroy'] leading-normal">
                Product Reviews
              </div>
              <div className="justify-start items-start gap-0.5 flex">
                {[1, 2, 3, 4].map((item) => (
                  <Star
                    key={item}
                    style={{ color: "#FE833D" }}
                    className="w-[12px] h-[12px]"
                  />
                ))}
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
                  Exactly what I ordered
                </div>
                <div className="justify-start items-start gap-0.5 flex">
                  {[1, 2, 3, 4].map((item) => (
                    <Star
                      key={item}
                      style={{ color: "#FE833D" }}
                      className="w-[12px] h-[12px]"
                    />
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-sm font-normal font-['Gilroy'] leading-tight">
                When I got the shoe, I wore it and it fits perfectly
              </div>
              <div className="text-neutral-700 text-xs font-normal font-['Gilroy'] leading-none">
                Adesola Benita | Oct 1, 2023
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
                  WOW{" "}
                </div>
                <div className="justify-start items-start gap-0.5 flex">
                  {[1, 2, 3, 4].map((item) => (
                    <Star
                      key={item}
                      style={{ color: "#FE833D" }}
                      className="w-[12px] h-[12px]"
                    />
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-sm font-normal font-['Gilroy'] leading-tight">
                I love the sole of the shoe and every other thing about the
                shoe, it’s just perfect
              </div>
              <div className="text-neutral-700 text-xs font-normal font-['Gilroy'] leading-none">
                Bosun Bamidele | Sep 20, 2023
              </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="text-black text-sm font-medium font-['Gilroy'] leading-tight">
                  Exactly what I ordered
                </div>
                <div className="justify-start items-start gap-0.5 flex">
                  {[1, 2, 3, 4].map((item) => (
                    <Star
                      key={item}
                      style={{ color: "#FE833D" }}
                      className="w-[12px] h-[12px]"
                    />
                  ))}
                </div>
              </div>
              <div className="self-stretch text-black text-sm font-normal font-['Gilroy'] leading-tight">
                When I got the shoe, I wore it and it fits perfectly
              </div>

              <p className="w-full text-neutral-700 text-xs font-normal font-['Gilroy'] leading-none flex justify-between">
                Benjamin Nice | Sep 20, 2023
                <span className="text-orange-600 text-sm font-normal font-['Gilroy'] leading-tight">
                  View more
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProductDetails;

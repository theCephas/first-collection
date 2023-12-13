"use client";
import { Star } from "lucide-react";
import React from "react";

const ProductReview = () => {
  return (
    <section className="mt-14 max-w-[67.5rem] mx-auto px-6 xl:px-0 flex flex-col gap-6">
      <div className="px-4 py-6 bg-white rounded-xl border border-neutral-100 justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch text-black text-sm font-normal gilroy leading-tight flex flex-col gap-6">
          <p className="text-black text-base font-semibold gilroy leading-normal">
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

      {/* PRODUCT REVIEW */}
      <div className="px-4 py-6 bg-white rounded-xl border border-neutral-100 flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <p className="text-black text-base font-medium gilroy leading-normal">
            Product Reviews
          </p>
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
        <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <p className="text-black text-sm font-medium gilroy leading-tight">
              Exactly what I ordered
            </p>
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
          <p className="self-stretch text-black text-sm font-normal gilroy leading-tight">
            When I got the shoe, I wore it and it fits perfectly
          </p>
          <p className="text-neutral-700 text-xs font-normal gilroy leading-none">
            Adesola Benita | Oct 1, 2023
          </p>
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-1.5 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <p className="text-black text-sm font-medium gilroy leading-tight">
              WOW{" "}
            </p>
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
          <p className="self-stretch text-black text-sm font-normal gilroy leading-tight">
            {
              " I love the sole of the shoe and every other thing about the shoe, it's just perfect"
            }
          </p>
          <p className="text-neutral-700 text-xs font-normal gilroy leading-none">
            Bosun Bamidele | Sep 20, 2023
          </p>
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-1.5 flex">
          <div className="justify-start items-center gap-2 inline-flex">
            <p className="text-black text-sm font-medium gilroy leading-tight">
              Exactly what I ordered
            </p>
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
          <p className="self-stretch text-black text-sm font-normal gilroy leading-tight">
            When I got the shoe, I wore it and it fits perfectly
          </p>

          <p className="w-full text-neutral-700 text-xs font-normal gilroy leading-none flex justify-between">
            Benjamin Nice | Sep 20, 2023
            <span className="text-orange-600 text-sm font-normal gilroy leading-tight">
              View more
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default ProductReview;

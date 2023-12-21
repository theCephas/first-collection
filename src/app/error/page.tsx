"use client";
import Image from "next/image";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import { ButtonPrimary } from "../components/Buttons";
import Link from "next/link";

// mt-20 md:mt-40

const icons: string[] = [
  "top-1",
  "top-2 left-1/4",
  "-top-4 left-1/2",
  "top-2 -right-1",
  "top-1/4 right-0",
  "top-1/2 -right-3",
  "bottom-1/4 right-1",
];

const Error = () => {
  return (
    <PageWrapper>
      <section className="max-w-[67.5rem] mx-auto px-6 xl:px-0 h-screen flex flex-col gap-6 items-center sm:place-content-center mt-10 sm:mt-0">
        <aside className="relative">
          <Image
            className="max-w-[19rem] h-auto"
            src="/Illustrations.svg"
            alt="error"
            width={1000}
            height={1000}
          />
          {icons.map((classes, i) => (
            <Image
              key={i + 1}
              className={`absolute ${classes}`}
              src="/Vector.svg"
              alt="error"
              width={24}
              height={24}
            />
          ))}
        </aside>
        <p className="text-center text-black text-sm font-medium gilroy leading-tight">
          Uh-oh! It seems something went amiss. Please check your connection,
          try again
        </p>
        <Link href="/">
          <ButtonPrimary classes="w-fit px-4">{"Go back home"}</ButtonPrimary>
        </Link>
      </section>
    </PageWrapper>
  );
};
export default Error;

import React from "react";
import PageWrapper from "./components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary } from "./components/Buttons";

const icons: string[] = [
  "top-1",
  "top-2 left-1/4",
  "-top-4 left-1/2",
  "top-2 -right-1",
  "top-1/4 right-0",
  "top-1/2 -right-3",
  "bottom-1/4 right-1",
];

const notFound = () => {
  return (
    <PageWrapper>
      <section className="max-w-[67.5rem] mx-auto px-6 xl:px-0 h-screen flex flex-col gap-6 items-center sm:place-content-center mt-10 sm:mt-0">
        <aside className="max-w-[19rem] h-auto relative">
          <Image
            className=""
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

export default notFound;

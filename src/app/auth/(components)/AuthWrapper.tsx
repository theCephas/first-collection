"use client";
import React, { ReactNode } from "react";
import Image from "next/image";

interface ContainerProps {
  children: ReactNode;
  classes: string;
  url: string;
  alt: string;
  heroHeader: string;
  heroText: string;
}

export const AuthWrapper = ({
  children,
  classes,
  url,
  alt,
  heroHeader,
  heroText,
}: ContainerProps) => {
  return (
    <section className="h-full w-full max-w-[67.5rem] mx-auto md:grid md:grid-cols-2 py-6 md:gap-6 px-4 xl:px-0">
      <section className="hidden bg-stone-950 rounded-2xl md:flex justify-end items-center overflow-hidden py-20 relative">
        <Image
          alt="logo"
          width={32}
          height={24}
          className={`w-auto absolute top-12 left-12`}
          src="/logo.svg"
        />
        <div className="absolute top-[20%] left-10 z-20 flex-col justify-start items-start gap-5 flex max-w-[26rem]">
          <h2 className="text-white text-[3.5rem] font-bold font-judson leading-[3.5rem]">
            {heroHeader}
          </h2>
          <p className="gilroy text-white text-sm font-light leading-tight">
            {heroText}
          </p>
        </div>
        <Image
          alt={alt}
          width={1000}
          height={1000}
          className={`h-full w-[60%] ${classes} object-cover rounded-tl-2xl rounded-bl-2xl`}
          src={url}
        />
      </section>
      {children}
    </section>
  );
};

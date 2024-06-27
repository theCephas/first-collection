"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import withAuth from "./withAuth";

interface ContainerProps {
  children: ReactNode;
  classes: string;
  url: string;
  alt: string;
  heroHeader: string;
  heroText: string;
}

const AuthWrapper = ({
  children,
  classes,
  url,
  alt,
  heroHeader,
  heroText,
}: ContainerProps) => {
  return (
    <div className="h-full w-full max-w-[67.5rem] mx-auto md:grid md:grid-cols-2 py-6 md:gap-6 px-4 xl:px-0">
      <div className="hidden bg-stone-950 rounded-2xl md:flex justify-end items-center overflow-hidden py-20 relative">
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
        <aside className="h-full w-[60%] relative">
          <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-orange-600/25 opacity-50 rounded-tl-2xl rounded-bl-2xl z-50"></div>
          <Image
            alt={alt}
            width={1000}
            height={1000}
            className={`h-full w-full ${classes} object-cover rounded-tl-2xl rounded-bl-2xl`}
            src={url}
          />
        </aside>
      </div>
      {children}
    </div>
  );
};
export default withAuth(AuthWrapper);

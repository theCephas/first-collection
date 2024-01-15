"use client";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-3 bg-black justify-center items-center inline-flex">
      <p className="text-white text-sm font-normal gilroy leading-tight">
        © {year} First Collection shoes
      </p>
    </footer>
  );
};
export default Footer;

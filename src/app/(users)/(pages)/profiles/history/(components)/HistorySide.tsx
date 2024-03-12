"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Ongoing orders",
    href: "/orders/ongoing-orders",
  },
  {
    name: "Completed orders",
    href: "/orders/completed-orders",
  },
];

export default function HistorySide() {
  const pathname = usePathname();

  return (
    <aside className="md:w-[232px] md:h-[102px] border border-[#fbfbfb] flex items-center justify-center md:justify-normal md:items-start md:flex-col rounded-[12px] p-5 gilroy text-[14px] sm:text-[16px] gap-2 font-[400] ">
      {links?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={` ${
            pathname.toLowerCase() === item.href.toLowerCase()
              ? "text-[#ff5c00]"
              : "text-[#5a5a5a] "
          }`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  );
}

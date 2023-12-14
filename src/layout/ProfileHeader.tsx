"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const links = [
  {
    name: "Profile",
    href: "/profiles/profile",
  },
  {
    name: "History",
    href: "/profiles/history",
  },
];

export default function ProfileHeader() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center gap-6">
      {links?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={` ${
            pathname.toLowerCase() === item.href.toLowerCase()
              ? "border-[#ff5c00] border-b text-black"
              : "text-zinc-600 "
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

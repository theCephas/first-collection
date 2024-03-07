"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Profile",
    href: "/profiles/profile",
  },
  {
    name: "History",
    href: "/orders/ongoing-orders",
  },
];

export default function ProfileHeader() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center gap-6">
      {links?.map((item, index) => (
        <div
          className={`font-[600] ${
            pathname.toLowerCase() === item.href.toLowerCase()
              ? "text-[#ff5c00] border-b border-[#ff5c00]"
              : "text-zinc-600"
          }`}
          key={index}
        >
          <Link href={item.href}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}

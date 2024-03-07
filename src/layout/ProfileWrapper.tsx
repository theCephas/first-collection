import React from "react";
import PageWrapper from "@/app/components/PageWrapper";
import ProfileHeader from "./ProfileHeader";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ProfileWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative z-[39] mb-36 max-w-[67.5rem] mx-auto px-6 lg:px-8 mt-6 ">
        <Link href="/" className="float-left">
          <ChevronLeft />
        </Link>
        <ProfileHeader />
        {children}
      </div>
    </>
  );
}

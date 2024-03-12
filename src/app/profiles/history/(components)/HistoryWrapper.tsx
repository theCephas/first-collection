import React from "react";
import HistorySide from "./HistorySide";
import ProfileHeader from "@/layout/ProfileHeader";

export default function HistoryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-[39] max-w-[67.5rem] mx-auto px-6 lg:px-8 mt-6 ">
      <ProfileHeader />
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <HistorySide />
        {children}
      </div>
    </div>
  );
}

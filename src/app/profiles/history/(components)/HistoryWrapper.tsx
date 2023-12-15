import React from "react";
import HistorySide from "./HistorySide";

export default function HistoryWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-[39] max-w-[67.5rem] mx-auto px-6 lg:px-8 mt-6 ">
      <div className="flex flex-col md:flex-row gap-6">
        <HistorySide />
        {children}
      </div>
    </div>
  );
}

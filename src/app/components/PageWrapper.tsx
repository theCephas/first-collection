"use client";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./Footer";

interface PageProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageProps) => {
  return (
    <main className="flex flex-col justify-between">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default PageWrapper;

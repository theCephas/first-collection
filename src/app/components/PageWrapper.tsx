"use client";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./Footer";

interface PageProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageProps) => {
  return (
    <main>
      <div className="">
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default PageWrapper;

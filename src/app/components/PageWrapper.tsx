"use client";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./Footer";
import { useHideLayout } from "../Helpers/useHideLayout";

interface PageProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageProps) => {
  const { hide } = useHideLayout();
  return (
    <main>
      <div className="">
        {!hide && <Header />}
        {children}
      </div>
      {!hide && <Footer />}
    </main>
  );
};

export default PageWrapper;

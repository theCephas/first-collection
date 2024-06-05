import React from "react";
import PageWrapper from "./components/PageWrapper";
import Image from "next/image";
import Logo from "../../public/logo.svg";

const loading = () => {
  return (
    <PageWrapper>
      <div className="h-screen flex justify-center items-center">
        <Image
          className="animate-pulse [animation-delay:.7s] brightness-50 invert"
          src="/logo.svg"
          width={120}
          height={120}
          alt="Logo"
        />
      </div>
    </PageWrapper>
  );
};

export default loading;

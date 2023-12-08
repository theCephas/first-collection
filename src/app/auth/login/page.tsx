import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <section className="h-[100vh] w-full max-w-[67.5rem] mx-auto grid grid-cols-2 py-6 gap-6">
      <div className="bg-stone-950 rounded-2xl flex justify-end items-center overflow-hidden py-20">
        <Image
          alt=""
          width={1000}
          height={1000}
          className="h-full w-[60%] hue-rotate-[-10deg] saturate-[150%] object-cover rounded-tl-2xl rounded-bl-2xl"
          src="/auth-female.png"
        />
      </div>
      <div>JJJJ</div>
    </section>
  );
};
export default Login;

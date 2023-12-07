import React from "react";
import Logo from "../../../public/logo.svg";
import User from "../../../public/user.svg";
import Cart from "../../../public/cart.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#000] w-[80%] m-auto mt-4 mb-10 p-[16px] flex justify-between itemx-center rounded-[16px] backdrop-blur-[10px] ">
      <Image src={Logo} alt="Logo" width={0} />
      <form className="relative">
        <label className="hidden">Search</label>
        <input
          type="text"
          placeholder="Search for products"
          className="rounded-[6px] outline-none border border-[#b3b3b3] h-[32px] text-[#b3b3b3] bg-[#000] flex py-[8px] px-[12px] items-center gap-[12px] text-[14px] leading-[20.3px] pl-6 "
        />
        <button
          type="submit"
          aria-label="Submit-search"
          className="absolute left-2 top-[30%]"
        >
          <svg
            fill="none"
            viewBox="0 0 13 14"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Search-Icon"
          >
            <path
              clip-rule="evenodd"
              d="m8.82264 10.3833c-.92307.7008-2.07429 1.1167-3.32264 1.1167-3.03757 0-5.5-2.46243-5.5-5.5s2.46243-5.5 5.5-5.5 5.5 2.46243 5.5 5.5c0 1.24835-.4159 2.39957-1.1167 3.32264l2.897 2.89706c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0zm.67736-4.3833c0 2.20914-1.79086 4-4 4s-4-1.79086-4-4 1.79086-4 4-4 4 1.79086 4 4z"
              fill="#B5B5B5"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </form>
      <div className="text-[14px] font-[600] items-center justify-center text-[#b3b3b3] flex gap-6">
        <Link href="/">Products</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Image src={User} alt="User icon" />
        <Image src={Cart} alt="Cart icon" />
      </div>
    </div>
  );
};

export default Header;

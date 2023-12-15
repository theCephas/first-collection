"use client";

import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import User from "../../../public/user.svg";
import Cart from "../../../public/cart.svg";
import Search from "../../../public/search.svg";
import Image from "next/image";
import Link from "next/link";
import "../../../src/fonts.css";
import { ChevronDown, ChevronUp, AlignJustify, X } from "lucide-react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

const Header = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <div className="pt-4 gilroy w-full">
      <div className="bg-[#000] p-[16px] flex justify-between items-center rounded-[16px] backdrop-blur-[10px] pt-4 max-w-[67.5rem] mx-4 lg:mx-auto ">
        <Link
          href="/"
          // className={`${isSearchOpen ? "hidden sm:flex" : "flex"}`}
        >
          <Image src={Logo} alt="Logo" width={0} />
        </Link>
        <form className="relative hidden md:flex">
          <label className="hidden">Search</label>
          <input
            type="text"
            placeholder="Search for products"
            className="rounded-[6px] outline-none border border-[#b3b3b3] md:w-[358px] text-[#b3b3b3] bg-[#000] flex pt-[10px] pb-[8px] px-[12px] items-center justify-center gap-[12px] text-[14px] leading-[20.3px] pl-10 "
          />
          <button
            type="submit"
            aria-label="Submit-search"
            className="absolute left-3 top-[29%]"
          >
            <svg
              fill="none"
              viewBox="0 0 13 14"
              width="20"
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Search-Icon"
            >
              <path
                clipRule="evenodd"
                d="m8.82264 10.3833c-.92307.7008-2.07429 1.1167-3.32264 1.1167-3.03757 0-5.5-2.46243-5.5-5.5s2.46243-5.5 5.5-5.5 5.5 2.46243 5.5 5.5c0 1.24835-.4159 2.39957-1.1167 3.32264l2.897 2.89706c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0zm.67736-4.3833c0 2.20914-1.79086 4-4 4s-4-1.79086-4-4 1.79086-4 4-4 4 1.79086 4 4z"
                fill="#B5B5B5"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </form>
        <div className="text-[14px] font-[600] hidden items-center justify-center text-[#b3b3b3] md:flex gap-6">
          <Link
            href="/products"
            className="focus:text-[#ff5c00] active:text-[#ff5c00] active:scale-75 transform"
          >
            Products
          </Link>
          <Link
            href="/contact-us"
            className="focus:text-[#ff5c00] active:scale-75 transform"
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center gap-6">
          <Link href="/profiles">
            <Image src={User} alt="User icon" />
          </Link>
          <Image src={Cart} alt="Cart icon" />
        </div>

        <div className="relative z-50 flex gap-3 items-center md:hidden">
          <button
            onClick={() => setSearchOpen(!isSearchOpen)}
            className={`${isSearchOpen ? "hidden" : "flex"}`}
          >
            <Image width={0} height={0} src={Search} alt="Seach Icon" />
          </button>
          {isSearchOpen && (
            <div className="flex gap-4 items-center">
              <form className="relative z-40">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="rounded-[6px] outline-none border border-[#b3b3b3] md:w-[358px] text-[#b3b3b3] bg-[#000] flex pt-[8px] pb-[8px] px-[12px] items-center justify-center gap-[12px] text-[14px] leading-[20.3px] pl-10 "
                />
                <button
                  type="submit"
                  aria-label="Submit-search"
                  className="absolute left-3 top-[30%]"
                >
                  <svg
                    fill="none"
                    viewBox="0 0 13 14"
                    width="16"
                    height={16}
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Search-Icon"
                  >
                    <path
                      clipRule="evenodd"
                      d="m8.82264 10.3833c-.92307.7008-2.07429 1.1167-3.32264 1.1167-3.03757 0-5.5-2.46243-5.5-5.5s2.46243-5.5 5.5-5.5 5.5 2.46243 5.5 5.5c0 1.24835-.4159 2.39957-1.1167 3.32264l2.897 2.89706c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0zm.67736-4.3833c0 2.20914-1.79086 4-4 4s-4-1.79086-4-4 1.79086-4 4-4 4 1.79086 4 4z"
                      fill="#B5B5B5"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className="absolute right-2 top-[25%] cursor-pointer "
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="w-[20px] h-[20px] text-[#b3b3b3] z-40 bg-[#040404] " />
                </div>
              </form>
            </div>
          )}
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            className="flex flex-col space-y-[5px]"
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7 },
              }}
              className="w-5 h-[2px] bg-[#b3b3b3] block rounded-full"
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-[2px] bg-[#b3b3b3] block rounded-full"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              className="w-5 h-[2px] bg-[#b3b3b3] block rounded-full"
            ></motion.span>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0,
            }}
          >
            <motion.div
              variants={{
                open: {
                  x: "70%",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "200%",
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    when: "afterChildren",
                  },
                },
              }}
              animate="open"
              initial="closed"
              exit="closed"
              className="fixed z-50 inset-0 bg-white w-[80%] h-screen"
            >
              <button
                onClick={() => toggleMobileNav()}
                className="mt-8  ml-[130px] sm:ml-[230px]"
              >
                <X />
              </button>
              <motion.div className="px-8">
                {" "}
                <div className="flex flex-col gap-8 mt-10 font-[600] text-[14px] leading-[20.3px] ">
                  <Link
                    href="/products"
                    className="focus:text-[#ff5c00] hover:text-[#ff5c00] duration-700"
                  >
                    Products
                  </Link>
                  <Link
                    href="/contact-us"
                    className="focus:text-[#ff5c00] hover:text-[#ff5c00] duration-700"
                  >
                    Contact Us
                  </Link>
                  <div
                    className="cursor-pointer duration-700 text-[#060606] focus:text-[#ff5c00] "
                    onClick={() => setIsDropDownVisible(!isDropDownVisible)}
                  >
                    <p>
                      Account
                      {isDropDownVisible ? (
                        <ChevronUp className="inline mb-[1px]" />
                      ) : (
                        <ChevronDown className="inline mb-[1px]" />
                      )}
                    </p>

                    {isDropDownVisible && (
                      <AnimatePresence>
                        <motion.div
                          variants={{
                            open: {
                              opacity: 1,
                              transition: {
                                duration: 0.2,
                                ease: "easeInOut",
                              },
                            },
                            closed: {
                              opacity: 0,
                              transition: {
                                duration: 0.2,
                                ease: "easeInOut",
                              },
                            },
                          }}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          className="flex flex-col gap-4 bg-white text-[#060606] text-[14px] rounded-[8px] focus:text-[#ff5c00] my-6"
                        >
                          <Link
                            className="focus:text-[#ff5c00] px-10 sm:px-20 "
                            href="/profiles/profile"
                          >
                            Profile
                          </Link>
                          <Link
                            className="focus:text-[#ff5c00] px-10 sm:px-20 "
                            href=""
                          >
                            Orders
                          </Link>
                          <Link
                            href="/auth/get-started"
                            className=" w-[90px] sm:w-[120px] py-[12px] text-center mx-5 sm:mx-10 px-[16px] gap-2 bg-[#040404] hover:bg-[#242323] duration-700 rounded-[8px] text-[#f2f2f2] "
                          >
                            Sign In
                          </Link>
                          <Link
                            href=""
                            className=" w-[90px] sm:w-[120px] py-[12px] text-center mx-5 sm:mx-10 px-[16px] gap-2 rounded-[8px] hover:bg-[#d42620] hover:text-white duration-700 text-[#d42620] border border-[#d42620] "
                          >
                            Logout
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                  <Link
                    href="/"
                    className="focus:text-[#ff5c00] hover:text-[#ff5c00] duration-700"
                  >
                    Cart
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

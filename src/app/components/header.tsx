"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../../public/logo.svg";
import User from "../../../public/user.svg";
import Cart from "../../../public/cart.svg";
import Search from "../../../public/search.svg";
import Image from "next/image";
import Link from "next/link";
import "../../../src/fonts.css";
import { ChevronDown, ChevronUp, AlignJustify, X } from "lucide-react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { SearchResults } from "./SearchResults";
import CartComponent from "./Cart";
import { useRouter } from "next/navigation";
import { clearCookie, getToken } from "../Helpers/Helpers";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";

const Header = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();
  const [isActive, setIsActive] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { token } = getToken();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [token]);

  useEffect(() => {
    if (window.location.pathname.includes("contact")) {
      setIsActive("contact");
    } else if (window.location.pathname.includes("product")) {
      setIsActive("products");
    }
  }, []);

  const handleLogout = () => {
    Confirm.show(
      "Confirm Logout",
      "Are you sure you want want to logout?",
      "Yes",
      "No",
      () => {
        clearCookie();
        router.push("/auth/login");
      },
      () => {
        return;
      },
      {
        titleColor: "#d42620",
        okButtonBackground: "#d42620",
      }
    );
  };

  return (
    <div className="pt-4 gilroy w-full relative z-50">
      <div className="bg-[#000] p-[16px] flex justify-between items-center rounded-[16px] backdrop-blur-[10px] pt-4 max-w-[67.5rem] mx-4 lg:mx-auto">
        <Link
          href="/"
          // className={`${isSearchOpen ? "hidden sm:flex" : "flex"}`}
        >
          <Image src={Logo} alt="Logo" width={0} />
        </Link>
        <form className="relative hidden md:flex">
          <label className="hidden">Search</label>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Search for products"
            className="rounded-[6px] outline-none border border-[#b3b3b3] md:w-[358px] text-[#b3b3b3] bg-[#000] flex pt-[10px] pb-[8px] px-[12px] items-center justify-center gap-[12px] text-[14px] leading-[20.3px] pl-10 focus:border-orange-600"
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
        <div className="text-[14px] font-[600] hidden items-center justify-center text-[#b3b3b3] lg:flex gap-6">
          <Link
            href="/products"
            className={`focus:text-[#ff5c00] ${
              isActive === "products" ? "text-[#ff5c00]" : "text-[#b3b3b3]"
            } active:scale-75 transform`}
          >
            Products
          </Link>

          <Link
            href="/contact-us"
            className={`focus:text-[#ff5c00] ${
              isActive === "contact" ? "text-[#ff5c00]" : "text-[#b3b3b3]"
            } active:scale-75 transform`}
          >
            Contact Us
          </Link>
        </div>

        {!isAuthenticated && (
          <Link
            href="/auth/login"
            className="hidden lg:block text-center text-[#f2f2f2] "
          >
            Sign In
          </Link>
        )}

        {isAuthenticated && (
          <div className="hidden lg:flex items-center justify-center gap-6">
            <div
              className="relative z-50"
              onClick={() => setIsDropDownVisible(true)}
              // onMouseLeave={() => setIsDropDownVisible(false)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer fill-[#b3b3b3] focus:fill-[#ff5c00]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.66669C7.69885 1.66669 5.83337 3.53217 5.83337 5.83335C5.83337 8.13454 7.69885 10 10 10C12.3012 10 14.1667 8.13454 14.1667 5.83335C14.1667 3.53217 12.3012 1.66669 10 1.66669ZM7.50004 5.83335C7.50004 4.45264 8.61933 3.33335 10 3.33335C11.3808 3.33335 12.5 4.45264 12.5 5.83335C12.5 7.21407 11.3808 8.33335 10 8.33335C8.61933 8.33335 7.50004 7.21407 7.50004 5.83335Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 19.1667C8.71629 19.1667 6.85822 18.8752 5.4629 18.2645C4.7779 17.9647 4.08125 17.5356 3.6765 16.9145C3.46364 16.5879 3.32907 16.2031 3.33348 15.7735C3.33785 15.3479 3.47791 14.9401 3.7133 14.5607C4.85447 12.7214 7.18903 10.8334 10 10.8334C12.811 10.8334 15.1456 12.7214 16.2868 14.5607C16.5222 14.9401 16.6622 15.3479 16.6666 15.7735C16.671 16.2031 16.5364 16.5879 16.3236 16.9145C15.9188 17.5356 15.2222 17.9647 14.5372 18.2645C13.1419 18.8752 11.2838 19.1667 10 19.1667ZM5.12953 15.4394C5.01981 15.6162 5.00068 15.7298 5.00006 15.7906C4.99947 15.8476 5.01409 15.9144 5.07284 16.0046C5.21132 16.2171 5.5476 16.4823 6.13114 16.7377C7.27291 17.2374 8.8944 17.5 10 17.5C11.1057 17.5 12.7272 17.2374 13.8689 16.7377C14.4525 16.4823 14.7888 16.2171 14.9272 16.0046C14.986 15.9144 15.0006 15.8476 15 15.7906C14.9994 15.7298 14.9803 15.6162 14.8705 15.4394C13.9354 13.9321 12.0703 12.5 10 12.5C7.92976 12.5 6.06466 13.9321 5.12953 15.4394Z"
                />
              </svg>

              {/* {isDropDownVisible && ( */}
              <div
                onMouseLeave={() => setIsDropDownVisible(false)}
                className={`absolute p-4 -right-full z-50 bg-white rounded-[8px] top-5 w-[16rem] shadow flex-col items-end ${
                  isDropDownVisible ? "flex" : "hidden"
                }`}
              >
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
                    className="w-full flex flex-col gap-4 items-center  relative z-50 text-[#060606] text-[14px]  focus:text-[#ff5c00]"
                  >
                    <Link
                      className="focus:text-[#ff5c00] py-3 px-10 sm:px-20 "
                      href="/profiles/profile"
                    >
                      Profile
                    </Link>

                    <Link
                      className="focus:text-[#ff5c00] py-3 px-10 sm:px-20 "
                      href="/orders/ongoing-orders"
                    >
                      Orders
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                      }}
                      className=" w-full py-[12px] text-center mx-5 sm:mx-10 px-[16px] gap-2 rounded-[8px] hover:bg-[#d42620] hover:text-white duration-700 text-[#d42620] border border-[#d42620] "
                    >
                      Logout
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* )} */}
            </div>

            <Image
              className="cursor-pointer"
              onClick={() => setShowCart(true)}
              src={Cart}
              alt="Cart icon"
            />
          </div>
        )}

        <div className="relative z-50 flex gap-3 items-center lg:hidden">
          {!isSearchOpen && (
            <button
              onClick={() => setSearchOpen(!isSearchOpen)}
              className={`md:hidden flex`}
            >
              <Image width={0} height={0} src={Search} alt="Seach Icon" />
            </button>
          )}
          {isSearchOpen && (
            <div className="flex gap-4 items-center">
              <form className="relative z-40">
                <input
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  type="text"
                  placeholder="Search for products"
                  className="rounded-[6px] outline-none border border-[#b3b3b3] md:w-[358px] text-[#b3b3b3] bg-[#000] flex pt-[8px] pb-[8px] px-[12px] items-center justify-center gap-[12px] text-[14px] leading-[20.3px] pl-10 focus:border-orange-600"
                  autoFocus
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
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
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
                  x: "50%",
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
              className="fixed z-50 inset-0 bg-white h-screen"
            >
              <button
                onClick={() => toggleMobileNav()}
                // className="mt-8  ml-[130px] sm:ml-[230px]"
                className="mt-8 relative left-[40%] md:left-[45%] z-100"
              >
                <X />
              </button>
              <motion.div className="px-8">
                {" "}
                <div className="flex flex-col gap-8 mt-10 font-[600] text-[14px] leading-[20.3px] ">
                  <Link
                    href="/products"
                    className={`focus:text-[#ff5c00] hover:text-[#ff5c00] duration-700 ${
                      isActive === "products"
                        ? "text-[#ff5c00]"
                        : "text-[#060606]"
                    }`}
                  >
                    Products
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`focus:text-[#ff5c00] hover:text-[#ff5c00] duration-700 ${
                      isActive === "contact"
                        ? "text-[#ff5c00]"
                        : "text-[#060606]"
                    }`}
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
                          {isAuthenticated && (
                            <Link
                              className="focus:text-[#ff5c00] px-10 sm:px-20 "
                              href="/profiles/profile"
                            >
                              Profile
                            </Link>
                          )}
                          {isAuthenticated && (
                            <Link
                              className="focus:text-[#ff5c00] px-10 sm:px-20 "
                              href="/orders/ongoing-orders"
                            >
                              Orders
                            </Link>
                          )}
                          {!isAuthenticated && (
                            <Link
                              href="/auth/login"
                              className=" w-[90px] sm:w-[120px] py-[12px] text-center sm:mx-10 px-[16px] gap-2 bg-[#040404] hover:bg-[#242323] duration-700 rounded-[8px] text-[#f2f2f2] "
                            >
                              Sign In
                            </Link>
                          )}
                          {isAuthenticated && (
                            <button
                              onClick={() => {
                                // clearCookie();
                                // router.push("/auth/login");
                                handleLogout();
                              }}
                              className=" w-[90px] sm:w-[120px] py-[12px] text-center mx-5 sm:mx-10 px-[16px] gap-2 rounded-[8px] hover:bg-[#d42620] hover:text-white duration-700 text-[#d42620] border border-[#d42620] "
                            >
                              Logout
                            </button>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                  {isAuthenticated && (
                    <p
                      onClick={() => {
                        toggleMobileNav();
                        setShowCart(true);
                      }}
                      className="focus:text-[#ff5c00] hover:text-[#ff5c00] duration-700"
                    >
                      Cart
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
      {searchQuery.length > 0 && <SearchResults />}
      {showCart && <CartComponent close={() => setShowCart(false)} />}
    </div>
  );
};

export default Header;

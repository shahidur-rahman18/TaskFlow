"use client";
import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Moon, Sun } from "lucide-react";

type Props ={
    openNav:()=>void
}
const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || (!storedTheme && prefersDark);
  });

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white shadow-md" : "fixed "
      } duration-200 h-[12vh] z-100 fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto ">
        <Logo />
        <div className="hidden lg:flex items-center space-x-10 ">
          {NAVLINKS.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-black hover:text-red-600 font-medium transition-all duration-200 "
              >
                <p>{link.label} </p>
              </Link>
            );
          })}
        </div>
        {/* Button  */}
        <div className="flex items-center space-x-4 ">
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-200 border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          {/* Get Started Button  */}
          <Link
            href="/login"
            className="hidden md:block px-6 py-3 rounded-full font-semibold text-sm text-center transition-all duration-200 bg-red-600 text-white hover:bg-red-800"
          >
            Login
          </Link>
          <button className="hidden md:block px-6 py-3 rounded-full font-semibold text-sm cursor-pointer hover:bg-red-800 transition-all duration-200 bg-red-600 text-white">
            SignUp
          </button>
          {/* Burger Menu  */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-black lg:hidden " />
        </div>
      </div>

    </div>
  );
};

export default Nav;

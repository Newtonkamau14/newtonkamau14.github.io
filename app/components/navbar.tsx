"use client";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import ThemeToggle from "./theme-toggle";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "h-20 w-full fixed top-0 left-0 right-0 z-10 bg-light1 dark:bg-dark1 transition-all duration-300",
        { "border-b-0 border-gray-50 dark:border-[#333333] shadow-md": scrolled }
      )}
    >
      <div className="flex justify-between items-center h-full px-6 lg:w-3/5 lg:mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Newton Kamau
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-row gap-4 items-center">
          <a
            href="mailto:newtonkamau14@gmail.com"
            className="bg-lightorange px-4 py-2 rounded-md font-semibold flex items-center gap-2 text-lg text-black"
            target="_blank"
          >
            Get in touch
            <MdOutlineEmail size={20} />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </button>
      </div> 
       {/* Mobile Navigation Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Navigation Menu */}
        <div
          className={clsx(
            "fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-light1 dark:bg-dark1 shadow-lg p-6 z-30 transition-transform duration-300",
            { "translate-x-0": menuOpen, "translate-x-full": !menuOpen }
          )}
        >
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <RiCloseLargeFill />
          </button>

          <ul className="mt-16 space-y-6 text-xl font-medium text-black dark:text-white">
            {/* <li>
              <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li> */}
            <li>
              <a
                href="mailto:newtonkamau14@gmail.com"
                className="bg-lightorange px-4 py-2 rounded-md font-semibold flex items-center gap-2 text-lg text-black"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
                <MdOutlineEmail size={20} />
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>

    </nav>
  );
}

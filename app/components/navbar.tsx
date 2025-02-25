"use client";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import ThemeToggle from "./theme-toggle";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`h-20 `}
    >
      <ul className="flex justify-between items-center h-full">
        <li className="text-2xl font-bold">
          <Link href="/">Newton Kamau</Link>
        </li>

        <div className="flex flex-row gap-4 items-center mr-3">
          <li>
            <a
              href="mailto:newtonkamau14@gmail.com"
              className="bg-lightorange px-4 py-2 rounded-md font-semibold w-fit flex items-center gap-2 text-lg text-black"
              target="_blank"
            >
              Get in touch
              <MdOutlineEmail size={20} />
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </div>
      </ul>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          trung-tin-dev
        </Link>
        <ThemeToggle />

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="
relative
text-zinc-400
transition-all
duration-300
hover:text-white
after:absolute
after:-bottom-1
after:left-0
after:h-px
after:w-0
after:bg-white
after:transition-all
after:duration-300
hover:after:w-full
"
          >
            About
          </a>

          <a
            href="#work"
            className="
relative
text-zinc-400
transition-all
duration-300
hover:text-white
after:absolute
after:-bottom-1
after:left-0
after:h-px
after:w-0
after:bg-white
after:transition-all
after:duration-300
hover:after:w-full
"
          >
            Work
          </a>

          <a
            href="#contact"
            className="
relative
text-zinc-400
transition-all
duration-300
hover:text-white
after:absolute
after:-bottom-1
after:left-0
after:h-px
after:w-0
after:bg-white
after:transition-all
after:duration-300
hover:after:w-full
"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

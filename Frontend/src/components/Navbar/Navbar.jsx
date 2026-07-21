import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }
    `}
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        justify-between
        items-center
      "
      >
        <Logo />

        <DesktopMenu />

        <button
          className="
          hidden
          lg:block
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-full
        "
        >
          Get Started
        </button>

        <button
          className="lg:hidden text-2xl"
          onClick={() =>
            setOpen(!open)
          }
        >
          {open ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </div>

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
    </header>
  );
}

export default Navbar;
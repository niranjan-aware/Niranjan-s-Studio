import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>
      <header aria-label="Main navigation" className="w-screen flex items-center justify-center xs:p-2 ">
        <nav
          aria-label="Primary"
          className="container flex flex-row items-center justify-between h-16 max-w-7xl"
        >
          <a href="/" className="logo">
            <img
              src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/Niranjan_s_Studio_u0xrmm.svg"
              alt="Niranjan's Studio Logo"
              width="160"
              height="40"
            />
          </a>
          <div className="flex items-center md:space-x-5 xs:space-x-2">
            <Link to="contact" smooth={true} duration={1500} aria-label="Scroll to contact section">
              <button
                type="button"
                className="hire text-white xs:px-4 xs:py-2 md:px-6 md:py-3 hover:text-[#222831] hover:bg-white rounded-full transition-all duration-500 ease-in-out border-2 border-teal hover:border-white shadow-lg hover:shadow-teal/30 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-teal/50"
              >
                Hire Me
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

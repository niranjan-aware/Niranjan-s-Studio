import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="nav w-screen flex items-center justify-center xs:p-2">
      <nav className="nav container flex flex-row items-center justify-between h-16  max-w-7xl">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/Niranjan_s_Studio_u0xrmm.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav-list flex flex-row items-center md:space-x-5 xs:space-x-2">
          <div className="hire-me">
            <Link to="contact" smooth={true} duration={1500}>
              <button className="hire text-white xs:px-4 xs:py-2 md:px-6 md:py-3 hover:text-[#222831] hover:bg-white rounded-full transition-all duration-500 ease-in-out border-2 border-teal hover:border-white shadow-lg hover:shadow-teal/30 hover:scale-105 transform">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

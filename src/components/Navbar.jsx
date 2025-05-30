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
          {/* <div className="contact text-white group">
            <a href="#">Contact Me</a>
            <div className="mx-2 h-1 border-b border-transparent group-hover:border-slate-200 transition-all duration-300"></div>
          </div> */}

          <div className="hire-me">
            <Link to="contact" smooth={true} duration={1500}>
              <button className="hire text-white xs:px-2 xs:py-1 md:px-4 md:py-2 hover:text-[#222831] hover:bg-white rounded-3xl   transition-colors duration-1000 ease-in-out border-[1px] border-slate-600 hover:border-none  shadow-white">
                HireMe
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

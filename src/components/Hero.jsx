import React from "react";
import { TbFileDownload } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="hero-container min-h-screen relative max-w-7xl flex xs:flex-col xs:space-y-10 space-y-0 sm:flex-row-reverse md:h-screen items-center justify-evenly  mx-auto ">
      <div className="hero-bg-img xs:w-80 xs:h-80 md:w-auto md:h-auto drop-shadow-2xl shadow-white">
        <img
          src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574165/hero-bg_ca5plg.svg"
          alt="HeroBG"
        />
      </div>

      <div className="title space-y-5">
        <div className="headings xs:-space-y-2 -space-y-4">
          <h1 className="heading xs:text-4xl md:text-6xl lg:text-7xl xl:text-8xlfont-bold text-white">
            CREATIVE
          </h1>
          <h1 className="heading xs:text-4xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-teal">
            UI DESIGNER
          </h1>
        </div>

        <div className="contact-btn font-semibold xs:font-normal flex flex-row xs:space-x-4 md:space-x-8">
          <div className="hire-me">
            <Link to="contact" smooth={true} duration={1500}>
              <button className="hire text-white xs:px-2 xs:py-1 md:px-4 md:py-2 hover:text-[#222831] hover:bg-white rounded-3xl   transition-colors duration-1000 ease-in-out border-[1px] border-slate-600 hover:border-none  shadow-white">
                HireMe
              </button>
            </Link>
          </div>

          <div className="download-btn flex items-center xs:px-3 xs:py-1 md:space-x-2 md:px-6 md:py-2 bg-slate-500 bg-opacity-25 rounded-3xl text-white hover:text-teal hover:bg-opacity-50 transition-all duration-300 border-[1px] border-slate-600 hover:border-none">
            <a
              href="https://drive.google.com/file/d/1h-t8OZRFY9EoZfxaAmjeibghVKW0Av7A/view?usp=sharing"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Cv
            </a>
            <TbFileDownload className="" />
          </div>
        </div>
      </div>

      <div className="social-media-btn absolute xs:bottom-40 xs:right-5  md:bottom-52 md:right-5 flex flex-col items-center justify-center space-y-4">
        <a
          href="https://www.linkedin.com/in/niranjan-aware-673019211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="md:w-10 md:h-10 xs:w-8 xs:h-8 text-white hover:text-teal transition-colors duration-300" />
        </a>
        <a
          href="mailto:niranjanaware26@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail className="md:w-9 md:h-9 xs:w-7 xs:h-7 text-white hover:text-teal transition-colors duration-300" />
        </a>
        <a
          href="https://github.com/niranjan-aware"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="md:w-10 md:h-10 xs:w-8 xs:h-8 text-white hover:text-teal transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

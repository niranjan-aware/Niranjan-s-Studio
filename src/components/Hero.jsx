import React from "react";
import { TbFileDownload } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section aria-label="Hero section" className="hero-container min-h-screen relative max-w-7xl flex xs:flex-col xs:space-y-10 space-y-0 md:flex-row-reverse md:h-screen items-center justify-evenly mx-auto">
      <div className="hero-bg-img xs:w-80 xs:h-80 md:w-auto md:h-auto drop-shadow-2xl shadow-white">
        <img
          src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574165/hero-bg_ca5plg.svg"
          alt="Illustration of developer workspace"
          width="400"
          height="400"
          loading="lazy"
        />
      </div>
      <div className="title space-y-6">
        <div className="greeting-section space-y-3">
          <div className="welcome-text">
            <p className="xs:text-base md:text-lg text-slate-300 font-medium">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-teal to-cyan-400 bg-clip-text text-transparent font-bold">
                Niranjan's Studio
              </span>
            </p>
          </div>
        </div>
        <div className="headings space-y-2">
          <h1 className="heading xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            BUILDING EXPERIENCES
          </h1>
          <h2 className="heading xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold text-teal leading-tight">
            WITH CODE & DESIGN
          </h2>
        </div>
        <div className="contact-btn font-semibold xs:font-normal flex flex-row xs:space-x-4 md:space-x-8 pt-4">
          <Link to="contact" smooth={true} duration={1500}>
            <button type="button" className="hire text-white xs:px-4 xs:py-2 md:px-6 md:py-3 hover:text-[#222831] hover:bg-white rounded-full transition-all duration-500 ease-in-out border-2 border-teal hover:border-white shadow-lg hover:shadow-teal/30 hover:scale-105 transform">
              Hire Me
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1h-t8OZRFY9EoZfxaAmjeibghVKW0Av7A/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Niranjan’s CV"
            className="download-btn group flex items-center xs:px-4 xs:py-2 md:space-x-2 md:px-6 md:py-3 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full text-white hover:text-teal hover:from-teal/20 hover:to-cyan-400/20 transition-all duration-500 border-2 border-slate-600 hover:border-teal/50 shadow-lg hover:shadow-teal/20 hover:scale-105 transform"
          >
            <span>Download CV</span>
            <TbFileDownload className="group-hover:animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="social-media-btn absolute xs:bottom-44 xs:right-5 sm:bottom-72 sm:right-5 md:bottom-52 md:right-5 flex flex-col items-center justify-center space-y-6">
        <div className="social-line w-px h-20 bg-gradient-to-t from-teal to-transparent"></div>
        <a
          href="https://www.linkedin.com/in/niranjan-aware-673019211/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="social-icon group"
        >
          <FaLinkedin className="md:w-10 md:h-10 xs:w-8 xs:h-8 text-white hover:text-blue-400 transition-all duration-300 group-hover:scale-110 transform" aria-hidden="true" />
        </a>
        <a
          href="mailto:niranjanaware26@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
          className="social-icon group"
        >
          <SiGmail className="md:w-9 md:h-9 xs:w-7 xs:h-7 text-white hover:text-red-400 transition-all duration-300 group-hover:scale-110 transform" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/niranjan-aware"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="social-icon group"
        >
          <FaGithubSquare className="md:w-10 md:h-10 xs:w-8 xs:h-8 text-white hover:text-purple-400 transition-all duration-300 group-hover:scale-110 transform" aria-hidden="true" />
        </a>
        <div className="social-line w-px h-20 bg-gradient-to-b from-teal to-transparent"></div>
      </div>
    </section>
  );
}

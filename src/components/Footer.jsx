import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
export default function Footer() {
  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:niranjanaware26@gmail.com',
      icon: SiGmail,
      label: 'niranjanaware26@gmail.com'
    },
    {
      name: 'Phone',
      url: 'tel:+919588699615',
      icon: FaPhoneSquareAlt,
      label: '+91 9588699615'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/niranjan-aware',
      icon: FaGithubSquare,
      label: 'niranjan-aware'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/niranjan-aware-673019211/',
      icon: FaLinkedin,
      label: 'niranjan-aware-673019211'
    }
  ];

  const codingProfiles = [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/NiranjanAware26',
      label: 'NiranjanAware26'
    },
    {
      name: 'CodeChef',
      url: 'https://codechef.com/users/niranjanaware',
      label: 'niranjanaware'
    }
  ];
// bg-gradient-to-b from-gray-900 to-black border-t border-gray-800
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#caf0f8] via-[#90e0ef] to-[#00b4d8] rounded-xl mb-4">
            <span className="text-xl font-bold text-slate-700">NA</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Niranjan Aware</h3>
          {/* <p className="text-gray-400 text-sm max-w-md mx-auto">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Primary Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact</h4>
            <div className="space-y-2">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>


          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Coding Profiles</h4>
            <div className="space-y-2">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    {profile.name === 'LeetCode' ? (
                      <FaCode className="w-4 h-4" />
                    ) : (
                      <GiTrophy className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-sm">
                    <span className="font-medium">{profile.name}:</span> {profile.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>©  Niranjan Aware.</span>
            <span className="hidden md:inline">Built with passion & React. <span className="text-red-400 animate-pulse">♥</span></span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
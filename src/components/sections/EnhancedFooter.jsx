// src/components/sections/EnhancedFooter.jsx
import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import GlassCard from '../common/GlassCard';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import { useIntersection } from '../../hooks/useIntersection';
import { 
  ArrowUp, Heart, Code, Coffee, Zap, 
  MapPin, Mail, Phone, ExternalLink 
} from 'lucide-react';

export default function EnhancedFooter() {
  const { elementRef, hasIntersected } = useIntersection();

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:niranjanaware26@gmail.com",
      icon: SiGmail,
      label: "niranjanaware26@gmail.com",
      color: "hover:text-red-500",
      followers: "Direct Contact"
    },
    {
      name: "GitHub",
      url: "https://github.com/niranjan-aware",
      icon: FaGithubSquare,
      label: "niranjan-aware",
      color: "hover:text-purple-500",
      followers: "50+ Repositories"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/niranjan-aware-673019211/",
      icon: FaLinkedin,
      label: "niranjan-aware-673019211",
      color: "hover:text-blue-500",
      followers: "500+ Connections"
    },
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/NiranjanAware26",
      label: "NiranjanAware26",
      icon: Code,
      stats: "200+ Problems Solved"
    },
    {
      name: "CodeChef",
      url: "https://codechef.com/users/niranjanaware",
      label: "niranjanaware",
      icon: GiTrophy,
      stats: "Contest Participant"
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer 
      ref={elementRef}
      className="relative bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <FloatingElements count={8} />
        <div className="absolute inset-0 bg-gradient-to-t from-light-primary/5 to-transparent dark:from-dark-primary/5 dark:to-transparent" />
        
        <ParallaxContainer speed={0.1} className="absolute top-10 right-20">
          <div className="w-24 h-24 bg-gradient-to-br from-light-accent/10 to-orange-500/10 dark:from-dark-accent/10 dark:to-orange-400/10 rounded-full blur-2xl"></div>
        </ParallaxContainer>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className={`lg:col-span-4 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <GlassCard className="p-6 h-full" variant="subtle">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                    Niranjan Aware
                  </h3>
                  <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                    Full Stack Developer
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-light-text-muted dark:text-dark-text-muted mb-6 leading-relaxed">
                Passionate about creating scalable web solutions using modern technologies. 
                Always exploring new frameworks and building innovative applications.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 glass rounded-xl">
                  <div className="text-2xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-xs text-light-text-muted dark:text-dark-text-muted">
                    Projects
                  </div>
                </div>
                <div className="text-center p-3 glass rounded-xl">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-xs text-light-text-muted dark:text-dark-text-muted">
                    Years Exp
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Quick Links */}
          <div className={`lg:col-span-2 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '100ms' }}>
            <div className="h-full">
              <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-light-primary dark:text-dark-primary" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-light-text-muted dark:text-dark-text-muted hover:text-light-primary dark:hover:text-dark-primary 
                             transition-all duration-300 hover:translate-x-2 text-left group"
                  >
                    <span className="border-b border-transparent group-hover:border-light-primary dark:group-hover:border-dark-primary">
                      {link.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`lg:col-span-3 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '200ms' }}>
            <div className="h-full">
              <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-light-primary dark:text-dark-primary" />
                Get in Touch
              </h4>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-light-text-muted dark:text-dark-text-muted hover:text-light-primary dark:hover:text-dark-primary 
                               transition-all duration-300 group hover:translate-x-1"
                    >
                      <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className={`w-4 h-4 ${link.color} transition-colors`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate group-hover:text-light-text dark:group-hover:text-dark-text">
                          {link.name}
                        </div>
                        <div className="text-xs opacity-75">
                          {link.followers}
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className={`lg:col-span-3 ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: '300ms' }}>
            <div className="h-full">
              <h4 className="text-lg font-semibold text-light-text dark:text-dark-text mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-light-primary dark:text-dark-primary" />
                Coding Profiles
              </h4>
              <div className="space-y-4">
                {codingProfiles.map((profile) => {
                  const IconComponent = profile.icon;
                  return (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-light-text-muted dark:text-dark-text-muted hover:text-light-primary dark:hover:text-dark-primary 
                               transition-all duration-300 group hover:translate-x-1"
                    >
                      <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium group-hover:text-light-text dark:group-hover:text-dark-text">
                          {profile.name}
                        </div>
                        <div className="text-xs opacity-75">
                          {profile.stats}
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>

              {/* Current Status */}
              <GlassCard className="mt-6 p-4" variant="subtle">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-light-text dark:text-dark-text">
                      Available
                    </span>
                  </div>
                  <span className="text-xs text-light-text-muted dark:text-dark-text-muted">
                    for projects
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-light-border dark:via-dark-border to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className={`flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          
          {/* Copyright & Credits */}
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-light-text-muted dark:text-dark-text-muted text-sm">
            <div className="flex items-center space-x-2">
              <span>© {currentYear} Niranjan Aware.</span>
              <span className="hidden lg:inline">All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 px-3 py-1 glass rounded-full text-xs">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-light-text-muted dark:text-dark-text-muted">React</span>
            </div>
            <div className="flex items-center space-x-1 px-3 py-1 glass rounded-full text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-light-text-muted dark:text-dark-text-muted">Spring Boot</span>
            </div>
            <div className="flex items-center space-x-1 px-3 py-1 glass rounded-full text-xs">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-light-text-muted dark:text-dark-text-muted">PostgreSQL</span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 glass rounded-full hover:scale-105 transition-all duration-300 
                     hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-muted dark:text-dark-text-muted 
                     hover:text-light-primary dark:hover:text-dark-primary"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Fun Elements */}
        <div className={`mt-12 text-center ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <GlassCard className="inline-flex items-center space-x-4 px-6 py-3" variant="subtle">
            <Coffee className="w-5 h-5 text-light-accent dark:text-dark-accent" />
            <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
              Fueled by coffee and passion for clean code
            </span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-light-primary dark:bg-dark-primary rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-light-primary dark:bg-dark-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-1 h-1 bg-light-primary dark:bg-dark-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Scroll Progress Indicator for Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-light-surface-variant dark:bg-dark-surface-variant">
        <div 
          className="h-full bg-gradient-to-r from-light-primary via-blue-500 to-light-accent dark:from-dark-primary dark:via-blue-400 dark:to-dark-accent transition-all duration-300"
          style={{ width: '100%' }}
        />
      </div>
    </footer>
  );
}
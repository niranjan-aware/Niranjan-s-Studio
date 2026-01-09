// src/components/sections/EnhancedHero.jsx

import React from 'react';
import { TbFileDownload } from "react-icons/tb";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import MagneticButton from '../common/MagneticButton';
import ParallaxContainer from '../common/ParallaxContainer';
import FloatingElements from '../effects/FloatingElements';
import GlassCard from '../common/GlassCard';
import { useIntersection } from '../../hooks/useIntersection';

export default function EnhancedHero() {
  const { elementRef, hasIntersected } = useIntersection();

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/niranjan-aware-673019211/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: SiGmail,
      url: "mailto:niranjanaware26@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      icon: FaGithubSquare,
      url: "https://github.com/niranjan-aware",
      label: "GitHub",
      color: "hover:text-gray-400 dark:hover:text-gray-300"
    }
  ];

  return (
    <section 
      id="home"
      ref={elementRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-primary/5 via-transparent to-light-accent/5 dark:from-dark-primary/5 dark:via-transparent dark:to-dark-accent/5" />
        
        {/* Floating Elements */}
        <FloatingElements count={8} />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Text Content */}
          <div className={`space-y-8 ${hasIntersected ? 'animate-slide-in' : 'opacity-0 -translate-x-20'}`}>
            
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-light-primary/20 dark:border-dark-primary/20">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  Available for new opportunities
                </span>
              </div>
              
              <p className="text-lg text-light-text-muted dark:text-dark-text-muted font-medium">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent font-bold">
                  Niranjan's Studio
                </span>
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-light-text dark:text-dark-text">
                  BUILDING
                </span>
                <span className="block bg-gradient-to-r from-light-primary via-blue-500 to-light-accent dark:from-dark-primary dark:via-blue-400 dark:to-dark-accent bg-clip-text text-transparent">
                  EXPERIENCES
                </span>
                <span className="block text-light-text dark:text-dark-text">
                  WITH CODE & DESIGN
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-light-text-muted dark:text-dark-text-muted max-w-2xl leading-relaxed">
                Full-stack developer passionate about creating scalable, beautiful, and user-centric web applications using modern technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <MagneticButton
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                Let's Collaborate
              </MagneticButton>
              
              <MagneticButton
                onClick={() => window.open('https://drive.google.com/file/d/1h-t8OZRFY9EoZfxaAmjeibghVKW0Av7A/view?usp=sharing', '_blank')}
                variant="secondary"
                size="lg"
              >
                <TbFileDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                  2+
                </div>
                <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Section - Minimalist Rectangle */}
          <div className={`relative flex justify-center lg:justify-end ${hasIntersected ? 'animate-slide-up' : 'opacity-0 translate-y-20'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative">
              
              {/* Main Image Container - Clean Rectangle */}
              <div className="relative group">
                {/* Large dramatic shadow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-light-primary/30 via-blue-500/20 to-light-accent/30 dark:from-dark-primary/30 dark:via-blue-400/20 dark:to-dark-accent/30 rounded-2xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Image wrapper with professional shadow */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-[22rem] lg:h-[30rem] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] transform hover:scale-[1.02] transition-all duration-500">
                  
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10"></div>
                  
                  {/* Professional border */}
                  <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-2xl z-20"></div>
                  
                  {/* Profile Image */}
                  <img
                    src="https://res.cloudinary.com/dlf06uxsc/image/upload/v1748574167/NiranjanSinhagad_jf7vtl.jpg"
                    alt="Niranjan Aware - Full Stack Developer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Corner accent - subtle professional touch */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-light-primary/70 dark:border-dark-primary/90 rounded-tr-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-light-primary/70 dark:border-dark-primary/90 rounded-bl-2xl"></div>
                </div>
              </div>

              {/* Background decorative elements */}
              <ParallaxContainer speed={0.3} className="absolute -z-10 -top-20 -right-20">
                <div className="w-40 h-40 bg-gradient-to-br from-light-accent/10 to-orange-500/10 dark:from-dark-accent/10 dark:to-orange-400/10 rounded-full blur-3xl"></div>
              </ParallaxContainer>
              
              <ParallaxContainer speed={-0.2} className="absolute -z-10 -bottom-20 -left-20">
                <div className="w-32 h-32 bg-gradient-to-br from-light-primary/10 to-blue-500/10 dark:from-dark-primary/10 dark:to-blue-400/10 rounded-full blur-2xl"></div>
              </ParallaxContainer>

              {/* Professional info badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                <div className="glass px-6 py-3 rounded-full border border-light-primary/20 dark:border-dark-primary/20 shadow-lg">
                  <p className="text-sm font-semibold text-light-text dark:text-dark-text whitespace-nowrap">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className={`fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center space-y-6 ${hasIntersected ? 'animate-slide-in' : 'opacity-0 translate-x-20'}`} style={{ animationDelay: '400ms' }}>
        
        {/* Social line */}
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-light-border dark:via-dark-border to-transparent"></div>
        
        {/* Social Icons */}
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`p-3 glass rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${link.color}`}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}
        
        {/* Bottom social line */}
        <div className="w-px h-20 bg-gradient-to-b from-light-border dark:from-dark-border to-transparent"></div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 ${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
        <span className="text-sm text-light-text-muted dark:text-dark-text-muted">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-light-border dark:border-dark-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light-primary dark:bg-dark-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
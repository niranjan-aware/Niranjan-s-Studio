// src/components/navigation/EnhancedNavbar.jsx
import React, { useState, useEffect } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useTheme } from '../../hooks/useTheme';
import MagneticButton from '../common/MagneticButton';
import ThemeToggle from '../common/ThemeToggle';

export default function EnhancedNavbar() {
  const { scrollY, scrollDirection } = useScroll();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hide navbar when scrolling down, show when scrolling up
  const isVisible = scrollDirection === 'up' || scrollY < 50;

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   bg-light-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg z-50
                   transition-all duration-300"
      >
        Skip to main content
      </a>

      {/* Main Navigation */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${scrollY > 50 ? 'glass py-4' : 'bg-transparent py-6'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#home')}
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 bg-clip-text text-transparent">
                    Niranjan's Studio
                  </span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary 
                           transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-light-primary to-blue-500 dark:from-dark-primary dark:to-blue-400 
                                 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <div className="hidden sm:block">
                <MagneticButton
                  onClick={() => scrollToSection('#contact')}
                  variant="primary"
                  size="sm"
                >
                  Let's Talk
                </MagneticButton>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg glass hover:scale-110 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute h-0.5 w-6 bg-light-text dark:bg-dark-text transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-light-text dark:bg-dark-text transform transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-light-text dark:bg-dark-text transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden transition-all duration-500 ease-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="glass-strong mt-4 mx-4 rounded-2xl border border-white/10">
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-light-text dark:text-dark-text 
                           hover:text-light-primary dark:hover:text-dark-primary hover:bg-white/5 
                           rounded-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10">
                <MagneticButton
                  onClick={() => scrollToSection('#contact')}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Let's Talk
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
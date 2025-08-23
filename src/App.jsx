// src/App.jsx
import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

// Enhanced Components
import ScrollProgress from './components/common/ScrollProgress';
import EnhancedNavbar from './components/navigation/EnhancedNavbar';
import EnhancedHero from './components/sections/EnhancedHero';
import EnhancedAbout from './components/sections/EnhancedAbout';
import EnhancedSkills from './components/sections/EnhancedSkills';
import EnhancedProjects from './components/sections/EnhancedProjects';
import EnhancedExperience from './components/sections/EnhancedExperience';
import EnhancedContact from './components/sections/EnhancedContact';
import EnhancedFooter from './components/sections/EnhancedFooter';

export default function App() {
  const { theme } = useTheme(); // still needed so initial load applies

  useEffect(() => {
    // Add loading class to body initially
    document.body.classList.add('loading');
    
    // Remove loading class after a short delay to allow theme to apply
    const timer = setTimeout(() => {
      document.body.classList.remove('loading');
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    // ⚡ Removed `${theme}` here → rely on <html> class only
    <div className="min-h-screen transition-colors duration-500">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <EnhancedNavbar />
      
      {/* Main Content */}
      <main id="main" className="relative">
        <EnhancedHero />
        <EnhancedAbout />
        <EnhancedSkills />
        <EnhancedProjects />
        <EnhancedExperience />
        <EnhancedContact />
      </main>
      
      {/* Footer */}
      <EnhancedFooter />
      
      {/* Custom Cursor (Desktop only) */}
      <CustomCursor />
    </div>
  );
}

// Custom Cursor Component (unchanged)
function CustomCursor() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    let animationId;

    const updateMousePosition = (e) => {
      if (animationId) cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      
      <div className="hidden lg:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
        {/* Main cursor dot */}
        <div
          className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-150 ease-out ${
            isPointer ? 'scale-0' : 'scale-100'
          }`}
          style={{ left: mousePosition.x - 4, top: mousePosition.y - 4 }}
        />
        
        {/* Cursor ring */}
        <div
          className={`absolute border border-white rounded-full transition-all duration-300 ease-out ${
            isPointer ? 'w-16 h-16 border-2 bg-white/10' : 'w-8 h-8 border-1'
          }`}
          style={{
            left: mousePosition.x - (isPointer ? 32 : 16),
            top: mousePosition.y - (isPointer ? 32 : 16),
          }}
        />
      </div>
    </>
  );
}

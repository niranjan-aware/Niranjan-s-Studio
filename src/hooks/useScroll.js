// src/hooks/useScroll.js
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId = null;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(currentScrollY / scrollHeight, 1);
      
      setScrollY(currentScrollY);
      setScrollProgress(progress);
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setIsScrolling(true);
      
      lastScrollY = currentScrollY;
      
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set scrolling to false after 150ms of no scrolling
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return { 
    scrollY, 
    scrollProgress, 
    scrollDirection, 
    isScrolling 
  };
};
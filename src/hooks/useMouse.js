// src/hooks/useMouse.js
import { useState, useEffect } from 'react';

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set moving to false after 100ms of no movement
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return { mousePosition, isMoving };
};
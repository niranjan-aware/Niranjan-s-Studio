// src/components/common/ScrollProgress.jsx
import React from 'react';
import { useScroll } from '../../hooks/useScroll';

export default function ScrollProgress({ className = '' }) {
  const { scrollProgress } = useScroll();

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 h-1 ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-light-primary via-blue-500 to-light-accent dark:from-dark-primary dark:via-blue-400 dark:to-dark-accent transition-all duration-150 ease-out"
        style={{ 
          width: `${scrollProgress * 100}%`,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
        }}
      />
    </div>
  );
}
// src/components/effects/FloatingElements.jsx
import React, { useMemo } from 'react';

export default function FloatingElements({ count = 6, className = '' }) {
  const elements = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20, // 20-80px
      left: Math.random() * 100, // 0-100%
      top: Math.random() * 100, // 0-100%
      animationDelay: Math.random() * 10, // 0-10s
      animationDuration: Math.random() * 10 + 10, // 10-20s
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      shape: Math.random() > 0.5 ? 'circle' : 'square'
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${
            element.shape === 'circle' ? 'rounded-full' : 'rounded-lg rotate-45'
          } bg-gradient-to-br from-light-primary/20 to-blue-500/20 dark:from-dark-primary/20 dark:to-blue-400/20 animate-float`}
          style={{
            width: element.size,
            height: element.size,
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.animationDelay}s`,
            animationDuration: `${element.animationDuration}s`,
            opacity: element.opacity,
          }}
        />
      ))}
    </div>
  );
}
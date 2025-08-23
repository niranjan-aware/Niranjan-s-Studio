// src/components/common/GlassCard.jsx
import React from 'react';
import { useIntersection } from '../../hooks/useIntersection';

export default function GlassCard({ 
  children, 
  className = '', 
  variant = 'default', 
  hover = true,
  animation = 'slide-up',
  delay = 0,
  ...props 
}) {
  const { elementRef, hasIntersected } = useIntersection();

  const variants = {
    default: 'glass',
    strong: 'glass-strong',
    subtle: 'backdrop-blur-sm bg-white/5 border border-white/10',
    dark: 'glass-dark'
  };

  const hoverEffects = hover 
    ? 'hover:scale-[1.02] hover:shadow-glow-sm hover:-translate-y-1 hover:border-white/20' 
    : '';

  const animationClasses = hasIntersected 
    ? `animate-${animation}` 
    : 'opacity-0 translate-y-8';

  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      className={`
        ${variants[variant]}
        ${hoverEffects}
        ${animationClasses}
        rounded-xl lg:rounded-2xl
        transition-all duration-500 ease-out
        ${className}
      `}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
}
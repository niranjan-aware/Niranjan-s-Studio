
import React, { useRef, useEffect, useState } from 'react';
import { useMouse } from '../../hooks/useMouse';

export default function MagneticButton({ 
  children, 
  className = '', 
  strength = 20, 
  onClick,
  variant = 'primary',
  size = 'md',
  ...props 
}) {
  const buttonRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const { mousePosition } = useMouse();

  const variants = {
    primary: 'bg-gradient-to-r from-light-primary to-blue-600 dark:from-dark-primary dark:to-blue-500 text-white hover:shadow-glow',
    secondary: 'glass border-2 border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary hover:bg-light-primary/10 dark:hover:bg-dark-primary/10',
    ghost: 'hover:glass text-light-text dark:text-dark-text hover:scale-105',
    accent: 'bg-gradient-to-r from-light-accent to-orange-500 dark:from-dark-accent dark:to-orange-400 text-white hover:shadow-glow'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  useEffect(() => {
    if (!isHovered || !buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < 100) {
      const factor = (100 - distance) / 100;
      setTransform({
        x: (deltaX * factor * strength) / 100,
        y: (deltaY * factor * strength) / 100,
      });
    } else {
      setTransform({ x: 0, y: 0 });
    }
  }, [mousePosition, isHovered, strength]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-full font-semibold
        transition-all duration-300 ease-out
        transform-gpu
        focus:outline-none focus:ring-2 focus:ring-blue-500/50
        active:scale-95
        flex items-center justify-center gap-2
        ${className}
      `}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
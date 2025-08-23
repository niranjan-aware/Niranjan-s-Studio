// src/components/common/ParallaxContainer.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from '../../hooks/useScroll';

export default function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'vertical',
  ...props 
}) {
  const containerRef = useRef();
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    
    // Calculate if element is in viewport
    const windowHeight = window.innerHeight;
    const isInViewport = (
      elementTop < scrollY + windowHeight && 
      elementTop + elementHeight > scrollY
    );

    if (isInViewport) {
      const progress = (scrollY - elementTop + windowHeight) / (windowHeight + elementHeight);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      if (direction === 'vertical') {
        const yOffset = (clampedProgress - 0.5) * 100 * speed;
        setTransform({ x: 0, y: yOffset });
      } else {
        const xOffset = (clampedProgress - 0.5) * 100 * speed;
        setTransform({ x: xOffset, y: 0 });
      }
    }
  }, [scrollY, speed, direction]);

  return (
    <div
      ref={containerRef}
      className={`transform-gpu ${className}`}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        willChange: 'transform'
      }}
      {...props}
    >
      {children}
    </div>
  );
}
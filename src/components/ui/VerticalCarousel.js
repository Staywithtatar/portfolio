'use client';

import React, { useState, useEffect } from 'react';

export default function VerticalCarousel({ children, interval = 3000, visibleItems = 3 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  const totalItems = childrenArray.length;
  
  // Auto slide functionality
  useEffect(() => {
    // Don't animate if not enough items or if paused
    if (totalItems <= visibleItems || isPaused) {
      return;
    }
    
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, interval);
    
    return () => clearInterval(timer);
  }, [interval, totalItems, visibleItems, isPaused]);
  
  // If we don't have enough items to scroll
  if (totalItems <= visibleItems) {
    return (
      <div className="flex flex-col gap-4">
        {childrenArray.map((item, i) => (
          <div key={i} className="w-full animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            {item}
          </div>
        ))}
      </div>
    );
  }

  // Create an array of visible indices
  const visibleIndices = [];
  for (let i = 0; i < visibleItems; i++) {
    visibleIndices.push((activeIndex + i) % totalItems);
  }
  
  return (
    <div 
      className="relative h-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full">
        {childrenArray.map((child, index) => {
          const position = visibleIndices.indexOf(index);
          const isVisible = position !== -1;
          
          return (
            <div
              key={index}
              className="absolute w-full transition-all duration-700 ease-out"
              style={{
                transform: isVisible ? `translateY(${position * 110}%) scale(${1 - position * 0.05})` : 'translateY(-20%) scale(0.9)',
                opacity: isVisible ? 1 - position * 0.2 : 0,
                zIndex: isVisible ? 10 - position : 0,
                filter: isVisible ? `blur(${position * 0.5}px)` : 'blur(2px)',
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
      
      
      
     
    </div>
  );
}
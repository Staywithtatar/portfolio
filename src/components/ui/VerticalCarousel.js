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
          <div key={i} className="w-full">{item}</div>
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
              className="absolute w-full transition-all duration-500 ease-out"
              style={{
                transform: isVisible ? `translateY(${position * 110}%)` : 'translateY(-20%)',
                opacity: isVisible ? 1 : 0,
                zIndex: isVisible ? 10 - position : 0,
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
      
      {/* Navigation arrows */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        <button 
          onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)}
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
          aria-label="Previous item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems)}
          className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
          aria-label="Next item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
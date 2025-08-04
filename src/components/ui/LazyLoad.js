import { useState, useEffect, useRef } from 'react';

export default function LazyLoad({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = '',
  fallback = null 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add a small delay to ensure smooth loading
          setTimeout(() => setHasLoaded(true), 100);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {!hasLoaded && fallback && (
        <div className="animate-pulse">
          {fallback}
        </div>
      )}
      {isVisible && (
        <div className={`transition-opacity duration-500 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      )}
    </div>
  );
} 
// Performance optimization utilities

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical resources
export const preloadResource = (href, as = 'fetch') => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
};

// Prefetch non-critical resources
export const prefetchResource = (href) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }
};

// Optimize images
export const optimizeImage = (src, width, height, quality = 75) => {
  // Add image optimization parameters
  const params = new URLSearchParams({
    w: width.toString(),
    h: height.toString(),
    q: quality.toString(),
    fm: 'webp'
  });
  
  return `${src}?${params.toString()}`;
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  }
  return fn();
};

// Memory optimization
export const cleanupMemory = () => {
  if (typeof window !== 'undefined' && 'gc' in window) {
    window.gc();
  }
};

// Optimize animations
export const shouldReduceMotion = () => {
  return typeof window !== 'undefined' && 
         window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize for mobile
export const isMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth < 768;
};

// Optimize for low-end devices
export const isLowEndDevice = () => {
  if (typeof navigator !== 'undefined') {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
  }
  return false;
};

// Optimize bundle loading
export const loadComponent = (importFn, fallback = null) => {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      if (fallback) resolve(fallback);
    }, 3000); // 3 second timeout
    
    importFn().then((module) => {
      clearTimeout(timeout);
      resolve(module.default || module);
    }).catch(() => {
      clearTimeout(timeout);
      if (fallback) resolve(fallback);
    });
  });
};

// Optimize scroll performance
export const optimizeScroll = (callback) => {
  let ticking = false;
  
  return (event) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(event);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Cache management
export const cacheManager = {
  set: (key, value, ttl = 3600000) => { // 1 hour default
    if (typeof window !== 'undefined') {
      const item = {
        value,
        timestamp: Date.now(),
        ttl
      };
      localStorage.setItem(key, JSON.stringify(item));
    }
  },
  
  get: (key) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        const now = Date.now();
        if (now - parsed.timestamp < parsed.ttl) {
          return parsed.value;
        } else {
          localStorage.removeItem(key);
        }
      }
    }
    return null;
  },
  
  clear: () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
    }
  }
}; 
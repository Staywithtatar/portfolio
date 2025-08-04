// Utility functions for image optimization

/**
 * Optimize image dimensions based on usage
 * @param {string} usage - 'thumbnail', 'card', 'hero', 'gallery'
 * @returns {object} - width and height
 */
export const getImageDimensions = (usage) => {
  const dimensions = {
    thumbnail: { width: 150, height: 150 },
    card: { width: 400, height: 300 },
    hero: { width: 1200, height: 600 },
    gallery: { width: 800, height: 600 },
    profile: { width: 300, height: 300 },
    project: { width: 600, height: 400 }
  };
  
  return dimensions[usage] || dimensions.card;
};

/**
 * Get optimized image sizes for responsive design
 * @param {string} usage - image usage type
 * @returns {string} - sizes attribute for next/image
 */
export const getImageSizes = (usage) => {
  const sizes = {
    thumbnail: '(max-width: 768px) 100px, 150px',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    gallery: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px',
    profile: '(max-width: 768px) 200px, 300px',
    project: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
  };
  
  return sizes[usage] || sizes.card;
};

/**
 * Get priority loading for above-the-fold images
 * @param {number} index - image index in list
 * @param {number} maxPriority - maximum number of priority images
 * @returns {boolean} - should load with priority
 */
export const shouldLoadWithPriority = (index, maxPriority = 3) => {
  return index < maxPriority;
};

/**
 * Get placeholder type for better UX
 * @param {string} usage - image usage type
 * @returns {string} - placeholder type
 */
export const getPlaceholderType = (usage) => {
  const placeholders = {
    thumbnail: 'blur',
    card: 'blur',
    hero: 'blur',
    gallery: 'blur',
    profile: 'blur',
    project: 'blur'
  };
  
  return placeholders[usage] || 'blur';
}; 
'use client';

import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import OptimizedVideo from './OptimizedVideo';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ 
  project, 
  isOpen, 
  onClose 
}) {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const nextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const currentImage = project.images?.[currentImageIndex] || project.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 p-6 border-b border-white/10 bg-gray-900/95 backdrop-blur-md">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                {t(project.titleKey)}
              </h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags?.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full border border-green-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Image/Video Gallery */}
          <div className="relative mb-6">
            <div className="relative h-80 rounded-xl overflow-hidden bg-gray-800">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
                </div>
              )}
              
              {currentImage && currentImage.type === 'video' ? (
                <OptimizedVideo
                  src={currentImage.src}
                  className="w-full h-full"
                  controls
                  muted
                  onLoadedData={handleImageLoad}
                />
              ) : (
                <OptimizedImage
                  src={currentImage.src || currentImage}
                  alt={t(project.titleKey)}
                  usage="gallery"
                  fill
                  className="object-cover"
                  onLoad={handleImageLoad}
                />
              )}
            </div>

            {/* Image Navigation */}
            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-green-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">รายละเอียดโปรเจค</h3>
              <p className="text-gray-300 leading-relaxed">
                {t(project.titleKey + 'Description') || project.description || 'ไม่มีรายละเอียดเพิ่มเติม'}
              </p>
            </div>

            {/* Technologies Used */}
            {project.technologies && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">เทคโนโลยีที่ใช้</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="p-3 bg-gray-800/50 rounded-lg border border-white/10">
                      <span className="text-green-400 font-medium">{tech.name}</span>
                      <p className="text-gray-400 text-sm mt-1">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">ฟีเจอร์หลัก</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>ดูเว็บไซต์</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
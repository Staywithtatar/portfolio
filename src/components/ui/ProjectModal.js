'use client';

import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import OptimizedVideo from './OptimizedVideo';
import { useLanguage } from '../context/LanguageContext';
import { X, ChevronLeft, ChevronRight, Check, ExternalLink, Github, Briefcase } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    if (project.images?.length) {
      setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (project.images?.length) {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
    }
  };

  const currentImage = project.images?.[currentImageIndex] || project.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar surface rounded-3xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 z-10 px-6 py-5 border-b border-white/[0.06] bg-[#0a0d16]/90 backdrop-blur-xl rounded-t-3xl">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="heading-eyebrow mb-2">Case Study</div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-2 tracking-tight leading-tight">
                {t(project.titleKey)}
              </h2>
              {project.role && (
                <div className="flex items-center gap-1.5 mb-3 text-xs text-slate-400">
                  <Briefcase size={12} />
                  <span>{project.role}</span>
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-400/10 text-indigo-300 border border-indigo-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-7">
          {/* Gallery */}
          <div className="relative rounded-2xl overflow-hidden bg-black/40">
            <div className="relative aspect-video">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-indigo-400 animate-spin" />
                </div>
              )}

              {currentImage && currentImage.type === 'video' ? (
                <OptimizedVideo
                  src={currentImage.src}
                  className="w-full h-full"
                  controls
                  muted
                  onLoadedData={() => setIsLoading(false)}
                />
              ) : (
                <OptimizedImage
                  src={currentImage.src || currentImage}
                  alt={t(project.titleKey)}
                  usage="gallery"
                  fill
                  className="object-cover"
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>

            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-indigo-400 w-6'
                          : 'bg-white/40 w-1.5 hover:bg-white/60'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Overview */}
          <section>
            <div className="heading-eyebrow mb-2">About</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t(project.titleKey + 'Description') || project.description}
            </p>
          </section>

          {/* Technologies */}
          {project.technologies && (
            <section>
              <div className="heading-eyebrow mb-3">Tech Stack</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="text-sm font-medium text-indigo-300">{tech.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{tech.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          {project.features && (
            <section>
              <div className="heading-eyebrow mb-3">What I built</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <div className="flex-shrink-0 mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-emerald-400/15 border border-emerald-400/25">
                      <Check size={10} className="text-emerald-300" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm transition-colors"
              >
                <ExternalLink size={15} />
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] text-slate-100 font-medium text-sm transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

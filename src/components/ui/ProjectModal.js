'use client';

import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';
import OptimizedVideo from './OptimizedVideo';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  ExternalLink,
  Github,
  Briefcase,
  Calendar,
  Sparkles,
} from 'lucide-react';

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

  const next = () => {
    if (project.images?.length) {
      setCurrentImageIndex((p) =>
        p === project.images.length - 1 ? 0 : p + 1,
      );
    }
  };
  const prev = () => {
    if (project.images?.length) {
      setCurrentImageIndex((p) =>
        p === 0 ? project.images.length - 1 : p - 1,
      );
    }
  };

  const currentImage = project.images?.[currentImageIndex] || project.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar bg-white rounded-2xl shadow-2xl animate-fade-in">
        <div className="sticky top-0 z-10 px-6 py-5 border-b border-zinc-200 bg-white/95 backdrop-blur-xl rounded-t-2xl">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="eyebrow mb-2">{t('modal.caseStudy')}</div>
              <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-3 tracking-tight leading-tight">
                {t(project.title)}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 mb-3">
                {project.role && (
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={12} className="text-zinc-400" />
                    {t(project.role)}
                  </span>
                )}
                {project.period && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} className="text-zinc-400" />
                    {t(project.period)}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="chip-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-7">
          <div className="relative rounded-xl overflow-hidden bg-zinc-100">
            <div className="relative aspect-video">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-zinc-200 border-t-indigo-500 animate-spin" />
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
                  alt={t(project.title)}
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
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-md text-zinc-700 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white shadow-md text-zinc-700 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 shadow-md">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? 'bg-indigo-500 w-6'
                          : 'bg-zinc-300 w-1.5 hover:bg-zinc-400'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {project.summary && (
            <section>
              <div className="eyebrow mb-2">{t('modal.about')}</div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {t(project.summary)}
              </p>
            </section>
          )}

          {project.features && (
            <section>
              <div className="eyebrow mb-3">{t('modal.whatIBuilt')}</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 border border-zinc-100"
                  >
                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-indigo-100 border border-indigo-200">
                      <Check size={10} className="text-indigo-600" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-zinc-700 leading-relaxed">
                      {t(feature)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.technologies && (
            <section>
              <div className="eyebrow mb-3">{t('modal.techStack')}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-50 border border-zinc-100"
                  >
                    <div className="text-sm font-medium text-indigo-600">
                      {tech.name}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      {t(tech.description)}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.impact && (
            <section className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-indigo-600" />
                <div className="eyebrow !text-indigo-700">{t('modal.impact')}</div>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {t(project.impact)}
              </p>
            </section>
          )}

          {(project.url || project.github) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={15} />
                  {t('modal.viewLive')}
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={15} />
                  {t('modal.github')}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

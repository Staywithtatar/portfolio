'use client';

import OptimizedImage from '../ui/OptimizedImage';
import OptimizedVideo from '../ui/OptimizedVideo';
import ProjectModal from '../ui/ProjectModal';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';
import { projectData } from '../../utils/projectData';

export default function RecentProjects() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div
      className={`surface rounded-3xl p-6 h-full flex flex-col hover-lift ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      suppressHydrationWarning
    >
      <div className="flex justify-between items-end mb-5">
        <div>
          <div className="heading-eyebrow mb-1.5">Selected Work</div>
          <h2 className="text-lg font-semibold text-slate-100 tracking-tight">
            {t('caseStudies')}
          </h2>
        </div>
        <Link
          href="/projects"
          className="group flex items-center gap-1.5 text-xs font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
        >
          {t('allProjects')}
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="h-[380px] overflow-y-auto pr-2 custom-scrollbar flex-grow">
        <div className="grid grid-cols-1 gap-3">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              onClick={(e) => handleProjectClick(e, project)}
              className={`group cursor-pointer rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.14] transition-all ${
                isVisible ? `animate-fade-in-up stagger-${(index % 6) + 1}` : 'opacity-0'
              }`}
            >
              {project.image && project.type === 'image' && (
                <div className="relative h-32 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={t(project.titleKey)}
                    usage="project"
                    index={index}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
              )}
              {project.image && project.type === 'video' && (
                <div className="relative h-32">
                  <OptimizedVideo
                    src={project.image}
                    className="w-full h-full object-cover"
                    autoPlay={false}
                    muted
                  />
                </div>
              )}
              <div className="p-3">
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.isNew && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-400/15 text-emerald-300 border border-emerald-400/25">
                      <Sparkles size={9} />
                      NEW
                    </span>
                  )}
                  {project.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.05] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-medium text-slate-100 line-clamp-2 group-hover:text-white transition-colors">
                  {t(project.titleKey) || project.titleKey}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

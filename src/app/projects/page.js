'use client';

import { useEffect, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import OptimizedImage from '../../components/ui/OptimizedImage';
import OptimizedVideo from '../../components/ui/OptimizedVideo';
import ProjectModal from '../../components/ui/ProjectModal';
import { useLanguage } from '../../components/context/LanguageContext';
import { projectData } from '../../utils/projectData';
import { Sparkles, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col gap-5">
        <div
          className={`surface rounded-3xl p-6 md:p-8 ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}
          suppressHydrationWarning
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="heading-eyebrow mb-2">Portfolio</div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight mb-2 leading-tight">
                {t('projects')}
              </h1>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                A collection of selected works — from production systems to experimental builds.
              </p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-indigo-400/10 border border-indigo-400/15">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-400/15">
                <FolderGit2 size={18} className="text-indigo-300" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-100 leading-none tabular-nums">
                  {projectData.length}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 font-medium">
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projectData.map((project, index) => (
            <div
              key={project.id}
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(project);
                setIsModalOpen(true);
              }}
              className={`group surface rounded-2xl overflow-hidden cursor-pointer hover:border-white/[0.16] transition-all hover-lift ${
                isVisible ? `animate-fade-in-up stagger-${(index % 6) + 1}` : 'opacity-0'
              }`}
            >
              {project.image && project.type === 'image' && (
                <div className="relative h-52 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={t(project.titleKey)}
                    usage="project"
                    index={index}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  {project.isNew && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-400/95 text-emerald-950 backdrop-blur-sm">
                      <Sparkles size={10} />
                      NEW
                    </span>
                  )}
                </div>
              )}
              {project.image && project.type === 'video' && (
                <div className="relative h-52">
                  <OptimizedVideo
                    src={project.image}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                </div>
              )}
              <div className="p-5">
                <h2 className="text-base font-semibold text-slate-100 mb-3 tracking-tight line-clamp-2 group-hover:text-white transition-colors">
                  {t(project.titleKey)}
                </h2>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex px-2 py-1 rounded-md text-[10px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </MainLayout>
  );
}

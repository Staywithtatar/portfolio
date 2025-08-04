'use client';

import OptimizedImage from '../ui/OptimizedImage';
import OptimizedVideo from '../ui/OptimizedVideo';
import ProjectModal from '../ui/ProjectModal';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';
import { projectData } from '../../utils/projectData';

export default function RecentProjects() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);
  
  const projects = projectData;
  
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
      className={`glass p-6 h-full flex flex-col border border-white/10 hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ 
        borderRadius: '20px 60px 20px 30px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
      suppressHydrationWarning={true}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold gradient-text">
          {t('recentProjects')} <span className="text-green-400 animate-pulse">🎯</span>
        </h2>
        <Link href="/projects" className="text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-105">
          {t('allProjects')} →
        </Link>
      </div>
      
      <div className="h-[320px] overflow-y-auto pr-3 custom-scrollbar flex-grow">
        <div className="grid grid-cols-1 gap-3">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              onClick={(e) => handleProjectClick(e, project)}
              className={`glass overflow-hidden hover:bg-gray-800/60 transition-all duration-300 cursor-pointer border border-white/10 hover-lift ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
              style={{ borderRadius: project.borderRadius }}
            >
                {project.image && project.type === "image" && (
                  <div className="overflow-hidden relative" style={{ borderTopLeftRadius: project.borderRadius.split(' ')[0], borderTopRightRadius: project.borderRadius.split(' ')[1] }}>
                    <OptimizedImage
                      src={project.image}
                      alt={t(project.titleKey)}
                      usage="project"
                      index={index}
                      width={400}
                      height={200}
                      className="w-full h-28 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
                {project.image && project.type === "video" && (
                  <OptimizedVideo 
                    src={project.image} 
                    className="w-full h-28 object-cover"
                    autoPlay={false}
                    controls
                    muted
                  />
                )}
                <div className="p-2">
                  {project.isNew ? (
                    <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-2 py-1 rounded-sm mb-1 animate-pulse">
                      NEW
                    </div>
                  ) : (
                    project.tags && project.tags.map((tag, i) => (
                      <div 
                        key={i} 
                        className="inline-block bg-white/10 text-white text-xs px-2 py-1 mb-1 mr-1 hover:bg-white/20 transition-colors duration-200"
                        style={{ borderRadius: "10px 5px 10px 5px" }}
                      >
                        {tag}
                      </div>
                    ))
                  )}
                  <h3 className="text-white text-sm font-medium">
                    {t(project.titleKey) || project.titleKey}
                  </h3>
                </div>
              </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import OptimizedImage from '../../components/ui/OptimizedImage';
import OptimizedVideo from '../../components/ui/OptimizedVideo';
import ProjectModal from '../../components/ui/ProjectModal';
import { useLanguage } from '../../components/context/LanguageContext';
import { projectData } from '../../utils/projectData';

export default function Projects() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
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

  useEffect(() => {
    // Custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      .project-container::-webkit-scrollbar {
        width: 8px;
        background: transparent;
      }
      
      .project-container::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
      }
      
      .project-container::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
      
      .project-container {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MainLayout>
      <div className="h-[calc(100vh-2rem)] flex flex-col px-4 py-4 overflow-hidden">
        <div 
          className={`glass rounded-2xl p-6 mb-4 border border-gray-800/40 flex-shrink-0 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
          suppressHydrationWarning={true}
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-3xl font-bold mb-2 gradient-text">
                {t('projects')} <span className="text-blue-400 animate-pulse">🚀</span>
              </h1>
              <p className="text-gray-300">
                Explore my latest projects and creative works
              </p>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-400">{projects.length}</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="project-container overflow-y-auto flex-grow pr-2 pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {projects.map((project, index) => (
              <div key={project.id} className={`h-full ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}>
                <div 
                  onClick={(e) => handleProjectClick(e, project)}
                  className="glass overflow-hidden hover:bg-gray-800/50 transition-all duration-300 cursor-pointer h-full border border-white/10 shadow-lg hover-lift"
                  style={{ borderRadius: project.borderRadius }}
                >
                  {project.image && project.type === "image" && (
                    <div className="relative h-52 overflow-hidden" 
                      style={{ 
                        borderTopLeftRadius: project.borderRadius.split(' ')[0], 
                        borderTopRightRadius: project.borderRadius.split(' ')[1] 
                      }}>
                      <OptimizedImage
                        src={project.image}
                        alt={t(project.titleKey)}
                        usage="project"
                        index={index}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      {project.isNew && (
                        <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                          NEW
                        </div>
                      )}
                    </div>
                  )}
                  {project.image && project.type === "video" && (
                    <div className="w-full h-52 relative">
                      <OptimizedVideo 
                        src={project.image} 
                        className="w-full h-full object-cover"
                        controls
                        muted
                        preload="metadata"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h2 className="text-white text-lg font-semibold mb-2">{t(project.titleKey)}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <div key={i} className="bg-white/10 text-white text-xs px-2 py-1 rounded-full border border-white/5 hover:bg-white/20 transition-colors duration-200">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
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
    </MainLayout>
  );
}
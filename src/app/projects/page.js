'use client';

import { useEffect, useRef, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../components/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  const projects = [
    
    {
      id: 1,
      titleKey: "nongnuchSalesERP",
      image: "/image/project/project9.png",
      type: "image",
      tags: ["Vue3", "Api"],
      url: "https://sales.nongnooch.app/login",
      borderRadius: "20px 8px 20px 8px"
    },
    {
      id: 2,
      titleKey: "threadProject",
      image: "/image/project/project5.png",
      type: "image",
      tags: ["NextJs", "MongoDB"],
      url: "https://kratoo-nextjs.vercel.app/",
      borderRadius: "20px 8px 20px 8px"
    },
    {
      id: 3,
      titleKey: "realEstateProject",
      image: "/image/project/project6.png",
      type: "image",
      tags: ["AngularTS", "API"],
      url: "https://rakabaan.com/home",
      borderRadius: "8px 20px 8px 20px"
    },
    {
      id: 4,
      titleKey: "iotProject",
      image: "/image/project/test.mp4",
      type: "video",
      tags: ["IOT Arduino", "Line Notify", "MySQL"],
      url: "",
      borderRadius: "20px 8px 20px 8px"
    },
    {
      id: 5,
      titleKey: "realestantetraningset",
      image: "/image/project/project2.png",
      type: "image",
      tags: ["HTML", "TailwindCSS", "PHP", "MySQL"],
      url: "",
      borderRadius: "8px 20px 8px 20px"
    },
    {
      id: 6,
      titleKey: "itsupport",
      image: "/image/project/project8.png",
      type: "image",
      tags: ["ReactJs", "PHP", "MySQL"],
      url: "",
      borderRadius: "8px 20px 8px 20px"
    },
  ];

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
                <Link href={project.url} className="block h-full">
                  <div 
                    className="glass overflow-hidden hover:bg-gray-800/50 transition-all duration-300 cursor-pointer h-full border border-white/10 shadow-lg hover-lift"
                    style={{ borderRadius: project.borderRadius }}
                  >
                    {project.image && project.type === "image" && (
                      <div className="relative h-52 overflow-hidden" 
                        style={{ 
                          borderTopLeftRadius: project.borderRadius.split(' ')[0], 
                          borderTopRightRadius: project.borderRadius.split(' ')[1] 
                        }}>
                        <Image
                          src={project.image}
                          alt={t(project.titleKey)}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
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
                        <video 
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
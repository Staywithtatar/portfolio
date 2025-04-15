'use client';

import { useEffect, useRef } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../components/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Projects() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      titleKey: "threadProject",
      image: "/image/project/project5.png",
      type: "image",
      tags: ["NextJs", "MongoDB"],
      url: "https://kratoo-nextjs.vercel.app/",
      borderRadius: "20px 8px 20px 8px"
    },
    {
      id: 2,
      titleKey: "realEstateProject",
      image: "/image/project/project6.png",
      type: "image",
      tags: ["AngularTS", "API"],
      url: "https://rakabaan.com/home",
      borderRadius: "8px 20px 8px 20px"
    },
    {
      id: 3,
      titleKey: "iotProject",
      image: "/image/project/test.mp4",
      type: "video",
      tags: ["IOT Arduino", "Line Notify", "MySQL"],
      url: "",
      borderRadius: "20px 8px 20px 8px"
    },
    {
      id: 4,
      titleKey: "realestantetraningset",
      image: "/image/project/project2.png",
      type: "image",
      tags: ["HTML", "TailwindCSS", "PHP", "MySQL"],
      url: "",
      borderRadius: "8px 20px 8px 20px"
    },
    {
      id: 5,
      titleKey: "itsupport",
      image: "/image/project/project8.png",
      type: "image",
      tags: ["ReactJs", "PHP", "MySQL"],
      url: "",
      borderRadius: "8px 20px 8px 20px"
    },
  ];

  // Variants for animated elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    // เพิ่ม style สำหรับ scrollbar ที่กำหนดเอง
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
    
    // Clean up function
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MainLayout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-[calc(100vh-2rem)] flex flex-col px-4 py-4 overflow-hidden"
      >
        <motion.div 
          className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-gray-800/40 flex-shrink-0"
          variants={headerVariants}
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-white text-2xl font-bold">{t('projects')}</h1>
              
            </div>
            
          </div>
        </motion.div>

        <div 
          ref={containerRef}
          className="project-container overflow-y-auto flex-grow pr-2 pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-6">
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={cardVariants} className="h-full">
                <Link href={project.url} className="block h-full">
                  <div 
                    className="bg-gray-900/40 backdrop-blur-sm overflow-hidden hover:bg-gray-800/50 transition cursor-pointer h-full border border-white/10 shadow-lg"
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
                          className="object-cover transform hover:scale-105 transition duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                        />
                        {project.isNew && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
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
                          <div key={i} className="bg-white/10 text-white text-xs px-2 py-1 rounded-full border border-white/5">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
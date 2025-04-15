'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function RecentProjects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      image: "/image/project/project5.png",
      type: "image",
      tags: ["NextJS + MongoDB"],
      titleKey: 'threadProject',
      url: "https://kratoo-nextjs.vercel.app/",
      borderRadius: "30px 10px 40px 10px"
    },
    {
      id: 2,
      image: "/image/project/project6.png",
      type: "image",
      tags: ["AngularTS + API"],
      titleKey: 'realEstateProject',
      url: "https://rakabaan.com/home",
      borderRadius: "10px 40px 10px 30px"
    },
    {
      id: 3,
      image: "/image/project/test.mp4",
      type: "video",
      tags: ["IOT Arduino + Line Notify + Mysql"],
      titleKey: 'iotProject',
      url: "/projects/data-viz",
      borderRadius: "40px 10px 30px 10px"
    },
    {
      id: 4,
      image: "/image/project/project2.png",
      type: "image",
      tags: ["HTML + TawindCSS + PHP + Mysql + Dataset"],
      titleKey: 'realestantetraningset',
      url: "",
      borderRadius: "10px 40px 10px 30px"
    },
    {
      id: 5,
      image: "/image/project/project8.png",
      type: "image",
      tags: ["ReactJs + PHP + Mysql"],
      titleKey: 'itsupport',
      url: "",
      borderRadius: "10px 40px 10px 30px"
    },
  ];

  return (
    <div className="bg-gray-900/30 backdrop-blur-md p-6 h-full flex flex-col border border-white/10"
      style={{ 
        borderRadius: '20px 60px 20px 30px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold">{t('recentProjects')}</h2>
        <Link href="/projects" className="text-green-400 hover:text-green-300 transition">
          {t('allProjects')}
        </Link>
      </div>
      
      <div className="h-[320px] overflow-y-auto pr-3 custom-scrollbar flex-grow">
        <div className="grid grid-cols-1 gap-3">
          {projects.map((project) => (
            <Link href={project.url} key={project.id}>
              <div className="bg-gray-800/40 overflow-hidden hover:bg-gray-800/60 transition cursor-pointer border border-white/10 hover:shadow-lg hover:-translate-y-0.5"
                style={{ borderRadius: project.borderRadius }}>
                {project.image && project.type === "image" && (
                  <div className="overflow-hidden" style={{ borderTopLeftRadius: project.borderRadius.split(' ')[0], borderTopRightRadius: project.borderRadius.split(' ')[1] }}>
                    <Image
                      src={project.image}
                      alt={t(project.titleKey)}
                      width={400}
                      height={200}
                      className="w-full h-28 object-cover transform hover:scale-105 transition duration-500"
                    />
                  </div>
                )}
                {project.image && project.type === "video" && (
                  <video 
                    src={project.image} 
                    className="w-full h-28 object-cover"
                    autoPlay={false}
                    controls
                    muted
                  />
                )}
                <div className="p-2">
                  {project.isNew ? (
                    <div className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-sm mb-1">
                      NEW
                    </div>
                  ) : (
                    project.tags && project.tags.map((tag, i) => (
                      <div key={i} className="inline-block bg-white/10 text-white text-xs px-2 py-1 mb-1 mr-1"
                        style={{ borderRadius: "10px 5px 10px 5px" }}>
                        {tag}
                      </div>
                    ))
                  )}
                  <h3 className="text-white text-sm">{t(project.titleKey)}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
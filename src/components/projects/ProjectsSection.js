import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RecentProjects() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      image: "/image/project/project5.png",
      tags: ["web + MongoDB"],
      title: "Database Management App",
      url: "/projects/database-app"
    },
    {
      id: 2,
      image: "/image/project/project2.png",
      tags: ["web + Dataset"],
      title: "Data Visualization Tool",
      url: "/projects/data-viz"
    },
    {
      id: 3,
      image: "/image/project/project1.png",
      tags: ["AI + React"],
      title: "AI Assistant Interface",
      isNew: true,
      url: "/projects/ai-assistant"
    }
  ];

  return (
    <div className={`glass p-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold gradient-text">Recent Projects</h2>
        <Link href="/projects" className="text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-105">
          All Projects 
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <Link href={project.url} key={project.id}>
            <div className={`glass rounded-lg overflow-hidden hover:bg-gray-800/70 transition-all duration-300 cursor-pointer hover-lift ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}>
              {project.image && (
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-36 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              <div className="p-3">
                {project.isNew ? (
                  <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-2 py-1 rounded-sm mb-2 animate-pulse">
                    NEW
                  </div>
                ) : (
                  project.tags && project.tags.map((tag, i) => (
                    <div key={i} className="inline-block bg-white/10 text-white text-xs px-2 py-1 rounded-md mb-2 mr-2 hover:bg-white/20 transition-colors duration-200">
                      {tag}
                    </div>
                  ))
                )}
                <h3 className="text-white font-medium">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
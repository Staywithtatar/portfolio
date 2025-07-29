'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function TechStack() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const techItems = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", icon: "⚡", color: "from-black to-gray-800" },
    { name: "Vue.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Angular", icon: "🔴", color: "from-red-500 to-pink-500" },
    { name: "TypeScript", icon: "🔵", color: "from-blue-600 to-indigo-600" },
    { name: "JavaScript", icon: "🟡", color: "from-yellow-400 to-orange-400" },
    { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-700" },
    { name: "PHP", icon: "🟣", color: "from-purple-500 to-indigo-500" },
    { name: "MySQL", icon: "🔵", color: "from-blue-500 to-blue-600" },
    { name: "MongoDB", icon: "🟢", color: "from-green-500 to-green-600" },
    { name: "Tailwind CSS", icon: "💨", color: "from-cyan-400 to-blue-500" },
    { name: "Git", icon: "📦", color: "from-orange-500 to-red-500" }
  ];

  return (
    <div 
      className={`glass p-6 h-full flex flex-col border border-white/10 hover-lift ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ 
        borderRadius: '30px 60px 30px 60px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
      suppressHydrationWarning={true}
    >
      {/* Floating tech particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <h2 className="text-white text-xl font-semibold mb-4 gradient-text">
        {t('techStack')} <span className="text-blue-400 animate-pulse">⚡</span>
      </h2>
      
      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-2 gap-3">
          {techItems.map((item, index) => (
            <div 
              key={item.name}
              className={`glass p-3 rounded-lg border border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
              style={{ borderRadius: '15px 30px 15px 30px' }}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{item.icon}</span>
                <span className="text-white text-sm font-medium">{item.name}</span>
              </div>
              <div className={`mt-2 h-1 bg-gradient-to-r ${item.color} rounded-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
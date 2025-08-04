'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function ExpertArea() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const expertTools = [
    { name: "VS Code", icon: "💻", description: "Primary IDE" },
    { name: "GitHub", icon: "📦", description: "Version Control" },
    { name: "Postman", icon: "📡", description: "API Testing" },
    { name: "Figma", icon: "🎨", description: "UI/UX Design" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "Swagger", icon: "📋", description: "API Documentation" }
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
      {/* Creative particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <h2 className="text-white text-xl font-semibold mb-4 gradient-text">
        {t('expertArea')} <span className="text-purple-400 animate-bounce">🎯</span>
      </h2>
      
      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 gap-3">
          {expertTools.map((tool, index) => (
            <div 
              key={tool.name}
              className={`glass p-4 rounded-lg border border-white/10 hover:scale-110 hover:shadow-lg transition-all duration-300 ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'}`}
              style={{ borderRadius: '20px 40px 20px 40px' }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <h3 className="text-white font-medium">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
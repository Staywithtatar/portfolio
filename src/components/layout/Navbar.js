'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav 
      className={`glass fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full border border-white/10 hover-lift ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
      style={{ 
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
      suppressHydrationWarning={true}
    >
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-lg">{t('headone')}</span>
          <span className="text-green-400 font-bold text-lg gradient-text">{t('headtwo')}</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a 
            href="/" 
            className="text-white hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            {t('home')}
          </a>
          <a 
            href="/projects" 
            className="text-white hover:text-green-400 transition-all duration-300 hover:scale-105"
          >
            {t('projects')}
          </a>
          
          <button
            onClick={toggleLanguage}
            className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
            suppressHydrationWarning={true}
          >
            {language === 'en' ? '🇹🇭' : '🇺🇸'}
          </button>
        </div>
      </div>
      
      {/* Navigation particles */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </nav>
  );
}
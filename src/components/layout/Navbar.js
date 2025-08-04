'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`glass fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-6 py-3 rounded-full border border-white/10 hover-lift ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
      style={{ 
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
      suppressHydrationWarning={true}
    >
      <div className="flex items-center justify-between w-full max-w-4xl">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-sm sm:text-lg">{t('headone')}</span>
          <span className="text-green-400 font-bold text-sm sm:text-lg gradient-text">{t('headtwo')}</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a 
            href="/" 
            className="text-white hover:text-green-400 transition-all duration-300 hover:scale-105 text-sm lg:text-base"
          >
            {t('home')}
          </a>
          <a 
            href="/projects" 
            className="text-white hover:text-green-400 transition-all duration-300 hover:scale-105 text-sm lg:text-base"
          >
            {t('projects')}
          </a>
          
          <button
            onClick={toggleLanguage}
            className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse text-sm"
            suppressHydrationWarning={true}
          >
            {language === 'en' ? '🇹🇭' : '🇺🇸'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="bg-white/10 text-white px-2 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse text-xs"
            suppressHydrationWarning={true}
          >
            {language === 'en' ? '🇹🇭' : '🇺🇸'}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-green-400 transition-all duration-300 p-1"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-lg border border-white/10 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="p-4 space-y-3">
          <a 
            href="/" 
            className="block text-white hover:text-green-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            {t('home')}
          </a>
          <a 
            href="/projects" 
            className="block text-white hover:text-green-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
            onClick={closeMobileMenu}
          >
            {t('projects')}
          </a>
        </div>
      </div>
      
      {/* Navigation particles */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </nav>
  );
}
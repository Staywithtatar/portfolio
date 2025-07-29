'use client';

import Image from 'next/image';
import SocialButtons from './SocialButtons';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function ProfileCard() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`glass p-6 flex flex-col border border-white/10 h-full relative overflow-hidden hover-lift ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
      style={{ 
        borderRadius: '60px 20px 40px 20px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
      suppressHydrationWarning={true}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-indigo-500/5 animate-pulse"></div>
      
      <div className="mb-3 relative z-10">
        <div 
          className="overflow-hidden mb-3 max-w-[350px] mx-auto relative hover-glow"
          style={{ borderRadius: '50px 15px 30px 15px' }}
        >
          <Image
            src="/image/profile2.jpg"
            alt="Profile"
            width={350}  
            height={350}
            className="w-full h-[230px] object-cover object-center transition-all duration-500 hover:scale-105"
            priority
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <h2 className="text-xl font-bold text-white mb-1 gradient-text">
          {t('name')} <span className="text-yellow-400 animate-pulse">✋</span>
        </h2>
        
        <p className="text-l text-gray-300 mb-4">
          {t('intro')} <span className="text-white animate-bounce">🚀</span>
        </p>
      </div>
      
      <div className="mt-auto relative z-10">
        <SocialButtons />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-8 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
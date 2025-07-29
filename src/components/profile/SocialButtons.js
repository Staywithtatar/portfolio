'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function SocialButtons() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('yodsaphark.champapaeng@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div 
      className={`glass p-6 h-full flex flex-col border border-white/10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ 
        borderRadius: '30px 60px 30px 60px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
      suppressHydrationWarning={true}
    >
      {/* Social media particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      <h3 className="text-white text-lg font-semibold mb-4 gradient-text">
        Connect With Me <span className="text-green-400 animate-pulse">📱</span>
      </h3>
      
      <div className="flex-grow flex flex-col space-y-3">
        <button
          onClick={copyEmail}
          className="glass flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-300"
          style={{ borderRadius: '15px 30px 15px 30px' }}
        >
          <span className="text-xl animate-pulse">📧</span>
          <span className="text-white font-medium">{t('copyEmail')}</span>
        </button>
        
        <a
          href="https://github.com/Staywithtatar"
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-300"
          style={{ borderRadius: '30px 15px 30px 15px' }}
        >
          <span className="text-xl animate-pulse">🐙</span>
          <span className="text-white font-medium">GitHub</span>
        </a>
        
        <a
          href="https://web.facebook.com/nongta.nongree"
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:scale-105 active:scale-95 hover:shadow-lg transition-all duration-300"
          style={{ borderRadius: '15px 30px 15px 30px' }}
        >
          <span className="text-xl animate-pulse">📘</span>
          <span className="text-white font-medium">Facebook</span>
        </a>
      </div>
      
      {/* Toast notification */}
      {showToast && (
        <div 
          className="glass fixed bottom-4 right-4 p-4 rounded-lg border border-green-500/20 animate-fade-in-up"
          style={{ 
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
          }}
          suppressHydrationWarning={true}
        >
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✅</span>
            <span className="text-white">Email copied to clipboard!</span>
          </div>
        </div>
      )}
    </div>
  );
}
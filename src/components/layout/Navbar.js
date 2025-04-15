'use client';

import Link from 'next/link';
import { MdHome } from 'react-icons/md';
import { IoMdApps } from 'react-icons/io';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav 
      className="bg-gray-900/30 backdrop-blur-md mb-6 p-4 flex justify-between items-center border border-white/10" 
      style={{ 
        borderRadius: '20px 50px 20px 50px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}
    >
      <div className="flex items-center gap-2">
        <div className="bg-gray-800/70 p-1.5 rounded-tl-xl rounded-br-xl border border-white/10">
          <IoMdApps className="text-white text-xl" />
        </div>
        <h1 className="font-semibold text-xl">
          <span className="text-white">{t('headone')}</span>
          <span className="text-green-400 font-bold"> {t('headtwo')}</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white bg-gray-800/40 hover:bg-gray-800/60 px-3 py-2 transition border border-white/5" 
          style={{ borderRadius: '10px 20px 10px 20px' }}>
          <MdHome />
          {t('home')}
        </Link>
        <Link href="/projects" className="flex items-center gap-2 text-white bg-gray-800/40 hover:bg-gray-800/60 px-3 py-2 transition border border-white/5" 
          style={{ borderRadius: '20px 10px 20px 10px' }}>
          <IoMdApps />
          {t('projects')}
        </Link>
        <button 
          onClick={toggleLanguage}
          className="bg-gray-800/40 hover:bg-gray-800/60 px-3 py-2 text-white transition border border-white/5 flex items-center" 
          style={{ borderRadius: '50% 30% 50% 30%' }}
          aria-label="Toggle language"
        >
          <span className="font-medium">{language === 'en' ? 'TH' : 'EN'}</span>
        </button>
      </div>
    </nav>
  );
}
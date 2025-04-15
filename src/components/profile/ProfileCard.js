'use client';

import Image from 'next/image';
import SocialButtons from './SocialButtons';
import { useLanguage } from '../context/LanguageContext';

export default function ProfileCard() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-900/30 backdrop-blur-md p-4 flex flex-col border border-white/10 h-full"
      style={{ 
        borderRadius: '60px 20px 40px 20px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}>
      <div className="mb-3">
      <div className="overflow-hidden mb-3 max-w-[350px] mx-auto"
  style={{ borderRadius: '50px 15px 30px 15px' }}>
  <Image
    src="/image/profile2.jpg"
    alt="Profile"
    width={350}  
    height={350}
    className="w-full h-[230px] object-cover object-center transform hover:scale-105 transition duration-500"
    priority
  />
</div>
        <h2 className="text-xl font-bold text-white mb-1">{t('name')} <span className="text-yellow-400">✋</span></h2>
        <p className="text-l text-gray-300 mb-4">
          {t('intro')} <span className="text-white">🚀</span>
        </p>
      </div>
      <div className="mt-auto">
        <SocialButtons />
      </div>
    </div>
  );
}
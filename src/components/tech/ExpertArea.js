'use client';

import { useLanguage } from '../context/LanguageContext';

export default function ExpertArea() {
  const { t } = useLanguage();
  const expertTools = [
    { name: "Figma", icon: (
      <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 36C9.312 36 12 33.312 12 30V24H6C2.688 24 0 26.688 0 30C0 33.312 2.688 36 6 36Z" fill="#0ACF83"/>
        <path d="M0 18C0 14.688 2.688 12 6 12H12V24H6C2.688 24 0 21.312 0 18Z" fill="#A259FF"/>
        <path d="M0 6C0 2.688 2.688 0 6 0H12V12H6C2.688 12 0 9.312 0 6Z" fill="#F24E1E"/>
        <path d="M12 0H18C21.312 0 24 2.688 24 6C24 9.312 21.312 12 18 12H12V0Z" fill="#FF7262"/>
        <path d="M24 18C24 21.312 21.312 24 18 24C14.688 24 12 21.312 12 18C12 14.688 14.688 12 18 12C21.312 12 24 14.688 24 18Z" fill="#1ABCFE"/>
      </svg>
    ) },
    { name: "Canva", icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#7D2AE7"/>
      </svg>
    ) },
    { name: "Photoshop", icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="5" fill="#001E36"/>
        <text x="8" y="24" fill="#31A8FF" fontSize="16" fontWeight="bold">Ps</text>
      </svg>
    ) },
    { name: "Capcut", icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="5" fill="#FFFFFF"/>
        <text x="6" y="20" fill="#000000" fontSize="14" fontWeight="bold">C</text>
      </svg>
    ) },
    { name: "Draw.io", icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="5" fill="#F08705"/>
      </svg>
    ) },
    { name: "drawDB", icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="5" fill="#1E5B94"/>
        <rect x="6" y="8" width="16" height="3" rx="1" fill="#FFFFFF"/>
        <rect x="6" y="13" width="16" height="3" rx="1" fill="#FFFFFF"/>
        <rect x="6" y="18" width="16" height="3" rx="1" fill="#FFFFFF"/>
      </svg>
    ) }
  ];

  return (
    <div className="bg-gray-900/30 backdrop-blur-md p-6 flex-1 border border-white/10"
      style={{ 
        borderRadius: '40px 20px 50px 20px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}>
      <h2 className="text-white text-xl font-semibold mb-4">{t('expertArea')}</h2>
      <div className="grid grid-cols-3 gap-4">
        {expertTools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="bg-gray-800/60 mb-2 w-16 h-16 flex items-center justify-center border border-white/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ borderRadius: tool.borderRadius }}>
              {tool.icon}
            </div>
            <span className="text-white text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
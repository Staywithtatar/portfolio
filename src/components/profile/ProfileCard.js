'use client';

import Image from 'next/image';
import SocialButtons from './SocialButtons';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function ProfileCard() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`surface rounded-3xl p-6 h-full flex flex-col hover-lift ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      suppressHydrationWarning
    >
      <div className="relative mb-5 overflow-hidden rounded-2xl">
        <Image
          src="/image/profile2.jpg"
          alt="Profile"
          width={400}
          height={300}
          className="w-full h-[240px] object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium text-white tracking-wide">Available for work</span>
        </div>
      </div>

      <div className="heading-eyebrow mb-2">Full-Stack Developer</div>

      <h2 className="text-2xl font-bold text-slate-100 mb-3 tracking-tight leading-tight">
        {t('name')}
      </h2>

      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        {t('intro')}
      </p>

      <div className="mt-auto">
        <SocialButtons />
      </div>
    </div>
  );
}

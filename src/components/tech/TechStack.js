'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';
import {
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTypescript,
  SiJavascript, SiNodedotjs, SiPhp, SiMysql, SiMongodb,
  SiTailwindcss, SiGit,
} from 'react-icons/si';

export default function TechStack() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const techItems = [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Vue.js', Icon: SiVuedotjs, color: '#42B883' },
    { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'PHP', Icon: SiPhp, color: '#8993BE' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
  ];

  return (
    <div
      className={`surface rounded-3xl p-6 h-full flex flex-col hover-lift ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      suppressHydrationWarning
    >
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="heading-eyebrow mb-1.5">Stack</div>
          <h2 className="text-lg font-semibold text-slate-100 tracking-tight">{t('techStack')}</h2>
        </div>
        <span className="text-xs text-slate-500 font-mono tabular-nums">{techItems.length} tools</span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {techItems.map((item, index) => {
          const Icon = item.Icon;
          return (
            <div
              key={item.name}
              className={`group flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all cursor-default ${
                isVisible ? `animate-fade-in-up stagger-${(index % 6) + 1}` : 'opacity-0'
              }`}
            >
              <Icon
                size={22}
                style={{ color: item.color }}
                className="transition-transform group-hover:scale-110"
              />
              <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

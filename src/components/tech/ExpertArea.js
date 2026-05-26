'use client';

import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';
import { Code2, Github, Figma, FileCode2, Container, Send } from 'lucide-react';

export default function ExpertArea() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const tools = [
    { name: 'VS Code', Icon: Code2, description: 'Primary IDE' },
    { name: 'GitHub', Icon: Github, description: 'Version Control' },
    { name: 'Postman', Icon: Send, description: 'API Testing' },
    { name: 'Figma', Icon: Figma, description: 'UI / UX Design' },
    { name: 'Docker', Icon: Container, description: 'Containerization' },
    { name: 'Swagger', Icon: FileCode2, description: 'API Docs' },
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
          <div className="heading-eyebrow mb-1.5">Tools</div>
          <h2 className="text-lg font-semibold text-slate-100 tracking-tight">{t('expertArea')}</h2>
        </div>
        <span className="text-xs text-slate-500 font-mono tabular-nums">{tools.length} apps</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {tools.map((tool, index) => {
          const Icon = tool.Icon;
          return (
            <div
              key={tool.name}
              className={`group flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all ${
                isVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-400/10 border border-indigo-400/15 group-hover:bg-indigo-400/15 transition-colors flex-shrink-0">
                <Icon size={16} className="text-indigo-300" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-slate-100 truncate">{tool.name}</div>
                <div className="text-[11px] text-slate-500 truncate">{tool.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

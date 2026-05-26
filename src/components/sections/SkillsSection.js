'use client';

import SectionHeader from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';
import { useLanguage } from '../context/LanguageContext';

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrowKey="skills.eyebrow"
          titleKey="skills.title"
          subtitleKey="skills.subtitle"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title.en}
                className="surface rounded-2xl p-6 hover:border-zinc-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600">
                    <Icon size={17} strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 tracking-tight">
                    {t(cat.title)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

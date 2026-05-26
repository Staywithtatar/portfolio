'use client';

import { Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { aboutBio, aboutStrengths } from '../../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrowKey="about.eyebrow"
          titleKey="about.title"
          subtitleKey="about.subtitle"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-5">
            {aboutBio.map((para, i) => (
              <p key={i} className="text-zinc-700 leading-relaxed">
                {t(para)}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="surface rounded-2xl p-6">
              <div className="eyebrow mb-4">{t('about.whatIBring')}</div>
              <ul className="space-y-3">
                {aboutStrengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 border border-indigo-200">
                      <Check size={11} className="text-indigo-600" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-zinc-700 leading-relaxed">
                      {t(item)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

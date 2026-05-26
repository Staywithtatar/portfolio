'use client';

import { Briefcase, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { experience } from '../../data/experience';
import { useLanguage } from '../context/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrowKey="experience.eyebrow"
          titleKey="experience.title"
          subtitleKey="experience.subtitle"
        />

        <div className="mt-12 relative">
          <div className="absolute left-0 md:left-4 top-2 bottom-2 w-px bg-zinc-200" aria-hidden />

          <div className="space-y-8">
            {experience.map((job) => (
              <article key={job.id} className="relative pl-8 md:pl-14">
                <div className="absolute left-0 md:left-4 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-indigo-500" />

                <div className="surface rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 tracking-tight">
                        {t(job.role)}
                      </h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-zinc-600">
                        <Briefcase size={13} className="text-zinc-400" />
                        <span>{t(job.company)}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-xs">
                      <span className="font-medium text-zinc-700">{t(job.period)}</span>
                      <span className="text-zinc-500 mt-0.5">{t(job.type)}</span>
                    </div>
                  </div>

                  {job.summary && (
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      {t(job.summary)}
                    </p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((line, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-zinc-700 leading-relaxed"
                      >
                        <Check
                          size={14}
                          className="flex-shrink-0 mt-0.5 text-indigo-500"
                          strokeWidth={2.5}
                        />
                        <span>{t(line)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

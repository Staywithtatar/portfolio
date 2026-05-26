'use client';

import Image from 'next/image';
import { ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(ellipse, rgba(99, 102, 241, 0.10) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t(profile.availability)}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.05]">
              {t(profile.title)
                .split(' / ')
                .map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-zinc-300"> / </span>}
                  </span>
                ))}
            </h1>

            <p className="mt-5 text-lg text-zinc-600 max-w-xl leading-relaxed">
              {t(profile.intro)}
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} />
                {t(profile.location)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={14} />
                {t('hero.realWorld')}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                {t('hero.viewProjects')}
                <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={15} />
                {t('hero.contactMe')}
              </a>
            </div>

            {profile.highlights?.length > 0 && (
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {profile.highlights.map((h, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-zinc-900 tabular-nums">
                      {t(h.value)}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">
                      {t(h.label)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-100 -rotate-2" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-xl bg-white">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={480}
                  height={560}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

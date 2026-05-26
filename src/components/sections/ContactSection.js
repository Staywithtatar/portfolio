'use client';

import { useState } from 'react';
import { Mail, Github, Facebook, Copy, Check } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import { profile } from '../../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <SectionHeader
          align="center"
          eyebrowKey="contact.eyebrow"
          titleKey="contact.title"
          subtitleKey="contact.subtitle"
        />

        <div className="mt-10 surface rounded-2xl p-8 md:p-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block text-xl md:text-2xl font-semibold text-zinc-900 hover:text-indigo-600 transition-colors break-all"
          >
            {profile.email}
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={15} />
              {t('contact.sendEmail')}
            </a>
            <button onClick={copyEmail} className="btn-secondary">
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-600" />
                  {t('contact.copied')}
                </>
              ) : (
                <>
                  <Copy size={15} />
                  {t('contact.copyEmail')}
                </>
              )}
            </button>
          </div>

          {(profile.social.github || profile.social.facebook) && (
            <div className="mt-8 pt-6 border-t border-zinc-200">
              <div className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-3">
                {t('contact.alsoOn')}
              </div>
              <div className="flex items-center justify-center gap-2">
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {profile.social.facebook && (
                  <a
                    href={profile.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <Facebook size={15} />
                    Facebook
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

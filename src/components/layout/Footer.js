'use client';

import { Github, Mail, Facebook } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="font-bold text-zinc-900 tracking-tight">
            {profile.name}
          </div>
          <div className="text-sm text-zinc-500 mt-1">
            {t(profile.title)} · {t(profile.location)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {profile.social.facebook && (
            <a
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-white border border-zinc-200 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-xs text-zinc-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {profile.name}. {t('footer.rights')}
          </div>
          <div>{t('footer.builtWith')}</div>
        </div>
      </div>
    </footer>
  );
}

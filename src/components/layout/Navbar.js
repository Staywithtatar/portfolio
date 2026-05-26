'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { href: '/', key: 'home' },
    { href: '/projects', key: 'projects' },
  ];

  return (
    <nav
      className={`surface fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-1.5 rounded-full ${
        isVisible ? 'animate-fade-in-down' : 'opacity-0'
      }`}
      style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)' }}
      suppressHydrationWarning
    >
      <div className="flex items-center gap-1">
        <Link href="/" className="flex items-center gap-1.5 px-3 py-1.5">
          <span className="text-slate-100 font-semibold text-sm tracking-tight">{t('headone')}</span>
          <span className="gradient-text font-semibold text-sm tracking-tight">{t('headtwo')}</span>
        </Link>

        <div className="hidden md:block w-px h-5 bg-white/10" />

        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? 'text-white bg-white/[0.08]'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </div>

        <div className="w-px h-5 bg-white/10 mx-1" />

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Toggle language"
          suppressHydrationWarning
        >
          <Globe size={13} strokeWidth={2.2} />
          <span className="tracking-wider">{language === 'en' ? 'EN' : 'TH'}</span>
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 surface rounded-2xl p-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  active
                    ? 'text-white bg-white/[0.08]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

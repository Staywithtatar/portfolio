'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/#about', key: 'nav.about' },
    { href: '/#projects', key: 'nav.projects' },
    { href: '/#experience', key: 'nav.experience' },
    { href: '/#skills', key: 'nav.skills' },
    { href: '/#services', key: 'nav.services' },
    { href: '/#contact', key: 'nav.contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-zinc-900 font-bold tracking-tight"
        >
          <span>Guitar</span>
          <span className="text-indigo-600">Folio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle language"
            suppressHydrationWarning
          >
            <Globe size={13} strokeWidth={2.2} />
            <span className="tracking-wider">{language === 'en' ? 'EN' : 'TH'}</span>
          </button>
          <Link href="/#contact" className="btn-primary text-sm">
            {t('nav.getInTouch')}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg text-zinc-700 hover:bg-zinc-100"
            aria-label="Toggle language"
            suppressHydrationWarning
          >
            <span className="inline-flex items-center gap-1 text-xs font-semibold">
              <Globe size={13} />
              {language === 'en' ? 'EN' : 'TH'}
            </span>
          </button>
          <button
            className="p-2 rounded-lg text-zinc-700 hover:bg-zinc-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm mt-2 justify-center"
            >
              {t('nav.getInTouch')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

'use client';

import { Mail, Github, Facebook, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function SocialButtons() {
  const { t } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('yodsaphark.champapaeng@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const buttons = [
    { icon: Mail, label: t('copyEmail'), onClick: copyEmail },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Staywithtatar' },
    { icon: Facebook, label: 'Facebook', href: 'https://web.facebook.com/nongta.nongree' },
  ];

  return (
    <div className="space-y-2">
      {buttons.map((btn) => {
        const Icon = btn.icon;
        const Wrapper = btn.href ? 'a' : 'button';
        const props = btn.href
          ? { href: btn.href, target: '_blank', rel: 'noopener noreferrer' }
          : { onClick: btn.onClick, type: 'button' };

        return (
          <Wrapper
            key={btn.label}
            {...props}
            className="group w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.14] transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-indigo-400/30 group-hover:bg-indigo-400/10 transition-colors">
                <Icon size={14} className="text-slate-300 group-hover:text-indigo-300 transition-colors" />
              </div>
              <span className="text-sm font-medium text-slate-200">{btn.label}</span>
            </div>
            <ArrowUpRight
              size={14}
              className="text-slate-500 group-hover:text-indigo-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
            />
          </Wrapper>
        );
      })}

      {showToast && (
        <div
          className="fixed bottom-6 right-6 surface rounded-xl px-4 py-3 flex items-center gap-2 animate-fade-in-up z-50"
          suppressHydrationWarning
        >
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span className="text-sm text-slate-100">Email copied to clipboard</span>
        </div>
      )}
    </div>
  );
}

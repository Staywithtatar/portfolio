'use client';

import { useLanguage } from '../context/LanguageContext';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  eyebrowKey,
  titleKey,
  subtitleKey,
  align = 'left',
}) {
  const { t } = useLanguage();

  const eb = eyebrow ?? (eyebrowKey ? t(eyebrowKey) : null);
  const tt = title ?? (titleKey ? t(titleKey) : null);
  const sb = subtitle ?? (subtitleKey ? t(subtitleKey) : null);

  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eb && <div className="eyebrow mb-3">{eb}</div>}
      {tt && <h2 className="section-title">{tt}</h2>}
      {sb && <p className="section-subtitle mt-3">{sb}</p>}
    </div>
  );
}

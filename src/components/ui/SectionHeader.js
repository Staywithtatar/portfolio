export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mt-3">{subtitle}</p>}
    </div>
  );
}

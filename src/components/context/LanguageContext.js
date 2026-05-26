'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// UI-string translations (keys used by components for non-data labels)
const ui = {
  en: {
    'nav.getInTouch': 'Get in touch',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',
    'hero.realWorld': 'Real-world business systems',

    'about.eyebrow': 'About',
    'about.title': 'Developer focused on real production work',
    'about.subtitle': "I'm not into demo apps. My focus is shipping useful systems that businesses run on every day.",
    'about.whatIBring': 'What I bring',

    'projects.eyebrow': 'Selected Projects',
    'projects.title': 'Case Studies',
    'projects.subtitle': 'Real production systems and freelance client work. Each case study shows my role, the stack, and what I delivered.',
    'projects.viewAll': 'View all projects',
    'projects.viewCase': 'View case study',
    'projects.allTitle': 'All Case Studies',
    'projects.allSubtitle': 'A complete record of selected projects — from current production work to earlier prototypes and academic builds.',
    'projects.backHome': 'Back to home',
    'projects.eyebrowPortfolio': 'Portfolio',

    'experience.eyebrow': 'Experience',
    'experience.title': "Where I've shipped",
    'experience.subtitle': 'Production engagements, freelance projects, and full-stack work — ordered by recency.',

    'skills.eyebrow': 'Skills',
    'skills.title': 'Tools I use to ship',
    'skills.subtitle': 'Grouped by area. I lead with Frontend but cross into backend, database, and deployment when the work needs it.',

    'services.eyebrow': 'Services',
    'services.title': 'What I can build for you',
    'services.subtitle': 'For startups, SMBs, and internal teams. I cover the work end-to-end — requirement, design, build, and deploy.',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's work together",
    'contact.subtitle': 'Open to full-time roles and freelance engagements — ERP, dashboards, e-commerce, and business systems. Drop me a message.',
    'contact.sendEmail': 'Send Email',
    'contact.copyEmail': 'Copy Email',
    'contact.copied': 'Copied',
    'contact.alsoOn': 'Also on',

    'modal.caseStudy': 'Case Study',
    'modal.about': 'About',
    'modal.whatIBuilt': 'What I built',
    'modal.techStack': 'Tech Stack',
    'modal.impact': 'Business impact',
    'modal.viewLive': 'View Live',
    'modal.github': 'GitHub',

    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with Next.js · Designed for clients & employers',
  },
  th: {
    'nav.getInTouch': 'ติดต่อ',
    'nav.about': 'เกี่ยวกับฉัน',
    'nav.projects': 'ผลงาน',
    'nav.experience': 'ประสบการณ์',
    'nav.skills': 'ความสามารถ',
    'nav.services': 'บริการ',
    'nav.contact': 'ติดต่อ',

    'hero.viewProjects': 'ดูผลงาน',
    'hero.contactMe': 'ติดต่อฉัน',
    'hero.realWorld': 'พัฒนาระบบธุรกิจจริง',

    'about.eyebrow': 'เกี่ยวกับฉัน',
    'about.title': 'นักพัฒนาที่โฟกัสงาน production จริง',
    'about.subtitle': 'ไม่ใช่แค่ demo app — งานที่ผมทำคือระบบที่ลูกค้าใช้งานจริงทุกวัน',
    'about.whatIBring': 'สิ่งที่ผมนำเสนอ',

    'projects.eyebrow': 'ผลงานคัดสรร',
    'projects.title': 'Case Studies',
    'projects.subtitle': 'ระบบ production จริงและงาน freelance ลูกค้า — แต่ละ case study บอกบทบาท เทคโนโลยี และสิ่งที่ส่งมอบ',
    'projects.viewAll': 'ดูผลงานทั้งหมด',
    'projects.viewCase': 'ดูรายละเอียด',
    'projects.allTitle': 'Case Studies ทั้งหมด',
    'projects.allSubtitle': 'รวมโปรเจกต์ที่คัดสรร — ตั้งแต่งาน production ปัจจุบันไปจนถึงต้นแบบและโปรเจกต์ทางวิชาการ',
    'projects.backHome': 'กลับสู่หน้าหลัก',
    'projects.eyebrowPortfolio': 'Portfolio',

    'experience.eyebrow': 'ประสบการณ์',
    'experience.title': 'งานที่ผมส่งมอบมาแล้ว',
    'experience.subtitle': 'งานประจำ ฟรีแลนซ์ และงาน full-stack — เรียงตามความใหม่',

    'skills.eyebrow': 'ความสามารถ',
    'skills.title': 'เครื่องมือที่ผมใช้ส่งงาน',
    'skills.subtitle': 'แบ่งตามด้าน — ผมเด่นด้าน Frontend แต่ทำงาน backend, database และ deployment ได้ตามที่งานต้องการ',

    'services.eyebrow': 'บริการ',
    'services.title': 'สิ่งที่ผมสร้างให้คุณได้',
    'services.subtitle': 'สำหรับ startup, SMB และทีมภายในองค์กร — ดูแลงานครบวงจร ตั้งแต่ requirement, design, build จนถึง deploy',

    'contact.eyebrow': 'ติดต่อ',
    'contact.title': 'มาทำงานด้วยกัน',
    'contact.subtitle': 'เปิดรับงานประจำและงานฟรีแลนซ์ — ERP, dashboard, e-commerce และระบบธุรกิจ ทักทายมาได้',
    'contact.sendEmail': 'ส่งอีเมล',
    'contact.copyEmail': 'คัดลอกอีเมล',
    'contact.copied': 'คัดลอกแล้ว',
    'contact.alsoOn': 'ช่องทางอื่น',

    'modal.caseStudy': 'Case Study',
    'modal.about': 'รายละเอียด',
    'modal.whatIBuilt': 'สิ่งที่ผมพัฒนา',
    'modal.techStack': 'เทคโนโลยีที่ใช้',
    'modal.impact': 'ผลกระทบต่อธุรกิจ',
    'modal.viewLive': 'เปิดเว็บไซต์',
    'modal.github': 'GitHub',

    'footer.rights': 'สงวนลิขสิทธิ์',
    'footer.builtWith': 'พัฒนาด้วย Next.js · ออกแบบเพื่อลูกค้าและนายจ้าง',
  },
};

const LanguageContext = createContext({
  language: 'en',
  toggleLanguage: () => {},
  t: (v) => (typeof v === 'string' ? v : v?.en || ''),
  mounted: false,
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'th') setLanguage(saved);
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('language', language);
      } catch (e) {
        // ignore
      }
    }
  }, [language, mounted]);

  const toggleLanguage = () => setLanguage((p) => (p === 'en' ? 'th' : 'en'));

  /**
   * Polymorphic translator:
   *   t("nav.about")        → UI string from dict
   *   t({en: "..", th: ".."}) → picks current language
   *   t("plain text")       → returns as-is if not in dict
   */
  const t = (value) => {
    if (value == null) return '';

    // Object with en/th
    if (typeof value === 'object') {
      const lang = mounted ? language : 'en';
      return value[lang] ?? value.en ?? '';
    }

    // String → try UI dict, else return as-is
    if (typeof value === 'string') {
      const lang = mounted ? language : 'en';
      return ui[lang]?.[value] ?? value;
    }

    return '';
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

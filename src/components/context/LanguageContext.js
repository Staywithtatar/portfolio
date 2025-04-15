'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// สร้าง translations object สำหรับเก็บคำแปลทั้งหมด
const translations = {
  en: {
    // Navbar
    headone: "Guitar",
    headtwo: "Folio",
    home: "Home",
    projects: "Projects",
    
    // ProfileCard
    name: "Yodsaphark Champapaeng",
    intro: "In my free time, I enjoy playing games and web development. I am excited to see how AI can improve the user experience and make apps smarter and more engaging.",
    copyEmail: "Copy Email",
    
    // Tech Stack
    techStack: "Tech Stack",
    
    // Expert Area
    expertArea: "My Expert Area",
    
    // Recent Projects
    recentProjects: "Recent Projects",
    allProjects: "All Projects →",
    threadProject: "It is a system created from studying the Future Skills course on the topic of NextJs, and I have taken that project and developed it into a basic thread.",
    realEstateProject: "A website for advertising and finding real estate for sale This is a project where I fixed bugs according to the list that the tester tested and made a list for fixing in the front-end.",
    iotProject: "This project uses an IoT module to create a prototype of a smart trash bin. It features notification integration via LINE and stores data in a MySQL database.",
    realestantetraningset: "It is a final project that is a Web Application about calculating loan requests, with the criteria used for calculation being a training set.",
    itsupport: "It is a website for recording information on equipment sent for repair by the IT department."
  },
  th: {
    // Navbar
    headone: "กีต้าร์",
    headtwo: "ฟอลิโอ",
    home: "หน้าหลัก",
    projects: "โปรเจคต์",
    
    // ProfileCard
    name: "ยศภาค จำปาแพง",
    intro: "ในเวลาว่าง ผมชอบเล่นเกมและพัฒนาเว็บไซต์ ผมรู้สึกตื่นเต้นที่จะได้เห็นว่า AI สามารถปรับปรุงประสบการณ์ผู้ใช้และทำให้แอปสมาร์ทและน่าสนใจมากขึ้นได้อย่างไร",
    copyEmail: "คัดลอกอีเมล",
    
    // Tech Stack
    techStack: "เทคโนโลยีที่ใช้",
    
    // Expert Area
    expertArea: "ความเชี่ยวชาญของฉัน",
    
    // Recent Projects
    recentProjects: "โปรเจคต์ล่าสุด",
    allProjects: "โปรเจคต์ทั้งหมด →",
    threadProject: "เป็นระบบที่ทำขึ้นมาจากการศึกษาคอร์สเรียนของ Future Skills ในหัวข้อ NextJs และผมได้นำโปรเจคนั้นมาต่อยอดทำเป็นกระทู้แบบเบสิค",
    realEstateProject: "เว็บไซต์สำหรับประกาศและค้นหาอสังหาริมทรัพย์เพื่อขาย เป็นโปรเจคที่ผมได้แก้ไขบัคตามลิสต์ที่เทสเตอร์เทสและทำลิสต์มาให้แก้ในส่วนฟอร์นเอ็น",
    iotProject: "โปรเจคต์นี้ใช้โมดูล IoT ในการสร้างต้นแบบถังขยะอัจฉริยะ มีการแจ้งเตือนผ่าน LINE และจัดเก็บข้อมูลในฐานข้อมูล MySQL",
    realestantetraningset: "เป็นไฟนอลโปรเจคของผม ทำระบบเว็บแอปพลิเคชั่นเกี่ยวกับการคำนวณผลการขอสินเชื่อจากข้อมูลส่วนตัวของผู้ใช้โดยใช้ Trainningset เป็นเกณฑ์การตัดสิน",
    itsupport: "เป็นเว็บไซต์สำหรับการลงข้อมูลอุปกรณ์ส่งซ่อมของแผนก IT"
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Always start with default language 'en' for server-side rendering
  const [language, setLanguage] = useState('en');
  // Track if we're mounted on the client side
  const [mounted, setMounted] = useState(false);

  // Effect to run only on client-side after initial render
  useEffect(() => {
    setMounted(true);
    // Now that we're on the client, we can safely access localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Only update localStorage after mounted (client-side only)
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  // Translation function
  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook for using LanguageContext
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
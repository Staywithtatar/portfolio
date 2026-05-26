'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navbar
    headone: "Guitar",
    headtwo: "Folio",
    home: "Home",
    projects: "Projects",

    // ProfileCard
    name: "Yodsaphark Champapaeng",
    intro: "Full-stack developer based in Thailand. I enjoy building production web apps — from ERP systems and marketplaces to AI-integrated tools — and care about UX, performance, and shipping solid work.",
    copyEmail: "Copy Email",

    // Tech Stack
    techStack: "Tech Stack",

    // Expert Area
    expertArea: "My Expert Area",

    // Case studies section
    caseStudies: "Case Studies",
    caseStudiesSubtitle: "Selected work — real production systems and academic projects.",
    allProjects: "View all",

    // Project 1 — Paljai
    paljai: "Paljai — Pet E-commerce Platform",
    paljaiDescription: "Frontend development for a marketplace platform connecting pet owners with sellers of pets and pet products. I built the Seller Dashboard, Product Management, and Order/Stock UI flows, integrated Supabase (Auth, Storage, API), owned UX/UI decisions, and resolved production issues hands-on.",

    // Project 2 — Apower ERP
    apowerErp: "Apower — ERP & Production Management",
    apowerErpDescription: "A comprehensive ERP system for a manufacturing business covering Material Orders, Purchase Requests, Production Planning, Cutting, QC, Stock and Reports. The work involved integrating with an existing database, modelling real business logic, conducting requirement analysis and flow design, and handling migration plus VPS deployment.",

    // Project 3 — Nong Nooch Sales ERP
    nongnuchSales: "Nong Nooch — Sales ERP",
    nongnuchSalesDescription: "Sales management system for Nong Nooch Tropical Garden featuring customer data, quotation generation, sales tracking, and a real-time dashboard with automated alerts driven by the generated quotations.",

    // Project 4 — Repair Request
    repairRequest: "IT Repair Request System",
    repairRequestDescription: "An IT support ticketing system: users register/login and submit repair requests, admins manage status through a dashboard, and the client polls for realtime status updates.",

    // Project 5 — AI Loan Approval
    aiLoanApproval: "AI Loan Approval — Senior Project",
    aiLoanApprovalDescription: "Senior thesis project — a web application that calculates loan approval results from user profile data, using a Machine Learning training set as the decision criteria.",

    // Project 6 — Thread (NextJS learning)
    threadProject: "Thread — Social Discussion Platform",
    threadProjectDescription: "A social media platform for sharing thoughts and threads, built from a Future Skills NextJS course and extended into a working basic-thread system with auth, posts, comments, and likes.",

    // Project 7 — Real Estate (Angular bug-fix engagement)
    realEstateProject: "Real Estate Listing Site",
    realEstateProjectDescription: "Front-end engagement on a real-estate listing & search website built with Angular TypeScript and REST APIs — handled the bug list reported by QA, fixing front-end issues across filtering, detail views, and listing management.",

    // Project 8 — IoT Smart Trash Bin
    iotProject: "IoT Smart Trash Bin",
    iotProjectDescription: "An IoT prototype: a smart trash bin that uses ultrasonic sensors to detect fill level and sends LINE notifications when full, with all events logged to a MySQL database and a small web dashboard for monitoring.",
  },
  th: {
    // Navbar
    headone: "กีต้าร์",
    headtwo: "ฟอลิโอ",
    home: "หน้าหลัก",
    projects: "ผลงาน",

    // ProfileCard
    name: "ยศภาค จำปาแพง",
    intro: "Full-stack developer จากประเทศไทย ชอบสร้าง production web app ตั้งแต่ระบบ ERP, marketplace ไปจนถึงเครื่องมือที่ใช้ AI ให้ความสำคัญกับ UX, performance และส่งงานให้จบจริง",
    copyEmail: "คัดลอกอีเมล",

    // Tech Stack
    techStack: "เทคโนโลยีที่ใช้",

    // Expert Area
    expertArea: "ความเชี่ยวชาญของฉัน",

    // Case studies section
    caseStudies: "Case Studies",
    caseStudiesSubtitle: "ผลงานที่คัดสรร — ระบบ production จริงและโปรเจกต์ทางวิชาการ",
    allProjects: "ดูทั้งหมด",

    // Project 1 — Paljai
    paljai: "Paljai — แพลตฟอร์ม E-commerce สัตว์เลี้ยง",
    paljaiDescription: "พัฒนา Frontend สำหรับระบบ marketplace สัตว์เลี้ยงและสินค้าเกี่ยวกับสัตว์เลี้ยง รับผิดชอบ Seller Dashboard, Product Management, Order/Stock UI เชื่อม Supabase Auth/Storage/API ดูแล UX/UI และแก้ปัญหาบน production ด้วยตัวเอง",

    // Project 2 — Apower ERP
    apowerErp: "Apower — ระบบ ERP สำหรับโรงงานผลิต",
    apowerErpDescription: "ระบบ ERP ครบวงจรสำหรับโรงงาน/ธุรกิจผลิต ครอบคลุม Material Order, Purchase Request, Production Planning, Cutting, QC, Stock และ Report ทำงานร่วมกับ Database เดิมและ business logic จริง ตั้งแต่วิเคราะห์ requirement, flow ระบบ ไปจนถึง migration และ deploy ขึ้น VPS",

    // Project 3 — Nong Nooch Sales ERP
    nongnuchSales: "Nong Nooch — ระบบ ERP ฝ่ายขาย",
    nongnuchSalesDescription: "ระบบจัดการการขายของสวนนงนุช ครอบคลุมข้อมูลลูกค้า สร้างใบเสนอราคา ติดตามสถานะการขาย พร้อม Dashboard แบบ real-time และระบบแจ้งเตือนงานตามใบเสนอราคาที่สร้าง",

    // Project 4 — Repair Request
    repairRequest: "ระบบแจ้งซ่อม IT",
    repairRequestDescription: "ระบบแจ้งซ่อมสำหรับฝ่าย IT รองรับการ Register/Login ผู้ใช้ส่งคำขอซ่อม Admin จัดการสถานะผ่าน dashboard และฝั่ง client polling สถานะแบบ realtime",

    // Project 5 — AI Loan Approval
    aiLoanApproval: "AI Loan Approval — Senior Project",
    aiLoanApprovalDescription: "Senior project — เว็บแอปพลิเคชันคำนวณผลการขอสินเชื่อจากข้อมูลส่วนตัวของผู้ใช้ โดยใช้ Machine Learning training set เป็นเกณฑ์การตัดสิน",

    // Project 6 — Thread
    threadProject: "Thread — แพลตฟอร์มกระทู้สังคม",
    threadProjectDescription: "ระบบที่ทำขึ้นจากการศึกษาคอร์ส Future Skills หัวข้อ NextJs แล้วต่อยอดเป็นกระทู้แบบเบสิค มีระบบสมาชิก โพสต์กระทู้ คอมเมนต์ และไลค์",

    // Project 7 — Real Estate
    realEstateProject: "เว็บไซต์ประกาศอสังหาริมทรัพย์",
    realEstateProjectDescription: "งาน Frontend แก้บั๊กบนเว็บไซต์ประกาศและค้นหาอสังหาริมทรัพย์ที่พัฒนาด้วย Angular TypeScript + REST API — แก้ลิสต์บั๊กที่ QA แจ้งครอบคลุมระบบกรอง รายละเอียดประกาศ และจัดการประกาศ",

    // Project 8 — IoT Smart Trash Bin
    iotProject: "IoT — ถังขยะอัจฉริยะ",
    iotProjectDescription: "โปรเจกต์ต้นแบบ IoT — ถังขยะอัจฉริยะใช้เซนเซอร์ ultrasonic ตรวจจับระดับขยะ และส่งแจ้งเตือนผ่าน LINE เมื่อเต็ม จัดเก็บข้อมูลเหตุการณ์ใน MySQL พร้อม web dashboard ตรวจสอบ",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage === 'en' || savedLanguage === 'th') {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('language', language);
      } catch (error) {
        console.warn('Could not save to localStorage:', error);
      }
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  const t = (key) => {
    if (!mounted) return translations.en[key] || key;
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

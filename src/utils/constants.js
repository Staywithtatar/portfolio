// ไฟล์นี้ใช้สำหรับเก็บข้อมูลที่ใช้ซ้ำในแอป

// ข้อมูลผู้ใช้
export const USER_INFO = {
    name: "Thirasak Arreeram",
    description: "In my free time, I enjoy playing games and developing websites. Right now, I'm interested in creating web applications with AI (LLM), and I'm excited about how AI will enhance the user experience and make the app smarter 🚀",
    email: "thirasak@example.com",
    social: {
      github: "https://github.com",
      facebook: "https://facebook.com"
    }
  };
  
  // ข้อมูล Tech Stack
  export const TECH_STACK = [
    { name: "Express.js", icon: null, highlight: false },
    { 
      name: "Fast api", 
      icon: "FastApiIcon", 
      highlight: false 
    },
    {
      name: "Langchain",
      icon: "LangchainIcon",
      highlight: true
    }
  ];
  
  // ข้อมูล Expert Tools
  export const EXPERT_TOOLS = [
    { name: "Figma", icon: "FigmaIcon" },
    { name: "Canva", icon: "CanvaIcon" },
    { name: "Photoshop", icon: "PhotoshopIcon" },
    { name: "Capcut", icon: "CapcutIcon" },
    { name: "Draw.io", icon: "DrawioIcon" },
    { name: "drawDB", icon: "DrawDBIcon" }
  ];
  
  // ข้อมูลโปรเจค
  export const RECENT_PROJECTS = [
    {
      id: 1,
      image: "/project-placeholder-1.jpg",
      tags: ["web + LLM"],
      isNew: false
    },
    {
      id: 2,
      image: "/project-placeholder-2.jpg",
      tags: ["web + LLM"],
      isNew: false
    },
    {
      id: 3,
      image: null,
      tags: [],
      isNew: true
    }
  ];
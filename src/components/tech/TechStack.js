'use client';

import { Code, Database, Server, Globe, PenTool, CheckSquare, BarChart, Palette } from 'lucide-react';
import VerticalCarousel from '../ui/VerticalCarousel';
import { useLanguage } from '../context/LanguageContext';

export default function TechStack() {
  const { t } = useLanguage();
  
  // Tech stack items with icons updated to your skills
  const techItems = [
    {
      id: 1,
      name: "React.js",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      icon: <Code className="w-5 h-5 text-white" />,
      borderRadius: "20px 10px 30px 10px"
    },
    {
      id: 2,
      name: "Next.js",
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      icon: <Globe className="w-5 h-5 text-white" />,
      borderRadius: "10px 30px 10px 20px"
    },
    {
      id: 3,
      name: "Angular.js",
      bgColor: "bg-gradient-to-br from-red-600 to-red-700",
      icon: <Code className="w-5 h-5 text-white" />,
      borderRadius: "30px 10px 20px 10px"
    },
    {
      id: 4,
      name: "MySQL",
      bgColor: "bg-gradient-to-br from-blue-700 to-blue-900",
      icon: <Database className="w-5 h-5 text-white" />,
      borderRadius: "10px 20px 30px 10px"
    },
    {
      id: 5,
      name: "MongoDB",
      bgColor: "bg-gradient-to-br from-green-700 to-green-900",
      icon: <Database className="w-5 h-5 text-white" />,
      borderRadius: "20px 10px 10px 30px"
    },
    {
      id: 6,
      name: "Tailwind CSS",
      bgColor: "bg-gradient-to-br from-sky-500 to-sky-700",
      icon: <Palette className="w-5 h-5 text-white" />,
      borderRadius: "30px 10px 10px 20px"
    },
    {
      id: 7,
      name: "Manual Testing",
      bgColor: "bg-gradient-to-br from-amber-600 to-amber-800",
      icon: <CheckSquare className="w-5 h-5 text-white" />,
      borderRadius: "10px 30px 20px 10px"
    },
    {
      id: 8,
      name: "Performance Testing",
      bgColor: "bg-gradient-to-br from-purple-600 to-purple-800",
      icon: <BarChart className="w-5 h-5 text-white" />,
      borderRadius: "20px 10px 30px 10px"
    }
  ];

  return (
    <div className="bg-gray-900/30 backdrop-blur-md p-6 border border-white/10"
      style={{ 
        borderRadius: '20px 50px 20px 50px',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
      }}>
      <h2 className="text-white text-xl font-semibold mb-4">{t('techStack')}</h2>
      <div className="h-56 relative">
        <VerticalCarousel interval={3000} visibleItems={3}>
          {techItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.bgColor} p-4 flex items-center gap-3 hover:scale-[1.02] transition-transform shadow-lg border border-white/10`}
              style={{ borderRadius: item.borderRadius }}
            >
              <div className="w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center"
                style={{ borderRadius: '40% 60% 40% 60%' }}>
                {item.icon}
              </div>
              <h2 className="text-white text-lg font-medium">{item.name}</h2>
            </div>
          ))}
        </VerticalCarousel>
      </div>
    </div>
  );
}
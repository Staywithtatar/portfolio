import './globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/components/context/LanguageContext';



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  
  title: 'Guitar Folio',
  description: 'My personal portfolio showcasing projects, skills, and expertise',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
import './globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../components/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yodsaphark Champapaeng - Portfolio',
  description: 'Full-stack developer portfolio showcasing web development projects, tech stack, and expertise in modern web technologies.',
  keywords: 'portfolio, web developer, full-stack, React, Next.js, JavaScript, TypeScript, Vue.js, Angular',
  authors: [{ name: 'Yodsaphark Champapaeng' }],
  creator: 'Yodsaphark Champapaeng',
  publisher: 'Yodsaphark Champapaeng',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Yodsaphark Champapaeng - Portfolio',
    description: 'Full-stack developer portfolio showcasing web development projects and expertise.',
    url: 'https://your-domain.com',
    siteName: 'Yodsaphark Portfolio',
    images: [
      {
        url: '/image/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Yodsaphark Champapaeng',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yodsaphark Champapaeng - Portfolio',
    description: 'Full-stack developer portfolio showcasing web development projects and expertise.',
    images: ['/image/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/image/profile.jpg" as="image" />
        <link rel="preload" href="/image/project/project1.png" as="image" />
        
        {/* DNS prefetch and preconnect for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance and security meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yodsaphark Champapaeng",
              "jobTitle": "Full-Stack Developer",
              "description": "Full-stack developer with expertise in modern web technologies",
              "url": "https://your-domain.com",
              "image": "/image/profile.jpg",
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername"
              ],
              "knowsAbout": [
                "React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript",
                "Node.js", "PHP", "MySQL", "MongoDB", "Tailwind CSS"
              ]
            })
          }}
        />
      </head>
      <body className="custom-scrollbar" suppressHydrationWarning={true}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
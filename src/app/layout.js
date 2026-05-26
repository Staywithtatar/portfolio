import './globals.css';
import { Inter } from 'next/font/google';
import { profile } from '../data/profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.intro,
  keywords: 'web developer, frontend, full-stack, react, next.js, vue, typescript, ERP, e-commerce, freelance',
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL('https://your-domain.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.intro,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: profile.avatar,
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.intro,
    images: [profile.avatar],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preload" href={profile.avatar} as="image" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              jobTitle: profile.title,
              description: profile.intro,
              image: profile.avatar,
              email: `mailto:${profile.email}`,
              address: { '@type': 'PostalAddress', addressCountry: profile.location },
              sameAs: Object.values(profile.social).filter(Boolean),
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Rhasaun Campbell - Portfolio',
  description: 'Strategic product consulting, UX architecture, and design system work for B2B and enterprise teams. Designing software that survives real-world complexity.',
  authors: [{ name: 'Rhasaun Campbell' }],
  keywords: ['Product Strategy', 'UX Architecture', 'Design Systems', 'Digital Transformation', 'AEM', 'Headless CMS', 'Consultant', 'Rhasaun Campbell'],
  openGraph: {
    type: 'website',
    url: 'https://rhasaun.com/',
    title: 'Rhasaun Campbell - Portfolio',
    description: 'Strategic product consulting, UX architecture, and design system work for B2B and enterprise teams.',
    images: [{ url: 'https://rhasaun.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhasaun Campbell - Portfolio',
    description: 'Strategic product consulting, UX architecture, and design system work for B2B and enterprise teams.',
    images: ['https://rhasaun.com/og-image.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rhasaun Campbell",
  "url": "https://rhasaun.com",
  "jobTitle": "Principal Technical Lead & Strategy Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Independent Consultant"
  },
  "sameAs": [
    "https://www.linkedin.com/in/rhasauncampbell/"
  ],
  "description": "Strategic product consulting, UX architecture, and design system work for B2B and enterprise teams. Expert in GTM strategy and Digital Transformation.",
  "knowsAbout": ["Product Strategy", "UX Architecture", "Design Systems", "Digital Transformation", "AEM"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
             __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else if (localStorage.theme === 'light') {
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
              } else {
                document.documentElement.classList.add('dark')
                localStorage.theme = 'dark'
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

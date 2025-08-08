import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://taifatraders.com'),
  title: {
    default: 'Taifa Traders - Global Trading Partner | Premium Import Export Services',
    template: '%s | Taifa Traders'
  },
  description: 'Leading international trading company specializing in premium edible oils, fresh fruits, spices, and food staples. Global sourcing, quality assurance, and logistics solutions from Dhaka, Bangladesh.',
  keywords: [
    'international trading company',
    'global trade services',
    'import export business',
    'edible oils trading',
    'fresh fruits export',
    'spices trading',
    'food staples import',
    'Bangladesh trading company',
    'Dhaka exporters',
    'global sourcing services',
    'quality assurance trading',
    'logistics solutions',
    'premium food products',
    'international commodities',
    'trade consulting services'
  ].join(', '),
  authors: [{ name: 'Taifa Traders', url: 'https://taifatraders.com' }],
  creator: 'Taifa Traders',
  publisher: 'Taifa Traders',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taifatraders.com',
    siteName: 'Taifa Traders',
    title: 'Taifa Traders - Global Trading Partner | Premium Import Export Services',
    description: 'Leading international trading company specializing in premium edible oils, fresh fruits, spices, and food staples. Global sourcing, quality assurance, and logistics solutions.',
    images: [
      {
        url: '/images/logo.png',
        width: 300,
        height: 273,
        alt: 'Taifa Traders Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taifa Traders - Global Trading Partner',
    description: 'Leading international trading company specializing in premium food products and global sourcing solutions.',
    creator: '@taifatraders',
    images: ['/images/logo.png'],
  },
  verification: {
    google: 'google-site-verification-code-here',
    yandex: 'yandex-verification-code-here',
    yahoo: 'yahoo-verification-code-here',
  },
  alternates: {
    canonical: 'https://taifatraders.com',
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taifa Traders",
    "description": "Leading international trading company specializing in premium edible oils, fresh fruits, spices, and food staples.",
    "url": "https://taifatraders.com",
    "logo": "https://taifatraders.com/images/logo.png",
    "image": "https://taifatraders.com/images/logo.png",
    "telephone": "+8801898899026",
    "email": "info@taifatraders.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CWN(A) 3B, Flat-B-1, Road-49, Gulshan-2",
      "addressLocality": "Dhaka",
      "postalCode": "1212",
      "addressCountry": "Bangladesh"
    },
    "sameAs": [
      "https://facebook.com/taifatraders",
      "https://linkedin.com/company/taifatraders",
      "https://twitter.com/taifatraders"
    ],
    "areaServed": "Worldwide",
    "knowsAbout": [
      "International Trading",
      "Import Export Services",
      "Edible Oils Trading",
      "Fresh Fruits Export",
      "Spices Trading",
      "Food Staples Import",
      "Global Sourcing",
      "Quality Assurance",
      "Logistics Solutions"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trading Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Global Sourcing Services",
            "description": "Comprehensive sourcing solutions for premium food products worldwide."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quality Assurance Services",
            "description": "Rigorous quality control and assurance for all traded products."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logistics Solutions",
            "description": "End-to-end logistics and supply chain management services."
          }
        }
      ]
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icon-512x512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#142355" />
        <meta name="msapplication-TileColor" content="#142355" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { scope: '/' })
                    .then(function(registration) {
                      console.log('PWA ServiceWorker registered successfully');
                    })
                    .catch(function(error) {
                      console.log('PWA ServiceWorker registration failed:', error);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body>
        <TopBar />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
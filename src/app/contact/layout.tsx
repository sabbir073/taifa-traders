import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Taifa Traders - Get Your International Trading Quote Today',
  description: 'Contact Taifa Traders for premium international trading services. Get quotes for edible oils, fresh fruits, spices & food staples. Expert team ready to help with your global trade needs.',
  keywords: 'contact Taifa Traders, international trading quote, global trade contact, Bangladesh trading company contact, import export services inquiry, trading consultation',
  openGraph: {
    title: 'Contact Taifa Traders - Get Your International Trading Quote Today',
    description: 'Contact Taifa Traders for premium international trading services. Get quotes for edible oils, fresh fruits, spices & food staples. Expert team ready to help.',
    url: 'https://taifatraders.com/contact',
    images: [
      {
        url: '/images/contact/contact-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Taifa Traders',
      },
    ],
  },
  twitter: {
    title: 'Contact Taifa Traders',
    description: 'Get in touch for premium international trading services. Expert team ready to help with your global trade needs.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
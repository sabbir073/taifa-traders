import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ContentBlocks from '@/components/ContentBlocks'
import AboutUsBlock from '@/components/AboutUsBlock'
import ProductsSection from '@/components/ProductsSection'
import ServicesSection from '@/components/ServicesSection'
import TradePerformance from '@/components/TradePerformance'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'

export const metadata: Metadata = {
  title: 'Taifa Traders - Global Trading Partner | Premium Import Export Services',
  description: 'Leading international trading company from Bangladesh. Premium edible oils, fresh fruits, spices & food staples. Global sourcing, quality assurance & logistics solutions worldwide.',
  keywords: 'Taifa Traders, international trading company, Bangladesh exporters, global trade services, premium food products, edible oils trading, fresh fruits export, spices trading, Dhaka trading company',
  openGraph: {
    title: 'Taifa Traders - Global Trading Partner | Premium Import Export Services',
    description: 'Leading international trading company from Bangladesh. Premium edible oils, fresh fruits, spices & food staples. Global sourcing, quality assurance & logistics solutions worldwide.',
    url: 'https://taifatraders.com',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Taifa Traders - Global Trading Partner',
      },
    ],
  },
  twitter: {
    title: 'Taifa Traders - Global Trading Partner',
    description: 'Leading international trading company from Bangladesh. Premium food products, global sourcing & logistics solutions worldwide.',
  },
  alternates: {
    canonical: 'https://taifatraders.com',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentBlocks />
      <AboutUsBlock />
      <ProductsSection />
      <ServicesSection />
      <TradePerformance />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
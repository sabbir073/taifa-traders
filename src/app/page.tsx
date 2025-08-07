import HeroSection from '@/components/HeroSection'
import ContentBlocks from '@/components/ContentBlocks'
import AboutUsBlock from '@/components/AboutUsBlock'
import ServicesSection from '@/components/ServicesSection'
import TradePerformance from '@/components/TradePerformance'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContentBlocks />
      <AboutUsBlock />
      <ServicesSection />
      <TradePerformance />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
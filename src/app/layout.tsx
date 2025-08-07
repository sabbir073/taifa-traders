import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Taifa Traders - Global Trading Partner',
  description: 'Your trusted global trading partner for import and export services.',
  keywords: 'international trading, global trade, import export, commodities, edible oils, spices, logistics',
  authors: [{ name: 'Taifa Traders' }],
  openGraph: {
    title: 'Taifa Traders - Global Trading Partner',
    description: 'Your trusted global trading partner for import and export services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Taifa Traders - Leading International Trading Company',
  description: 'Learn about Taifa Traders, a forward-thinking international trading company from Bangladesh with 20+ years of experience. Our mission, values, and commitment to excellence in global trade.',
  keywords: 'about Taifa Traders, international trading company history, Bangladesh trading company, global trade expertise, trading company values, company mission vision, Dhaka exporters',
  openGraph: {
    title: 'About Taifa Traders - Leading International Trading Company',
    description: 'Learn about Taifa Traders, a forward-thinking international trading company from Bangladesh with 20+ years of experience. Our mission, values, and commitment to excellence.',
    url: 'https://taifatraders.com/about',
    images: [
      {
        url: '/images/about/company-office.jpg',
        width: 1200,
        height: 630,
        alt: 'Taifa Traders Company Office',
      },
    ],
  },
  twitter: {
    title: 'About Taifa Traders - International Trading Company',
    description: 'Learn about our 20+ years of experience in international trading, our mission, values, and commitment to excellence in global commerce.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/about',
  },
}

const AboutPage = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency in all our dealings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our services, from sourcing to delivery.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative solutions to meet evolving market demands and customer needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Partnership',
      description: 'We build long-term partnerships based on trust, reliability, and mutual success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  const achievements = [
    { number: '20+', label: 'Years Experience', description: 'Two decades of excellence in global trade' },
    { number: '50+', label: 'Countries Served', description: 'Extensive international network coverage' },
    { number: '500+', label: 'Happy Clients', description: 'Satisfied customers worldwide' },
    { number: '$10M+', label: 'Trade Volume', description: 'Annual trading value' }
  ]

  const quickLinks = [
    { title: 'Mission & Vision', href: '/about/mission', description: 'Our purpose and future goals' },
    { title: 'Leadership Team', href: '/about/team', description: 'Meet our experienced leaders' },
    { title: 'Global Network', href: '/about/network', description: 'Our worldwide partnerships' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/company-office.jpg"
            alt="Taifa Traders Office"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            About <span className="text-accent-500">Taifa Traders</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            Over two decades of excellence in international trade, connecting businesses 
            worldwide with reliable and innovative trading solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Get In Touch
            </Link>
            <Link href="/about/mission" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
                Who We Are
              </h2>
              <div className="space-y-6 text-gray-600  leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Taifa Traders</strong> is a forward-thinking international trading company 
                  dedicated to simplifying global commerce for businesses around the world. We move more than just products – 
                  we move possibilities.
                </p>
                <p>
                  With a strong foundation in sourcing, logistics, and compliance, we bring the highest quality products from 
                  global markets directly to our clients, with efficiency and professionalism. What sets us apart is our 
                  agility and client-first mindset.
                </p>
                <p>
                  We don't just trade in goods; we offer tailored solutions based on the specific needs of our partners. 
                  Backed by a reliable network of suppliers and deep knowledge of international markets, we deliver consistent 
                  quality, competitive pricing, and complete support throughout the trading process.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/global-network.jpg"
                  alt="Global Trading Network"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-500 font-poppins mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-900 font-semibold mb-2 font-poppins">
                  {achievement.label}
                </div>
                <p className="text-sm text-gray-600 ">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {value.title}
                </h3>
                <p className="text-gray-600  leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Explore More
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Learn more about our company culture, leadership, and global presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <h3 className="text-2xl font-semibold mb-4 font-poppins">
                    {link.title}
                  </h3>
                  <p className="text-blue-100  mb-6">
                    {link.description}
                  </p>
                  <div className="flex items-center text-accent-500 font-semibold">
                    Learn More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ready to Start Trading with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8  max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Taifa Traders for their international trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              GET STARTED TODAY
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              VIEW PRODUCTS
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
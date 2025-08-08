import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mission & Vision - Taifa Traders Global Trading Excellence',
  description: 'Discover Taifa Traders mission and vision for global trading excellence. Our commitment to quality, sustainability, and bridging businesses across continents through innovative solutions.',
  keywords: 'Taifa Traders mission, company vision, global trading mission, trading company values, international commerce vision, sustainable trading practices',
  openGraph: {
    title: 'Mission & Vision - Taifa Traders Global Trading Excellence',
    description: 'Discover our mission and vision for global trading excellence. Commitment to quality, sustainability, and bridging businesses worldwide.',
    url: 'https://taifatraders.com/about/mission',
    images: [
      {
        url: '/images/about/mission-vision-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Taifa Traders Mission and Vision',
      },
    ],
  },
  twitter: {
    title: 'Mission & Vision - Taifa Traders',
    description: 'Our mission: bridging businesses across continents through innovative global trading solutions and quality assurance.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/about/mission',
  },
}

const MissionVisionPage = () => {
  const missionPoints = [
    {
      title: 'Global Connectivity',
      description: 'Bridge businesses across continents through efficient trade solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Ensure highest standards in every product and service we deliver',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainable Growth',
      description: 'Foster long-term partnerships that benefit all stakeholders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  const visionElements = [
    {
      title: 'Market Leadership',
      description: 'Become the most trusted trading partner in our target markets',
      percentage: '95%',
      color: 'bg-blue-500'
    },
    {
      title: 'Global Expansion',
      description: 'Expand our reach to 100+ countries by 2030',
      percentage: '60%',
      color: 'bg-green-500'
    },
    {
      title: 'Innovation Focus',
      description: 'Lead industry innovation in digital trading solutions',
      percentage: '80%',
      color: 'bg-purple-500'
    },
    {
      title: 'Sustainability',
      description: 'Achieve carbon-neutral operations across all facilities',
      percentage: '45%',
      color: 'bg-orange-500'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/mission-vision-bg.jpg"
            alt="Mission and Vision Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Our Mission & <span className="text-accent-500">Vision</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            Driving global commerce forward through innovation, integrity, and unwavering commitment to excellence.
          </p>
          <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
                Empowering Global Trade Through Excellence
              </h2>
              <div className="text-lg text-gray-600  leading-relaxed space-y-4 mb-8">
                <p>
                  At Taifa Traders, our mission is to <strong className="text-gray-900">simplify international trade</strong> by providing 
                  reliable, efficient, and innovative solutions that connect businesses across the globe.
                </p>
                <p>
                  We are committed to delivering exceptional value through our comprehensive suite of trading services, 
                  from sourcing and procurement to logistics and compliance, ensuring our clients can focus on growing their businesses 
                  while we handle the complexities of global commerce.
                </p>
                <p>
                  Our dedication to quality, transparency, and customer satisfaction drives us to continuously evolve and 
                  adapt to meet the changing needs of the international marketplace.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/mission-image.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Mission Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mb-6 text-white">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {point.title}
                </h3>
                <p className="text-gray-600 ">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/vision-image.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Vision
              </div>
              <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
                Leading the Future of Global Commerce
              </h2>
              <div className="text-lg text-gray-600  leading-relaxed space-y-4 mb-8">
                <p>
                  Our vision is to become the <strong className="text-gray-900">world's most trusted trading partner</strong>, 
                  recognized for our innovation, reliability, and commitment to sustainable business practices.
                </p>
                <p>
                  We envision a future where international trade is seamless, transparent, and accessible to businesses of all sizes, 
                  powered by cutting-edge technology and supported by deep industry expertise.
                </p>
              </div>

              {/* Vision Progress Indicators */}
              <div className="space-y-6">
                {visionElements.map((element, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900 font-poppins">{element.title}</h4>
                      <span className="text-sm font-medium text-gray-500">{element.percentage}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 ">{element.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${element.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: element.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
            Mission & Vision in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto  mb-12">
            Every day, we work towards achieving our mission and vision through concrete actions and measurable results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100 mb-4">Countries Connected</div>
              <p className="text-sm text-blue-100">Expanding our global reach every year</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-green-100 mb-4">Client Satisfaction</div>
              <p className="text-sm text-green-100">Exceeding expectations consistently</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-purple-100 mb-4">Global Support</div>
              <p className="text-sm text-purple-100">Always available when you need us</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/team" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Meet Our Team
            </Link>
            <Link href="/services" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVisionPage
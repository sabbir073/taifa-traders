import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Network - Worldwide Trading Partners | Taifa Traders',
  description: 'Explore Taifa Traders global network spanning 50+ countries. Offices in North America, Europe, Asia Pacific, and strategic partnerships worldwide for seamless international trade.',
  keywords: 'Taifa Traders global network, international trading partners, worldwide offices, global trade network, international business partnerships, trading company locations',
  openGraph: {
    title: 'Global Network - Worldwide Trading Partners | Taifa Traders',
    description: 'Explore our global network spanning 50+ countries. Offices worldwide and strategic partnerships for seamless international trade.',
    url: 'https://taifatraders.com/about/network',
    images: [
      {
        url: '/images/network/global-map.jpg',
        width: 1200,
        height: 630,
        alt: 'Taifa Traders Global Network Map',
      },
    ],
  },
  twitter: {
    title: 'Global Network - Taifa Traders',
    description: 'Our global network spans 50+ countries with strategic partnerships for seamless international trade operations.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/about/network',
  },
}

const GlobalNetworkPage = () => {
  const regions = [
    {
      name: 'North America',
      countries: 8,
      offices: 3,
      partners: 25,
      keyMarkets: ['United States', 'Canada', 'Mexico'],
      description: 'Strong presence in agricultural commodities and processed foods',
      image: '/images/network/north-america.jpg',
      color: 'bg-blue-500'
    },
    {
      name: 'Europe',
      countries: 15,
      offices: 5,
      partners: 40,
      keyMarkets: ['Germany', 'Netherlands', 'United Kingdom', 'France'],
      description: 'Leading supplier of specialty oils and organic products',
      image: '/images/network/europe.jpg',
      color: 'bg-green-500'
    },
    {
      name: 'Asia Pacific',
      countries: 12,
      offices: 4,
      partners: 60,
      keyMarkets: ['China', 'India', 'Japan', 'Southeast Asia'],
      description: 'Major hub for spices, tea, and agricultural commodities',
      image: '/images/network/asia-pacific.jpg',
      color: 'bg-orange-500'
    },
    {
      name: 'Middle East & Africa',
      countries: 10,
      offices: 2,
      partners: 30,
      keyMarkets: ['UAE', 'Saudi Arabia', 'Egypt', 'South Africa'],
      description: 'Strategic gateway for oil and food commodity distribution',
      image: '/images/network/middle-east-africa.jpg',
      color: 'bg-purple-500'
    },
    {
      name: 'South America',
      countries: 6,
      offices: 2,
      partners: 20,
      keyMarkets: ['Brazil', 'Argentina', 'Colombia', 'Chile'],
      description: 'Source of premium agricultural products and raw materials',
      image: '/images/network/south-america.jpg',
      color: 'bg-red-500'
    }
  ]

  const partnerships = [
    {
      type: 'Strategic Suppliers',
      count: '200+',
      description: 'Verified and certified suppliers across all regions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      type: 'Distribution Partners',
      count: '150+',
      description: 'Local distributors ensuring efficient market reach',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      type: 'Logistics Partners',
      count: '75+',
      description: 'Global shipping and freight forwarding network',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      type: 'Financial Partners',
      count: '25+',
      description: 'Banking and financial institutions for trade finance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ]

  const networkStats = [
    { number: '51', label: 'Countries Served', description: 'Global market coverage' },
    { number: '16', label: 'Regional Offices', description: 'Strategic locations worldwide' },
    { number: '175', label: 'Local Partners', description: 'Trusted business relationships' },
    { number: '24/7', label: 'Global Support', description: 'Round-the-clock assistance' }
  ]

  const capabilities = [
    {
      title: 'Multi-Modal Transportation',
      description: 'Sea, air, and land transportation options across all regions',
      features: ['Ocean freight', 'Air cargo', 'Road transport', 'Rail networks']
    },
    {
      title: 'Warehousing & Storage',
      description: 'Strategic storage facilities in key locations worldwide',
      features: ['Temperature controlled', 'Bulk storage', 'Container yards', 'Cross-docking']
    },
    {
      title: 'Customs & Compliance',
      description: 'Expert handling of international trade regulations',
      features: ['Documentation', 'Duty optimization', 'Regulatory compliance', 'Trade finance']
    },
    {
      title: 'Quality Control',
      description: 'Comprehensive quality assurance across the network',
      features: ['Pre-shipment inspection', 'Laboratory testing', 'Certification', 'Traceability']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/network/global-map.jpg"
            alt="Global Network"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Our <span className="text-accent-500">Global Network</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            A comprehensive worldwide network connecting markets, suppliers, and opportunities across five continents.
          </p>
          <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Expand With Us
          </Link>
        </div>
      </section>

      {/* Network Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-500 font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-semibold mb-2 font-poppins text-sm md:text-base">
                  {stat.label}
                </div>
                <p className="text-xs md:text-sm text-gray-600 ">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Regional Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Our strategic presence across major economic regions ensures efficient trade operations and local market expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white font-poppins">
                      {region.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 font-poppins">{region.countries}</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 font-poppins">{region.offices}</div>
                      <div className="text-sm text-gray-600">Offices</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 font-poppins">{region.partners}</div>
                      <div className="text-sm text-gray-600">Partners</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600  mb-4 leading-relaxed">
                    {region.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 font-poppins">Key Markets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.keyMarkets.map((market, marketIndex) => (
                        <span key={marketIndex} className={`${region.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Our success is built on strong partnerships with industry leaders across the global supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {partnership.icon}
                </div>
                <div className="text-3xl font-bold text-primary-600 font-poppins mb-2">
                  {partnership.count}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">
                  {partnership.type}
                </h3>
                <p className="text-gray-600  text-sm">
                  {partnership.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Global Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Comprehensive services and infrastructure to support your international trading needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {capability.title}
                </h3>
                <p className="text-gray-600  mb-6 leading-relaxed">
                  {capability.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700 ">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Expansion */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Expanding Our Reach
          </h2>
          <p className="text-xl text-blue-100 mb-12  max-w-3xl mx-auto">
            We're continuously growing our global network to better serve our clients and explore new market opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">2025</div>
              <div className="text-blue-100 mb-4">Target: 65 Countries</div>
              <p className="text-sm text-blue-100">Expanding into emerging markets</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">5 New</div>
              <div className="text-blue-100 mb-4">Regional Offices</div>
              <p className="text-sm text-blue-100">Strategic locations in growth markets</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-100 mb-4">New Partnerships</div>
              <p className="text-sm text-blue-100">Building stronger global connections</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Explore Our Services
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default GlobalNetworkPage
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Sourcing Services - Premium Supplier Network | Taifa Traders',
  description: 'Professional global sourcing services with verified suppliers worldwide. Market intelligence, quality audits, cost optimization, and supply chain management for international trade.',
  keywords: 'global sourcing services, supplier verification, international procurement, supply chain management, market intelligence, quality audits, cost optimization, global suppliers',
  openGraph: {
    title: 'Global Sourcing Services - Premium Supplier Network | Taifa Traders',
    description: 'Professional global sourcing with verified suppliers worldwide. Market intelligence and quality audits for optimal procurement decisions.',
    url: 'https://taifatraders.com/services/sourcing',
    images: [
      {
        url: '/images/services/global-sourcing.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Sourcing Services by Taifa Traders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Sourcing Services - Premium Supplier Network',
    description: 'Professional global sourcing with verified suppliers worldwide. Market intelligence and quality audits.',
    images: ['/images/services/global-sourcing.jpg'],
  },
}

const SourcingPage = () => {
  const sourcingCapabilities = [
    {
      title: 'Supplier Verification',
      description: 'Comprehensive due diligence on potential suppliers including financial stability, production capacity, and quality standards.',
      features: ['Financial Assessment', 'Production Audits', 'Quality Certifications', 'Compliance Verification'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Market Intelligence',
      description: 'Real-time market data and trend analysis to identify optimal sourcing opportunities and pricing strategies.',
      features: ['Price Monitoring', 'Supply Forecasting', 'Market Trends', 'Competitive Analysis'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Price Negotiation',
      description: 'Expert negotiation strategies leveraging market knowledge and volume advantages to secure competitive pricing.',
      features: ['Volume Discounts', 'Long-term Contracts', 'Payment Terms', 'Risk Mitigation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk evaluation including political, economic, and operational factors affecting supply chains.',
      features: ['Country Risk Analysis', 'Supply Chain Mapping', 'Contingency Planning', 'Insurance Solutions'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ]

  const globalNetwork = [
    {
      region: 'Asia Pacific',
      countries: 15,
      suppliers: 120,
      specialties: ['Agricultural Products', 'Spices & Seasonings', 'Textiles', 'Electronics'],
      keyLocations: ['China', 'India', 'Thailand', 'Vietnam', 'Indonesia']
    },
    {
      region: 'Europe',
      countries: 12,
      suppliers: 85,
      specialties: ['Food Processing', 'Organic Products', 'Technology', 'Automotive Parts'],
      keyLocations: ['Germany', 'Netherlands', 'Spain', 'Italy', 'Poland']
    },
    {
      region: 'North America',
      countries: 3,
      suppliers: 45,
      specialties: ['Advanced Materials', 'Chemicals', 'Machinery', 'Health Products'],
      keyLocations: ['USA', 'Canada', 'Mexico']
    },
    {
      region: 'South America',
      countries: 8,
      suppliers: 60,
      specialties: ['Agricultural Commodities', 'Raw Materials', 'Food Products', 'Minerals'],
      keyLocations: ['Brazil', 'Argentina', 'Chile', 'Peru', 'Colombia']
    },
    {
      region: 'Middle East & Africa',
      countries: 10,
      suppliers: 40,
      specialties: ['Oil & Petrochemicals', 'Agricultural Products', 'Minerals', 'Textiles'],
      keyLocations: ['UAE', 'Saudi Arabia', 'Egypt', 'South Africa', 'Morocco']
    }
  ]

  const sourcingProcess = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understanding your specific product requirements, quality standards, and business objectives.',
      activities: ['Product Specification Review', 'Quality Requirements', 'Volume Projections', 'Timeline Planning']
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'Comprehensive market analysis to identify optimal sourcing opportunities worldwide.',
      activities: ['Supplier Database Search', 'Market Price Analysis', 'Capacity Assessment', 'Risk Evaluation']
    },
    {
      step: '03',
      title: 'Supplier Evaluation',
      description: 'Rigorous assessment of potential suppliers based on multiple criteria.',
      activities: ['Financial Due Diligence', 'Quality Audits', 'Certification Verification', 'Reference Checks']
    },
    {
      step: '04',
      title: 'Negotiation & Contracting',
      description: 'Expert negotiation to secure favorable terms and comprehensive contracts.',
      activities: ['Price Negotiation', 'Terms & Conditions', 'Contract Drafting', 'Legal Review']
    },
    {
      step: '05',
      title: 'Implementation & Monitoring',
      description: 'Ongoing management and performance monitoring of sourcing relationships.',
      activities: ['Performance Tracking', 'Quality Monitoring', 'Relationship Management', 'Continuous Improvement']
    }
  ]

  const caseStudies = [
    {
      title: 'Agricultural Commodities Sourcing',
      client: 'Fortune 500 Food Manufacturer',
      challenge: 'Sourcing organic grains from multiple regions while maintaining consistent quality and pricing.',
      solution: 'Established direct relationships with certified organic farms across 4 continents with quality assurance protocols.',
      results: ['25% cost reduction', '99.8% quality consistency', '15% faster delivery times', '3-year stable pricing'],
      industry: 'Food & Agriculture'
    },
    {
      title: 'Specialty Chemical Procurement',
      client: 'Global Chemical Company',
      challenge: 'Finding reliable suppliers for specialized chemical compounds with strict regulatory requirements.',
      solution: 'Identified and qualified 5 alternative suppliers across different regions with full compliance documentation.',
      results: ['40% supply chain resilience', '20% cost optimization', '100% regulatory compliance', 'Zero supply disruptions'],
      industry: 'Chemicals & Materials'
    },
    {
      title: 'Electronic Components Sourcing',
      client: 'Technology Manufacturer',
      challenge: 'Securing reliable supply of semiconductor components during global shortages.',
      solution: 'Leveraged relationships with multiple suppliers and implemented strategic inventory management.',
      results: ['Maintained 95% production capacity', '30% inventory optimization', 'No production delays', 'Competitive pricing secured'],
      industry: 'Technology & Electronics'
    }
  ]

  const benefits = [
    { metric: '35%', description: 'Average cost reduction achieved', icon: '💰' },
    { metric: '200+', description: 'Verified global suppliers', icon: '🌍' },
    { metric: '99.5%', description: 'Supplier reliability rate', icon: '✅' },
    { metric: '48hrs', description: 'Average response time', icon: '⚡' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/global-sourcing.jpg"
            alt="Global Sourcing"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Services / Global Sourcing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Global <span className="text-yellow-300">Sourcing Solutions</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            Strategic procurement services connecting you with verified suppliers worldwide for premium quality products at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Start Sourcing Project
            </Link>
            <Link href="#capabilities" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 font-poppins mb-2">
                  {benefit.metric}
                </div>
                <p className="text-sm text-gray-600 ">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Sourcing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Comprehensive sourcing solutions backed by deep market knowledge and global supplier networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sourcingCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        <span className="">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Global Supplier Network
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Access to verified suppliers across five continents with specialized expertise in key product categories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {globalNetwork.map((network, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {network.region}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 font-poppins">{network.countries}</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 font-poppins">{network.suppliers}</div>
                    <div className="text-sm text-gray-600">Suppliers</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {network.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Key Locations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {network.keyLocations.map((location, locIndex) => (
                      <span key={locIndex} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              A systematic approach ensuring optimal supplier selection and successful project implementation.
            </p>
          </div>

          <div className="space-y-8">
            {sourcingProcess.map((process, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-11' : ''}`}>
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {process.step}
                  </div>
                </div>

                <div className={`lg:col-span-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {process.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {process.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          <span className="">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Real-world examples of successful sourcing projects delivering measurable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">
                  {study.title}
                </h3>
                <div className="text-sm text-gray-500 mb-4 ">
                  Client: {study.client}
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Challenge:</h4>
                    <p className="text-gray-600 text-sm ">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Solution:</h4>
                    <p className="text-gray-600 text-sm ">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm text-green-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ready to Optimize Your Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-12  max-w-3xl mx-auto">
            Let our sourcing experts help you identify the best suppliers worldwide and achieve significant cost savings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-blue-100 mb-4">Initial Consultation</div>
              <p className="text-sm text-blue-100">Comprehensive sourcing assessment</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">30 Days</div>
              <div className="text-blue-100 mb-4">Supplier Identification</div>
              <p className="text-sm text-blue-100">Complete supplier evaluation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Guaranteed</div>
              <div className="text-blue-100 mb-4">Cost Savings</div>
              <p className="text-sm text-blue-100">Measurable ROI or money back</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Start Your Sourcing Project
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SourcingPage
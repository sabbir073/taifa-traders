import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trading Services - Global Sourcing, Quality Assurance & Logistics | Taifa Traders',
  description: 'Comprehensive international trading services: global sourcing, quality assurance, logistics solutions, and trade consulting. 98% client satisfaction with 500+ successful projects.',
  keywords: 'international trading services, global sourcing solutions, quality assurance services, logistics management, trade consulting, supply chain management, import export services, trade finance',
  openGraph: {
    title: 'Trading Services - Global Sourcing, Quality Assurance & Logistics | Taifa Traders',
    description: 'Comprehensive international trading services: global sourcing, quality assurance, logistics solutions, and trade consulting. 98% client satisfaction with 500+ successful projects.',
    url: 'https://taifatraders.com/services',
    images: [
      {
        url: '/images/services/services-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Taifa Traders Trading Services',
      },
    ],
  },
  twitter: {
    title: 'Trading Services by Taifa Traders',
    description: 'Comprehensive international trading services with 98% client satisfaction and 500+ successful projects worldwide.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/services',
  },
}

const ServicesPage = () => {
  const mainServices = [
    {
      id: 'sourcing',
      title: 'Global Sourcing',
      subtitle: 'Strategic Product Procurement',
      description: 'Comprehensive sourcing solutions connecting you with verified suppliers worldwide for premium quality products at competitive prices.',
      image: '/images/services/global-sourcing.jpg',
      features: ['Supplier Verification', 'Market Analysis', 'Price Negotiation', 'Risk Assessment'],
      benefits: ['Cost Optimization', 'Quality Assurance', 'Supply Chain Reliability', 'Market Access'],
      stats: { number: '200+', label: 'Verified Suppliers', description: 'Across 50+ countries' }
    },
    {
      id: 'quality',
      title: 'Quality Assurance',
      subtitle: 'Comprehensive Quality Control',
      description: 'End-to-end quality management ensuring every product meets international standards through rigorous testing and certification processes.',
      image: '/images/services/quality-assurance.jpg',
      features: ['Pre-shipment Inspection', 'Laboratory Testing', 'Certification Management', 'Traceability Systems'],
      benefits: ['Compliance Guarantee', 'Risk Mitigation', 'Brand Protection', 'Customer Satisfaction'],
      stats: { number: '99.8%', label: 'Quality Rating', description: 'Consistent excellence' }
    },
    {
      id: 'logistics',
      title: 'Global Logistics',
      subtitle: 'Efficient Supply Chain Management',
      description: 'Seamless logistics solutions from origin to destination with optimized routes, warehousing, and distribution networks.',
      image: '/images/services/global-logistics.jpg',
      features: ['Multi-modal Transport', 'Warehousing Solutions', 'Customs Clearance', 'Last-mile Delivery'],
      benefits: ['On-time Delivery', 'Cost Efficiency', 'Global Reach', 'Inventory Optimization'],
      stats: { number: '24/7', label: 'Operations', description: 'Continuous monitoring' }
    },
    {
      id: 'consulting',
      title: 'Trade Consulting',
      subtitle: 'Expert Market Intelligence',
      description: 'Strategic consulting services providing market insights, regulatory guidance, and business development support for international trade.',
      image: '/images/services/trade-consulting.jpg',
      features: ['Market Research', 'Regulatory Compliance', 'Business Strategy', 'Risk Management'],
      benefits: ['Informed Decisions', 'Regulatory Compliance', 'Market Entry', 'Competitive Advantage'],
      stats: { number: '500+', label: 'Successful Projects', description: 'Across all industries' }
    }
  ]

  const additionalServices = [
    {
      title: 'Private Labeling',
      description: 'Custom packaging and branding solutions for your market',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: 'Financial Services',
      description: 'Trade finance, letters of credit, and payment solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Documentation',
      description: 'Complete trade documentation and customs paperwork',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Market Intelligence',
      description: 'Real-time market data and trend analysis',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Technology Solutions',
      description: 'Digital platforms for order tracking and management',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Sustainability Consulting',
      description: 'ESG compliance and sustainable sourcing guidance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  const serviceProcess = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Understanding your specific requirements and objectives',
      details: ['Needs Assessment', 'Market Analysis', 'Solution Design', 'Proposal Development']
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Developing comprehensive strategy and implementation roadmap',
      details: ['Strategic Planning', 'Resource Allocation', 'Timeline Development', 'Risk Assessment']
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implementing solutions with continuous monitoring and optimization',
      details: ['Solution Implementation', 'Quality Control', 'Progress Monitoring', 'Performance Optimization']
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support and continuous improvement initiatives',
      details: ['24/7 Support', 'Performance Reviews', 'Continuous Improvement', 'Strategic Guidance']
    }
  ]

  const industryExpertise = [
    {
      industry: 'Food & Beverage',
      experience: '20+ years',
      specialties: ['HACCP Compliance', 'Organic Certification', 'Nutritional Analysis', 'Shelf-life Testing'],
      clients: '300+'
    },
    {
      industry: 'Agriculture',
      experience: '15+ years',
      specialties: ['Farm-to-Table', 'Seasonal Planning', 'Weather Risk', 'Sustainable Practices'],
      clients: '150+'
    },
    {
      industry: 'Manufacturing',
      experience: '18+ years',
      specialties: ['Supply Chain', 'JIT Delivery', 'Quality Systems', 'Cost Optimization'],
      clients: '200+'
    },
    {
      industry: 'Retail & Distribution',
      experience: '12+ years',
      specialties: ['Category Management', 'Inventory Planning', 'Consumer Trends', 'Brand Development'],
      clients: '100+'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/services-hero.jpg"
            alt="Our Services"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Comprehensive <span className="text-accent-500">Trading Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            End-to-end solutions for international trade, from sourcing and quality control to logistics and market intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Get Started
            </Link>
            <Link href="#services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Core Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Comprehensive solutions designed to streamline your international trading operations and maximize success.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-3xl font-bold mb-2">{service.stats.number}</div>
                      <div className="text-lg font-medium">{service.stats.label}</div>
                      <div className="text-sm opacity-80">{service.stats.description}</div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <div className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {service.subtitle}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 font-poppins mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600  leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                            <span className=" text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 font-poppins">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                            <span className=" text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Complementary services to enhance your trading operations and maximize business potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 ">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              A proven methodology ensuring successful project delivery and long-term partnership success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {process.title}
                </h3>
                <p className="text-gray-600  mb-6 leading-relaxed">
                  {process.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {process.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-600 ">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < serviceProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 w-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Deep industry knowledge and specialized expertise across key sectors and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryExpertise.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                      {industry.industry}
                    </h3>
                    <div className="text-accent-500 font-semibold">{industry.experience} experience</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-600">{industry.clients}</div>
                    <div className="text-sm text-gray-600">Active Clients</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Specialties:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.specialties.map((specialty, specIndex) => (
                      <div key={specIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="">{specialty}</span>
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ready to Transform Your Trading Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-12  max-w-3xl mx-auto">
            Partner with us to access comprehensive trading services that will streamline your operations and drive growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">15min</div>
              <div className="text-blue-100 mb-4">Response Time</div>
              <p className="text-sm text-blue-100">Quick initial consultation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100 mb-4">Client Satisfaction</div>
              <p className="text-sm text-blue-100">Exceeding expectations consistently</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100 mb-4">Successful Projects</div>
              <p className="text-sm text-blue-100">Proven track record</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Start Your Project
            </Link>
            <Link href="/about/team" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Meet Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
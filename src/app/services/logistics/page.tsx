import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Global Logistics Solutions - Multi-Modal Transportation & Warehousing | Taifa Traders',
  description: 'Comprehensive global logistics solutions with multi-modal transportation, warehousing, customs clearance, and last-mile delivery. 99.2% on-time delivery rate.',
  keywords: 'global logistics solutions, multi-modal transportation, ocean freight, air cargo, warehousing services, customs clearance, last-mile delivery, supply chain management',
  openGraph: {
    title: 'Global Logistics Solutions - Multi-Modal Transportation & Warehousing | Taifa Traders',
    description: 'Comprehensive global logistics with multi-modal transportation, warehousing, and customs clearance. 99.2% on-time delivery rate.',
    url: 'https://taifatraders.com/services/logistics',
    images: [
      {
        url: '/images/services/global-logistics.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Logistics Solutions by Taifa Traders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Logistics Solutions - Multi-Modal Transportation',
    description: 'Comprehensive global logistics with 99.2% on-time delivery rate.',
    images: ['/images/services/global-logistics.jpg'],
  },
}

const LogisticsPage = () => {
  const logisticsServices = [
    {
      title: 'Multi-Modal Transportation',
      description: 'Comprehensive transportation solutions utilizing sea, air, rail, and road networks for optimal cost and time efficiency.',
      features: ['Ocean Freight', 'Air Cargo', 'Rail Transport', 'Road Logistics'],
      coverage: 'Global network',
      capacity: '50,000+ TEU annually',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'Warehousing Solutions',
      description: 'Strategic warehousing and distribution centers with advanced inventory management and fulfillment capabilities.',
      features: ['Temperature Control', 'Inventory Management', 'Cross-docking', 'Pick & Pack'],
      coverage: '25 locations worldwide',
      capacity: '500,000 sqft storage',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Customs Clearance',
      description: 'Expert customs brokerage services ensuring smooth clearance and compliance with international trade regulations.',
      features: ['Documentation', 'Duty Optimization', 'Compliance Management', 'Expedited Processing'],
      coverage: '50+ countries',
      capacity: '10,000+ clearances/month',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Last-Mile Delivery',
      description: 'Efficient final-mile delivery solutions ensuring products reach customers safely and on time.',
      features: ['Route Optimization', 'Real-time Tracking', 'Proof of Delivery', 'Same-day Options'],
      coverage: 'Urban & rural areas',
      capacity: '99.2% on-time delivery',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const transportationModes = [
    {
      mode: 'Ocean Freight',
      description: 'Cost-effective solution for high-volume shipments with comprehensive port coverage.',
      advantages: ['Lowest cost per unit', 'High capacity', 'Environmentally friendly', 'Global coverage'],
      transitTime: '15-45 days',
      bestFor: 'Large volumes, non-urgent shipments',
      coverage: '200+ ports worldwide'
    },
    {
      mode: 'Air Cargo',
      description: 'Fast and reliable air freight services for time-sensitive and high-value goods.',
      advantages: ['Fastest transit times', 'High security', 'Temperature control', 'Reduced packaging'],
      transitTime: '1-7 days',
      bestFor: 'Urgent, high-value, perishable goods',
      coverage: '150+ airports globally'
    },
    {
      mode: 'Rail Transport',
      description: 'Efficient overland transport connecting major trade routes across continents.',
      advantages: ['Cost-effective', 'Reliable schedules', 'Large capacity', 'Weather independent'],
      transitTime: '10-25 days',
      bestFor: 'Bulk goods, regular shipments',
      coverage: 'Major rail networks'
    },
    {
      mode: 'Road Logistics',
      description: 'Flexible door-to-door delivery solutions with complete control over timing.',
      advantages: ['Door-to-door service', 'Flexible scheduling', 'Real-time tracking', 'Quick loading'],
      transitTime: '1-15 days',
      bestFor: 'Regional distribution, urgent delivery',
      coverage: 'Extensive road networks'
    }
  ]

  const technologySolutions = [
    {
      technology: 'IoT Tracking',
      description: 'Real-time monitoring of shipments with sensors for location, temperature, and condition.',
      benefits: ['Real-time visibility', 'Proactive alerts', 'Condition monitoring', 'Damage prevention'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      )
    },
    {
      technology: 'Blockchain Integration',
      description: 'Immutable documentation and transparent supply chain visibility using blockchain technology.',
      benefits: ['Document security', 'Supply chain transparency', 'Fraud prevention', 'Smart contracts'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      technology: 'AI Optimization',
      description: 'Artificial intelligence for route optimization, demand forecasting, and automated decision-making.',
      benefits: ['Route optimization', 'Predictive analytics', 'Cost reduction', 'Automated planning'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      technology: 'Digital Platform',
      description: 'Comprehensive digital platform for shipment management, tracking, and customer communication.',
      benefits: ['Centralized management', 'Customer portal', 'Automated reporting', 'API integration'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  const logisticsMetrics = [
    { metric: '99.2%', description: 'On-time delivery rate', icon: '🚚' },
    { metric: '24/7', description: 'Real-time tracking', icon: '📍' },
    { metric: '200+', description: 'Global destinations', icon: '🌍' },
    { metric: '< 0.1%', description: 'Damage/loss rate', icon: '🛡️' }
  ]

  const specialtyServices = [
    {
      service: 'Cold Chain Logistics',
      description: 'Temperature-controlled transportation for perishable and pharmaceutical products.',
      features: ['Temperature monitoring', 'Refrigerated containers', 'Backup systems', 'Compliance documentation'],
      applications: 'Food, pharmaceuticals, chemicals'
    },
    {
      service: 'Hazardous Materials',
      description: 'Specialized handling and transportation of dangerous goods with full regulatory compliance.',
      features: ['Certified personnel', 'Proper packaging', 'Safety documentation', 'Emergency response'],
      applications: 'Chemicals, batteries, compressed gases'
    },
    {
      service: 'Project Cargo',
      description: 'Heavy lift and oversized cargo transportation requiring specialized equipment and planning.',
      features: ['Route surveys', 'Special equipment', 'Permit management', 'Engineering support'],
      applications: 'Machinery, construction equipment, industrial projects'
    },
    {
      service: 'Express Services',
      description: 'Time-critical delivery solutions for urgent shipments with guaranteed delivery times.',
      features: ['Priority handling', 'Dedicated transport', 'Expedited customs', '24/7 monitoring'],
      applications: 'Urgent parts, documents, samples'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/global-logistics.jpg"
            alt="Global Logistics"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-orange-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Services / Global Logistics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Global <span className="text-yellow-300">Logistics Solutions</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Seamless logistics solutions from origin to destination with optimized routes, warehousing, and distribution networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Get Logistics Quote
            </Link>
            <Link href="#services" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Logistics Services
            </Link>
          </div>
        </div>
      </section>

      {/* Logistics Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 font-poppins mb-2">
                  {metric.metric}
                </div>
                <p className="text-sm text-gray-600">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Logistics Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Comprehensive Logistics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end logistics solutions covering every aspect of supply chain management and distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logisticsServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coverage:</span>
                    <span className="font-medium text-gray-900">{service.coverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity:</span>
                    <span className="font-medium text-gray-900">{service.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Modes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Transportation Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible transportation options tailored to your specific requirements and budget constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportationModes.map((mode, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {mode.mode}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mode.description}
                </p>
                
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Key Advantages:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {mode.advantages.map((advantage, advIndex) => (
                        <div key={advIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                          <span>{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Transit Time:</span>
                    <span className="font-medium text-gray-900">{mode.transitTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-medium text-gray-900">{mode.bestFor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coverage:</span>
                    <span className="font-medium text-gray-900">{mode.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Technology-Driven Logistics
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions enhancing efficiency, visibility, and control over your supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologySolutions.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {tech.technology}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {tech.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins text-sm">Benefits:</h4>
                  <div className="space-y-2">
                    {tech.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-orange-500 rounded-full mr-2"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Specialty Logistics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized handling for unique cargo requirements with expert knowledge and dedicated resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((specialty, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {specialty.service}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {specialty.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Specialized Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {specialty.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-gray-500">Applications: </span>
                  <span className="font-medium text-gray-900">{specialty.applications}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Streamline Your Global Logistics
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Partner with us for comprehensive logistics solutions that reduce costs, improve efficiency, and ensure reliable delivery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-orange-100 mb-4">Logistics Assessment</div>
              <p className="text-sm text-orange-100">Comprehensive supply chain analysis</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-orange-100 mb-4">Cost Reduction</div>
              <p className="text-sm text-orange-100">Average logistics cost savings</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Real-time</div>
              <div className="text-orange-100 mb-4">Shipment Tracking</div>
              <p className="text-sm text-orange-100">Complete visibility and control</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Get Logistics Quote
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogisticsPage
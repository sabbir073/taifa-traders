import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trade Consulting Services - Market Research & Strategy | Taifa Traders',
  description: 'Expert trade consulting services with market research, regulatory compliance guidance, strategic planning, and risk management for international trade success.',
  keywords: 'trade consulting services, market research analysis, international trade strategy, regulatory compliance, risk management, trade finance, market entry consulting',
  openGraph: {
    title: 'Trade Consulting Services - Market Research & Strategy | Taifa Traders',
    description: 'Expert trade consulting with market research, regulatory guidance, and strategic planning for international trade success.',
    url: 'https://taifatraders.com/services/consulting',
    images: [
      {
        url: '/images/services/trade-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'Trade Consulting Services by Taifa Traders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Consulting Services - Market Research & Strategy',
    description: 'Expert trade consulting with market research and strategic planning for international trade.',
    images: ['/images/services/trade-consulting.jpg'],
  },
}

const ConsultingPage = () => {
  const consultingServices = [
    {
      title: 'Market Research & Analysis',
      description: 'Comprehensive market intelligence providing insights into trends, opportunities, and competitive landscapes.',
      features: ['Market Sizing', 'Trend Analysis', 'Competitive Intelligence', 'Consumer Insights'],
      deliverables: 'Market reports, trend analysis, competitive mapping',
      timeline: '2-4 weeks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Regulatory Compliance',
      description: 'Expert guidance on international trade regulations, tariffs, and compliance requirements.',
      features: ['Trade Regulations', 'Customs Requirements', 'Documentation', 'Certification Guidance'],
      deliverables: 'Compliance matrices, documentation templates, procedure guides',
      timeline: '1-3 weeks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Business Strategy Development',
      description: 'Strategic planning and business development support for international market expansion.',
      features: ['Strategic Planning', 'Market Entry Strategy', 'Partnership Development', 'Business Modeling'],
      deliverables: 'Strategic plans, business models, implementation roadmaps',
      timeline: '3-6 weeks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for international trading operations.',
      features: ['Risk Assessment', 'Mitigation Strategies', 'Insurance Solutions', 'Contingency Planning'],
      deliverables: 'Risk assessments, mitigation plans, insurance recommendations',
      timeline: '2-4 weeks',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ]

  const expertiseAreas = [
    {
      area: 'Trade Finance',
      description: 'Expert guidance on international trade finance instruments and solutions.',
      services: ['Letters of Credit', 'Trade Credit Insurance', 'Export Financing', 'Payment Terms'],
      experience: '15+ years',
      clients: '200+'
    },
    {
      area: 'Supply Chain Optimization',
      description: 'Strategic optimization of global supply chains for efficiency and cost reduction.',
      services: ['Network Design', 'Inventory Optimization', 'Vendor Management', 'Performance Metrics'],
      experience: '12+ years',
      clients: '150+'
    },
    {
      area: 'Market Entry Strategy',
      description: 'Comprehensive market entry planning and execution support.',
      services: ['Market Assessment', 'Entry Strategy', 'Partner Selection', 'Go-to-Market Plans'],
      experience: '18+ years',
      clients: '180+'
    },
    {
      area: 'Digital Transformation',
      description: 'Technology adoption and digital transformation in international trade.',
      services: ['Technology Assessment', 'Digital Strategy', 'System Integration', 'Process Automation'],
      experience: '8+ years',
      clients: '100+'
    },
    {
      area: 'Sustainability Consulting',
      description: 'ESG compliance and sustainable trading practices implementation.',
      services: ['ESG Assessment', 'Sustainability Strategy', 'Carbon Footprint', 'Ethical Sourcing'],
      experience: '10+ years',
      clients: '120+'
    },
    {
      area: 'Crisis Management',
      description: 'Business continuity and crisis response planning for global operations.',
      services: ['Continuity Planning', 'Crisis Response', 'Recovery Strategies', 'Risk Communication'],
      experience: '20+ years',
      clients: '90+'
    }
  ]

  const consultingProcess = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      activities: ['Stakeholder interviews', 'Current state assessment', 'Requirements gathering', 'Success criteria definition'],
      deliverables: ['Project charter', 'Assessment report', 'Work plan']
    },
    {
      phase: 'Analysis',
      duration: '2-4 weeks',
      activities: ['Data collection', 'Market research', 'Competitive analysis', 'Gap analysis'],
      deliverables: ['Market analysis', 'Findings report', 'Opportunity assessment']
    },
    {
      phase: 'Strategy Development',
      duration: '2-3 weeks',
      activities: ['Strategy formulation', 'Option evaluation', 'Risk assessment', 'Implementation planning'],
      deliverables: ['Strategic recommendations', 'Implementation roadmap', 'Risk mitigation plan']
    },
    {
      phase: 'Implementation Support',
      duration: 'Ongoing',
      activities: ['Change management', 'Progress monitoring', 'Course correction', 'Performance measurement'],
      deliverables: ['Implementation guidance', 'Progress reports', 'Performance metrics']
    }
  ]

  const industryFocus = [
    {
      industry: 'Food & Agriculture',
      expertise: ['Supply chain traceability', 'Food safety regulations', 'Organic certification', 'Seasonal planning'],
      projects: '150+',
      specialization: 'Farm-to-table supply chain optimization'
    },
    {
      industry: 'Manufacturing',
      expertise: ['Lean operations', 'Quality systems', 'Supply chain resilience', 'Digital transformation'],
      projects: '120+',
      specialization: 'Global manufacturing network optimization'
    },
    {
      industry: 'Technology',
      expertise: ['Innovation management', 'IP protection', 'Market penetration', 'Partnership strategies'],
      projects: '80+',
      specialization: 'Technology commercialization strategies'
    },
    {
      industry: 'Healthcare & Pharma',
      expertise: ['Regulatory compliance', 'Clinical trials', 'Supply chain security', 'Quality assurance'],
      projects: '60+',
      specialization: 'Pharmaceutical supply chain management'
    }
  ]

  const consultingMetrics = [
    { metric: '500+', description: 'Projects completed', icon: '📊' },
    { metric: '98%', description: 'Client satisfaction', icon: '⭐' },
    { metric: '25+', description: 'Industry experts', icon: '👥' },
    { metric: '20+', description: 'Years experience', icon: '🏆' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/trade-consulting.jpg"
            alt="Trade Consulting"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-purple-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Services / Trade Consulting
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Trade <span className="text-yellow-300">Consulting Excellence</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            Strategic consulting services providing market insights, regulatory guidance, and business development support for international trade success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Schedule Consultation
            </Link>
            <Link href="#services" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Our Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Consulting Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 font-poppins mb-2">
                  {metric.metric}
                </div>
                <p className="text-sm text-gray-600 ">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Consulting Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Strategic Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Expert consulting services designed to optimize your international trading operations and drive strategic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
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
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Key Areas:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          <span className="">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deliverables:</span>
                    <span className="font-medium text-gray-900 text-right">{service.deliverables}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="font-medium text-gray-900">{service.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Specialized knowledge and proven experience across key areas of international trade and business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((expertise, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">
                  {expertise.area}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {expertise.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Services:</h4>
                  <div className="space-y-2">
                    {expertise.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                        <span className="">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm pt-4 border-t border-purple-100">
                  <div>
                    <span className="text-gray-500">Experience: </span>
                    <span className="font-medium text-purple-600">{expertise.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Clients: </span>
                    <span className="font-medium text-purple-600">{expertise.clients}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Consulting Methodology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              A proven approach ensuring thorough analysis, strategic insights, and successful implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg relative">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                    {process.phase}
                  </h3>
                  <div className="text-sm text-purple-600 font-medium">
                    {process.duration}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins text-sm">Key Activities:</h4>
                    <div className="space-y-2">
                      {process.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                          <span className="">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins text-sm">Deliverables:</h4>
                    <div className="space-y-2">
                      {process.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></div>
                          <span className="">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < consultingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Industry Specialization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Deep industry knowledge and specialized expertise across key sectors and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryFocus.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-2">
                      {industry.industry}
                    </h3>
                    <div className="text-purple-600 font-semibold">{industry.projects} projects completed</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Core Expertise:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {industry.expertise.map((expert, expertIndex) => (
                      <div key={expertIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="">{expert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 font-poppins text-sm">Specialization:</h4>
                  <p className="text-gray-600 text-sm ">
                    {industry.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Transform Your Trading Strategy
          </h2>
          <p className="text-xl text-purple-100 mb-12  max-w-3xl mx-auto">
            Partner with our expert consultants to develop winning strategies that drive growth and optimize your international trading operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-purple-100 mb-4">Strategy Session</div>
              <p className="text-sm text-purple-100">Initial strategic consultation</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Custom</div>
              <div className="text-purple-100 mb-4">Solutions</div>
              <p className="text-sm text-purple-100">Tailored to your specific needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Proven</div>
              <div className="text-purple-100 mb-4">Results</div>
              <p className="text-sm text-purple-100">Track record of success</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Schedule Consultation
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConsultingPage
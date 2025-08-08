import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quality Assurance Services - International Standards & Certifications | Taifa Traders',
  description: 'Comprehensive quality assurance services with international certifications. Pre-shipment inspections, laboratory testing, compliance verification, and quality control for global trade.',
  keywords: 'quality assurance services, international quality standards, pre-shipment inspection, laboratory testing, food safety compliance, ISO certification, HACCP, quality control',
  openGraph: {
    title: 'Quality Assurance Services - International Standards & Certifications | Taifa Traders',
    description: 'Comprehensive quality assurance with international certifications. Pre-shipment inspections and compliance verification for global trade.',
    url: 'https://taifatraders.com/services/quality',
    images: [
      {
        url: '/images/services/quality-assurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Quality Assurance Services by Taifa Traders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality Assurance Services - International Standards',
    description: 'Comprehensive quality assurance with international certifications for global trade.',
    images: ['/images/services/quality-assurance.jpg'],
  },
}

const QualityPage = () => {
  const qualityServices = [
    {
      title: 'Pre-shipment Inspection',
      description: 'Comprehensive quality inspections at origin to ensure products meet specifications before shipping.',
      features: ['Visual Inspection', 'Dimensional Checks', 'Functional Testing', 'Documentation Review'],
      coverage: '100% of shipments',
      timeline: '24-48 hours',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Laboratory Testing',
      description: 'Advanced laboratory analysis using state-of-the-art equipment and certified testing protocols.',
      features: ['Chemical Analysis', 'Microbiological Testing', 'Physical Properties', 'Contaminant Detection'],
      coverage: 'ISO/IEC 17025 certified',
      timeline: '3-7 days',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Certification Management',
      description: 'Complete management of quality certifications and compliance documentation.',
      features: ['Certificate Verification', 'Compliance Monitoring', 'Renewal Management', 'Audit Support'],
      coverage: '25+ certification bodies',
      timeline: 'Ongoing monitoring',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Traceability Systems',
      description: 'End-to-end traceability from source to destination with complete documentation.',
      features: ['Chain of Custody', 'Batch Tracking', 'Digital Records', 'Blockchain Integration'],
      coverage: 'Farm to fork',
      timeline: 'Real-time tracking',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ]

  const qualityStandards = [
    {
      category: 'Food Safety',
      standards: ['HACCP', 'BRC', 'IFS', 'SQF', 'FSSC 22000'],
      description: 'Comprehensive food safety management systems',
      applications: 'Food & Beverage products'
    },
    {
      category: 'Organic Certification',
      standards: ['USDA Organic', 'EU Organic', 'JAS Organic', 'IFOAM', 'Local Organic'],
      description: 'Organic production and handling standards',
      applications: 'Organic food products'
    },
    {
      category: 'International Standards',
      standards: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 22000', 'OHSAS 18001'],
      description: 'Quality management system standards',
      applications: 'All product categories'
    },
    {
      category: 'Specialty Certifications',
      standards: ['Fair Trade', 'Rainforest Alliance', 'UTZ', 'GlobalGAP', 'MSC'],
      description: 'Ethical and sustainable production standards',
      applications: 'Specialty and premium products'
    }
  ]

  const testingCapabilities = [
    {
      category: 'Chemical Analysis',
      tests: ['Nutritional Profiling', 'Pesticide Residues', 'Heavy Metals', 'Additives & Preservatives'],
      equipment: ['HPLC', 'GC-MS', 'ICP-MS', 'LC-MS/MS'],
      turnaround: '3-5 days'
    },
    {
      category: 'Microbiological Testing',
      tests: ['Pathogen Detection', 'Total Plate Count', 'Yeast & Mold', 'E. coli & Salmonella'],
      equipment: ['PCR Systems', 'Culture Media', 'Incubators', 'Biosafety Cabinets'],
      turnaround: '2-7 days'
    },
    {
      category: 'Physical Analysis',
      tests: ['Moisture Content', 'Water Activity', 'Texture Analysis', 'Color Measurement'],
      equipment: ['Moisture Analyzers', 'Texture Analyzers', 'Colorimeters', 'Viscometers'],
      turnaround: '1-2 days'
    },
    {
      category: 'Sensory Evaluation',
      tests: ['Taste Panels', 'Aroma Analysis', 'Appearance Assessment', 'Consumer Testing'],
      equipment: ['Sensory Booths', 'Trained Panels', 'Statistical Software', 'Climate Control'],
      turnaround: '1-3 days'
    }
  ]

  const qualityMetrics = [
    { metric: '99.8%', description: 'Quality pass rate', icon: '✅' },
    { metric: '24hrs', description: 'Average inspection time', icon: '⚡' },
    { metric: '25+', description: 'Certified testing labs', icon: '🔬' },
    { metric: '100%', description: 'Traceability coverage', icon: '🔍' }
  ]

  const qualityProcess = [
    {
      step: '01',
      title: 'Requirements Definition',
      description: 'Establish quality specifications and acceptance criteria based on your standards and regulations.',
      checkpoints: ['Specification Review', 'Regulatory Requirements', 'Customer Standards', 'Risk Assessment']
    },
    {
      step: '02',
      title: 'Inspection Planning',
      description: 'Develop comprehensive inspection and testing protocols tailored to your products.',
      checkpoints: ['Sampling Plans', 'Test Methods', 'Acceptance Criteria', 'Documentation Requirements']
    },
    {
      step: '03',
      title: 'Quality Execution',
      description: 'Conduct thorough inspections and testing using certified procedures and equipment.',
      checkpoints: ['Pre-shipment Inspection', 'Laboratory Testing', 'Documentation', 'Certificate Issuance']
    },
    {
      step: '04',
      title: 'Continuous Monitoring',
      description: 'Ongoing quality monitoring and improvement through data analysis and feedback.',
      checkpoints: ['Performance Tracking', 'Trend Analysis', 'Corrective Actions', 'Process Improvement']
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/quality-assurance.jpg"
            alt="Quality Assurance"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-green-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Services / Quality Assurance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Quality <span className="text-yellow-300">Assurance Excellence</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            Comprehensive quality management ensuring every product meets international standards through rigorous testing and certification processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quality Assessment
            </Link>
            <Link href="#services" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Quality Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 font-poppins mb-2">
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

      {/* Quality Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Quality Assurance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              End-to-end quality management solutions ensuring compliance with international standards and customer specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
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
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          <span className="">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500">Coverage: </span>
                    <span className="font-medium text-gray-900">{service.coverage}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Timeline: </span>
                    <span className="font-medium text-gray-900">{service.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              International Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Comprehensive coverage of global quality standards and certifications across all major industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {standard.category}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {standard.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Standards Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {standard.standards.map((std, stdIndex) => (
                      <span key={stdIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <strong>Applications: </strong>{standard.applications}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Laboratory Testing Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              State-of-the-art laboratory facilities with advanced equipment and certified testing protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testingCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                  {capability.category}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Test Types:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {capability.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className=" text-sm">{test}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Equipment:</h4>
                    <div className="flex flex-wrap gap-2">
                      {capability.equipment.map((equip, equipIndex) => (
                        <span key={equipIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {equip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 ">Turnaround Time:</span>
                      <span className="font-semibold text-green-600">{capability.turnaround}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Quality Assurance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              A systematic approach ensuring consistent quality throughout the entire supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityProcess.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {process.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {process.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {process.checkpoints.map((checkpoint, checkIndex) => (
                      <li key={checkIndex} className="text-sm text-gray-600 ">
                        • {checkpoint}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < qualityProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full">
                    <div className="h-0.5 bg-gradient-to-r from-green-600 to-teal-600 w-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ensure Quality Excellence Today
          </h2>
          <p className="text-xl text-green-100 mb-12  max-w-3xl mx-auto">
            Partner with us for comprehensive quality assurance that protects your brand and ensures customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Same Day</div>
              <div className="text-green-100 mb-4">Quality Reports</div>
              <p className="text-sm text-green-100">Fast turnaround inspection reports</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">ISO 17025</div>
              <div className="text-green-100 mb-4">Certified Labs</div>
              <p className="text-sm text-green-100">Internationally accredited testing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100 mb-4">Quality Monitoring</div>
              <p className="text-sm text-green-100">Continuous quality oversight</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quality Assessment
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default QualityPage
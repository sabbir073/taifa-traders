import Image from 'next/image'

const ServicesPage = () => {
  const services = [
    {
      icon: '/images/icon-5.png',
      title: 'Essential Commodities',
      description: 'Wide range of essential commodities including agricultural products, raw materials, and basic goods for various industries.',
      features: ['Agricultural Products', 'Raw Materials', 'Industrial Supplies', 'Quality Assurance'],
      image: '/images/hero-bg.jpg'
    },
    {
      icon: '/images/icon-1.png',
      title: 'Edible Oils',
      description: 'Premium quality edible oils sourced from trusted suppliers worldwide, meeting international food safety standards.',
      features: ['Palm Oil', 'Soybean Oil', 'Sunflower Oil', 'Food Safety Certified'],
      image: '/images/hero-bg.jpg'
    },
    {
      icon: '/images/icon-2.png',
      title: 'Fresh Fruits & Spices',
      description: 'Fresh, high-quality fruits and authentic spices directly from origin countries with proper cold chain management.',
      features: ['Tropical Fruits', 'Authentic Spices', 'Cold Chain Logistics', 'Origin Certification'],
      image: '/images/hero-bg.jpg'
    },
    {
      icon: '/images/icon-4.png',
      title: 'Custom Import Solutions',
      description: 'Tailored import solutions designed to meet specific business requirements with end-to-end support.',
      features: ['Custom Solutions', 'Documentation Support', 'Regulatory Compliance', 'End-to-End Service'],
      image: '/images/hero-bg.jpg'
    },
    {
      icon: '/images/icon-2.png',
      title: 'Logistics & Warehousing',
      description: 'Comprehensive logistics and warehousing solutions ensuring efficient supply chain management.',
      features: ['Global Shipping', 'Warehouse Management', 'Inventory Control', 'Distribution Network'],
      image: '/images/hero-bg.jpg'
    },
    {
      icon: '/images/icon-3.png',
      title: 'Trade Consulting',
      description: 'Expert trade consulting services to help businesses navigate international markets and regulations.',
      features: ['Market Analysis', 'Regulatory Guidance', 'Risk Assessment', 'Strategic Planning'],
      image: '/images/hero-bg.jpg'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We understand your requirements and provide customized solutions.'
    },
    {
      step: '02',
      title: 'Sourcing',
      description: 'Our global network helps source the best products at competitive prices.'
    },
    {
      step: '03',
      title: 'Quality Control',
      description: 'Rigorous quality checks ensure products meet international standards.'
    },
    {
      step: '04',
      title: 'Logistics',
      description: 'Efficient logistics management ensures timely and safe delivery.'
    },
    {
      step: '05',
      title: 'Support',
      description: 'Ongoing support and assistance throughout the trading process.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Our <span className="text-accent-500">Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-rubik leading-relaxed">
            Comprehensive trading solutions designed to help your business succeed in the global marketplace. 
            From sourcing to delivery, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent-500/10 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 font-poppins">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 font-rubik leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-rubik text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                    Learn More
                  </button>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-500/20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Trading Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-rubik">
              A streamlined process ensuring efficiency, quality, and customer satisfaction at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-accent-500/30 transform translate-x-4"></div>
                )}
                
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl font-poppins">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {process.title}
                </h3>
                <p className="text-gray-600 font-rubik text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-rubik">
              We provide comprehensive solutions backed by years of experience and a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Fast Processing</h3>
              <p className="text-gray-600 font-rubik">Quick turnaround times with efficient processing and minimal delays.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Quality Guaranteed</h3>
              <p className="text-gray-600 font-rubik">Rigorous quality control processes ensuring the highest standards.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Expert Team</h3>
              <p className="text-gray-600 font-rubik">Professional team with extensive experience in international trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-rubik max-w-2xl mx-auto">
            Contact us today to discuss your trading needs and discover how our services can benefit your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              REQUEST QUOTE
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
const AboutSection = () => {
  const stats = [
    {
      number: '20+',
      label: 'Years Experience',
      description: 'Decades of expertise in global trading'
    },
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      number: '50+',
      label: 'Countries',
      description: 'Global network coverage'
    },
    {
      number: '1000+',
      label: 'Products',
      description: 'Diverse commodity portfolio'
    }
  ]

  const features = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensure all products meet international standards and client specifications.'
    },
    {
      title: 'Global Network',
      description: 'Extensive network of trusted suppliers and partners across multiple continents for reliable sourcing.'
    },
    {
      title: 'Expert Team',
      description: 'Professional team with deep industry knowledge and years of experience in international trade.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Direct relationships with manufacturers and suppliers enable us to offer competitive market prices.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Why Choose <span className="text-accent-500">Taifa Traders</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-rubik">
            With over two decades of experience in international trade, we have established 
            ourselves as a trusted partner for businesses seeking reliable global trading solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 text-white rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              <p className="text-sm text-gray-600 font-rubik">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-rubik">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-poppins">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto font-rubik mb-8">
            "To be the most trusted and reliable global trading partner, providing innovative 
            solutions that enable businesses to thrive in the international marketplace while 
            maintaining the highest standards of quality, integrity, and customer service."
          </p>
          <button className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
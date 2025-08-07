import Image from 'next/image'

const ServicesSection = () => {
  const services = [
    {
      icon: '/images/icon-1.png',
      title: 'Global Sourcing',
      description: 'Access to worldwide suppliers and manufacturers for all your business needs with quality assurance and competitive pricing.'
    },
    {
      icon: '/images/icon-2.png', 
      title: 'Efficient Logistics',
      description: 'Streamlined supply chain management ensuring timely delivery and cost-effective transportation solutions.'
    },
    {
      icon: '/images/icon-3.png',
      title: 'Partnership Consulting',
      description: 'Expert guidance on international trade regulations, market entry strategies, and business development.'
    },
    {
      icon: '/images/icon-4.png',
      title: 'Customized Solutions', 
      description: 'Tailored trading solutions designed to meet your specific business requirements and industry standards.'
    },
    {
      icon: '/images/icon-5.png',
      title: 'Essential Commodities',
      description: 'Wide range of essential commodities including edible oils, fresh fruits, spices, and agricultural products.'
    },
    {
      icon: '/images/icon-6.png',
      title: 'Dedicated Support',
      description: '24/7 customer support and dedicated account management to ensure smooth trading operations.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Our <span className="text-accent-500">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-rubik">
            We provide comprehensive trading solutions to help your business grow globally. 
            Our expertise spans across various industries and markets worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-primary-600/10 rounded-full flex items-center justify-center group-hover:bg-accent-500/10 transition-colors duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins group-hover:text-accent-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-rubik">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-6">
                <button className="text-accent-500 hover:text-red-600 font-semibold text-sm uppercase tracking-wider transition-colors duration-300 group-hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
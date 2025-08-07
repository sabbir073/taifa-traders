import Image from 'next/image'

const AboutPage = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency in all our dealings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our services, from sourcing to delivery.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We embrace innovative solutions to meet evolving market demands and customer needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Partnership',
      description: 'We build long-term partnerships based on trust, reliability, and mutual success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ]

  const timeline = [
    {
      year: '2004',
      title: 'Company Founded',
      description: 'Taifa Traders was established with a vision to simplify global trade for businesses.'
    },
    {
      year: '2010',
      title: 'Global Expansion',
      description: 'Expanded operations to cover multiple continents with strategic partnerships.'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Implemented advanced logistics and tracking systems for better customer service.'
    },
    {
      year: '2020',
      title: 'Market Leadership',
      description: 'Achieved recognition as a leading international trading company in Bangladesh.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            About <span className="text-accent-500">Taifa Traders</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-rubik leading-relaxed">
            Over two decades of excellence in international trade, connecting businesses 
            worldwide with reliable and innovative trading solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 font-rubik leading-relaxed">
                <p>
                  Founded in 2004, Taifa Traders began as a small trading company with a big vision: 
                  to make international trade accessible and efficient for businesses of all sizes. 
                  What started as a local initiative has grown into a globally recognized trading partner.
                </p>
                <p>
                  Over the years, we have built an extensive network of suppliers, manufacturers, 
                  and logistics partners across more than 50 countries. Our commitment to quality, 
                  reliability, and customer satisfaction has earned us the trust of hundreds of 
                  businesses worldwide.
                </p>
                <p>
                  Today, Taifa Traders stands as a testament to the power of perseverance, 
                  innovation, and the unwavering belief that global trade should benefit everyone. 
                  We continue to evolve, embracing new technologies and market opportunities 
                  while staying true to our core values.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-bg.jpg"
                alt="Taifa Traders Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-poppins mb-4">Our Vision</h3>
              <p className="text-gray-600 font-rubik leading-relaxed">
                To be the most trusted and reliable global trading partner, enabling businesses 
                worldwide to access international markets with confidence and ease.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 font-poppins mb-4">Our Mission</h3>
              <p className="text-gray-600 font-rubik leading-relaxed">
                To simplify global commerce by providing innovative trading solutions, 
                maintaining the highest standards of quality, and fostering long-term 
                partnerships that drive mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-rubik">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-rubik leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-rubik">
              Key milestones that have shaped our company over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent-500"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-accent-500 font-poppins mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-rubik">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-accent-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ready to Start Trading with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-rubik max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Taifa Traders for their international trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              GET STARTED TODAY
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
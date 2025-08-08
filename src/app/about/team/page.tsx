import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leadership Team - Expert Professionals at Taifa Traders',
  description: 'Meet the experienced leadership team at Taifa Traders. 150+ years combined experience in international trading, quality assurance, logistics, and business development.',
  keywords: 'Taifa Traders team, leadership team, international trading experts, trading company management, global trade professionals, Bangladesh trading leaders',
  openGraph: {
    title: 'Leadership Team - Expert Professionals at Taifa Traders',
    description: 'Meet our experienced leadership team. 150+ years combined experience in international trading, quality assurance, and logistics.',
    url: 'https://taifatraders.com/about/team',
    images: [
      {
        url: '/images/team/leadership.jpg',
        width: 1200,
        height: 630,
        alt: 'Taifa Traders Leadership Team',
      },
    ],
  },
  twitter: {
    title: 'Leadership Team - Taifa Traders',
    description: 'Meet our experienced leadership team with 150+ years combined experience in international trading and logistics.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/about/team',
  },
}

const TeamPage = () => {
  const stats = [
    { number: '150+', label: 'Years Combined Experience', description: 'Collective expertise across all leadership' },
    { number: '15', label: 'Average Team Tenure', description: 'Years of dedication to Taifa Traders' },
    { number: '8', label: 'Languages Spoken', description: 'Multilingual global communication' },
    { number: '25+', label: 'Industry Certifications', description: 'Professional qualifications and expertise' }
  ]

  const departments = [
    {
      name: 'Trading Department',
      count: '12 Specialists',
      description: 'Commodity experts and market analysts',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      name: 'Operations Team',
      count: '18 Members',
      description: 'Logistics and supply chain experts',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      name: 'Quality Assurance',
      count: '8 Experts',
      description: 'Quality control and compliance specialists',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team/leadership.jpg"
            alt="Leadership Team"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Meet Our <span className="text-accent-500">Leadership Team</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Experienced professionals driving innovation and excellence in global trade.
          </p>
          <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Join Our Team
          </Link>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-accent-500 font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-semibold mb-2 font-poppins text-sm md:text-base">
                  {stat.label}
                </div>
                <p className="text-xs md:text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Department Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Team Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A diverse and experienced team working together to deliver exceptional results for our clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                  {dept.name}
                </h3>
                <div className="text-accent-500 font-semibold mb-4">
                  {dept.count}
                </div>
                <p className="text-gray-600 text-sm">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Values */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Leadership Principles
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our leadership team is guided by core principles that drive success and foster innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins">Visionary Leadership</h3>
              <p className="text-blue-100">Leading with foresight and strategic thinking for long-term success.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins">Collaborative Approach</h3>
              <p className="text-blue-100">Fostering teamwork and collaboration across all levels of the organization.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-poppins">Ethical Standards</h3>
              <p className="text-blue-100">Maintaining the highest ethical standards in all business practices.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about/network" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Our Global Network
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamPage
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Edible Oils - Olive, Sunflower, Palm & Specialty Oils | Taifa Traders',
  description: 'Source premium edible oils from global suppliers. Olive oil, sunflower oil, palm oil, coconut oil & specialty blends. RSPO certified, organic options available.',
  keywords: 'premium edible oils, olive oil trading, sunflower oil export, palm oil wholesale, coconut oil supplier, specialty cooking oils, RSPO certified oils, organic edible oils',
  openGraph: {
    title: 'Premium Edible Oils - Olive, Sunflower, Palm & Specialty Oils | Taifa Traders',
    description: 'Source premium edible oils from global suppliers. RSPO certified, organic options available with quality assurance.',
    url: 'https://taifatraders.com/products/edible-oils',
    images: [
      {
        url: '/images/products/edible-oils.png',
        width: 1200,
        height: 630,
        alt: 'Premium Edible Oils by Taifa Traders',
      },
    ],
  },
  twitter: {
    title: 'Premium Edible Oils - Taifa Traders',
    description: 'Source premium edible oils from global suppliers. RSPO certified, organic options with quality assurance.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/products/edible-oils',
  },
}

const EdibleOilsPage = () => {
  const oilProducts = [
    {
      name: 'Premium Olive Oil',
      varieties: ['Extra Virgin', 'Virgin', 'Pure Olive Oil', 'Light Olive Oil'],
      origin: 'Spain, Italy, Greece, Turkey',
      season: 'Year-round availability',
      image: '/images/products/categories/olive-oil.jpg',
      description: 'Cold-pressed olive oils with exceptional flavor profiles and health benefits.',
      specifications: {
        packaging: '250ml, 500ml, 1L bottles, 5L tins, bulk tanks',
        shelfLife: '18-24 months from production',
        certifications: ['EU Organic', 'USDA Organic', 'Fair Trade', 'PDO']
      },
      applications: ['Cooking', 'Salad Dressing', 'Food Processing', 'Cosmetics']
    },
    {
      name: 'Sunflower Oil',
      varieties: ['High Oleic', 'Linoleic', 'Mid Oleic', 'Refined'],
      origin: 'Ukraine, Russia, Argentina, Turkey',
      season: 'Harvest: August-October, Available year-round',
      image: '/images/products/categories/sunflower-oil.jpg',
      description: 'Premium refined sunflower oil with neutral taste and high smoke point.',
      specifications: {
        packaging: '1L, 5L PET bottles, 20L jerrycans, bulk',
        shelfLife: '18 months in optimal storage',
        certifications: ['ISO 22000', 'HACCP', 'Non-GMO', 'Kosher']
      },
      applications: ['Deep Frying', 'Baking', 'Food Manufacturing', 'Margarine Production']
    },
    {
      name: 'Coconut Oil',
      varieties: ['Virgin', 'Refined', 'Organic Virgin', 'Fractionated'],
      origin: 'Philippines, Indonesia, Sri Lanka, India',
      season: 'Year-round harvesting and processing',
      image: '/images/products/categories/coconut-oil.jpg',
      description: 'Pure coconut oil with natural MCT content and versatile applications.',
      specifications: {
        packaging: '500ml jars, 1L containers, 25kg drums',
        shelfLife: '24 months at room temperature',
        certifications: ['Organic', 'Fair Trade', 'Non-GMO', 'Vegan']
      },
      applications: ['Cooking', 'Baking', 'Cosmetics', 'Health Supplements']
    },
    {
      name: 'Palm Oil',
      varieties: ['Crude Palm Oil', 'Refined Palm Oil', 'Palm Kernel Oil', 'Red Palm Oil'],
      origin: 'Malaysia, Indonesia, Nigeria, Thailand',
      season: 'Year-round production',
      image: '/images/products/categories/palm-oil.jpg',
      description: 'Sustainable palm oil from RSPO certified plantations.',
      specifications: {
        packaging: '20L jerrycans, 200L drums, bulk tankers',
        shelfLife: '12 months for crude, 18 months for refined',
        certifications: ['RSPO', 'ISCC', 'Rainforest Alliance', 'Organic']
      },
      applications: ['Food Manufacturing', 'Margarine', 'Confectionery', 'Biofuel']
    },
    {
      name: 'Specialty Seed Oils',
      varieties: ['Sesame Oil', 'Pumpkin Seed Oil', 'Flaxseed Oil', 'Chia Seed Oil'],
      origin: 'Various premium growing regions',
      season: 'Seasonal harvesting, year-round availability',
      image: '/images/products/categories/specialty-oils.jpg',
      description: 'Cold-pressed specialty oils with unique nutritional profiles and flavors.',
      specifications: {
        packaging: '250ml, 500ml bottles, custom sizes available',
        shelfLife: '12-18 months depending on variety',
        certifications: ['Organic', 'Cold-Pressed', 'Non-GMO', 'Raw']
      },
      applications: ['Gourmet Cooking', 'Health Foods', 'Supplements', 'Cosmetics']
    },
    {
      name: 'Avocado Oil',
      varieties: ['Extra Virgin', 'Refined', 'Organic', 'Cold-Pressed'],
      origin: 'Mexico, Peru, Chile, New Zealand',
      season: 'Year-round with seasonal peaks',
      image: '/images/products/categories/avocado-oil.jpg',
      description: 'Premium avocado oil with high smoke point and rich nutritional content.',
      specifications: {
        packaging: '250ml, 500ml, 1L bottles, 5L containers',
        shelfLife: '24 months from production date',
        certifications: ['Organic', 'Non-GMO', 'Fair Trade', 'Kosher']
      },
      applications: ['High-Heat Cooking', 'Salads', 'Skin Care', 'Hair Care']
    }
  ]

  const qualityFeatures = [
    {
      title: 'Cold Processing',
      description: 'Preserving natural nutrients and flavors through gentle extraction',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Purity Testing',
      description: 'Advanced laboratory testing for quality and authenticity',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Sustainable Sourcing',
      description: 'Ethically sourced oils supporting environmental responsibility',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Custom Packaging',
      description: 'Flexible packaging solutions for various market requirements',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  const healthBenefits = [
    { benefit: 'Heart Health', description: 'Monounsaturated fats support cardiovascular wellness', icon: '❤️' },
    { benefit: 'Brain Function', description: 'Omega-3 and omega-6 fatty acids for cognitive health', icon: '🧠' },
    { benefit: 'Antioxidant Rich', description: 'Natural antioxidants protect against oxidative stress', icon: '🛡️' },
    { benefit: 'Vitamin Absorption', description: 'Fat-soluble vitamins (A, D, E, K) absorption', icon: '💊' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-700 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/edible-oils.png"
            alt="Edible Oils"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-orange-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Products / Edible Oils
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Premium <span className="text-yellow-300">Edible Oils</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto  leading-relaxed mb-8">
            High-quality refined and unrefined oils for cooking, food processing, and industrial applications from trusted global sources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Samples
            </Link>
            <Link href="#products" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Oil Quality Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Our commitment to quality ensures every drop of oil meets the highest standards of purity, flavor, and nutritional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600 ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Edible Oil Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              From everyday cooking oils to specialty gourmet varieties, we source the finest oils from premium producers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {oilProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white font-poppins mb-1">
                      {product.name}
                    </h3>
                    <p className="text-orange-200 ">{product.origin}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600  leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Varieties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.varieties.map((variety, varIndex) => (
                          <span key={varIndex} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                            {variety}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span key={appIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4 font-poppins">Specifications:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Packaging:</span>
                        <span className="font-medium text-gray-900 text-right">{product.specifications.packaging}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shelf Life:</span>
                        <span className="font-medium text-gray-900">{product.specifications.shelfLife}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-2">Certifications:</span>
                        <div className="flex flex-wrap gap-1">
                          {product.specifications.certifications.map((cert, certIndex) => (
                            <span key={certIndex} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Health & Wellness Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
              Our premium edible oils provide essential nutrients and health benefits for a balanced lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {benefit.benefit}
                </h3>
                <p className="text-sm text-gray-600 ">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
                  Sustainable & Ethical Sourcing
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">RSPO Certified Palm Oil</h4>
                      <p className="text-gray-600 text-sm">Supporting sustainable palm oil production</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fair Trade Partnerships</h4>
                      <p className="text-gray-600 text-sm">Supporting farming communities worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Organic Certifications</h4>
                      <p className="text-gray-600 text-sm">Natural, chemical-free production methods</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-orange-500 rounded-full text-white text-4xl font-bold mb-4">
                  85%
                </div>
                <p className="text-gray-600 ">
                  of our oils come from certified sustainable sources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Source Premium Edible Oils Today
          </h2>
          <p className="text-xl text-orange-100 mb-12  max-w-3xl mx-auto">
            Partner with us for consistent supply of high-quality edible oils with guaranteed purity and sustainability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-orange-100 mb-4">Oil Varieties</div>
              <p className="text-sm text-orange-100">Comprehensive product range</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100 mb-4">Quality Tested</div>
              <p className="text-sm text-orange-100">Every batch laboratory verified</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-orange-100 mb-4">Countries Sourced</div>
              <p className="text-sm text-orange-100">Global sourcing network</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-orange-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default EdibleOilsPage
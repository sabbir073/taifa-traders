import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essential Staple Foods - Rice, Wheat, Corn & Grains Trading | Taifa Traders',
  description: 'Premium staple foods from global sources. Rice, wheat, corn, legumes, barley, oats & ancient grains. Organic certified, bulk quantities, year-round availability.',
  keywords: 'staple foods trading, rice export, wheat import, corn wholesale, legumes pulses, barley oats trading, quinoa supplier, food staples bulk, organic grains',
  openGraph: {
    title: 'Essential Staple Foods - Rice, Wheat, Corn & Grains Trading | Taifa Traders',
    description: 'Premium staple foods from global sources. Rice, wheat, corn, legumes & ancient grains. Organic certified with year-round availability.',
    url: 'https://taifatraders.com/products/staple-foods',
    images: [
      {
        url: '/images/products/food-staples.png',
        width: 1200,
        height: 630,
        alt: 'Essential Staple Foods by Taifa Traders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essential Staple Foods - Rice, Wheat, Corn & Grains Trading',
    description: 'Premium staple foods from global sources with organic certification and year-round availability.',
    images: ['/images/products/food-staples.png'],
  },
}

const StapleFoodsPage = () => {
  const stapleProducts = [
    {
      name: 'Premium Rice',
      varieties: ['Basmati', 'Jasmine', 'Arborio', 'Brown Rice', 'Wild Rice'],
      origin: 'India, Thailand, Italy, USA',
      season: 'Year-round availability',
      image: '/images/products/categories/rice.jpg',
      description: 'High-quality rice varieties sourced from premier growing regions worldwide.',
      specifications: {
        packaging: '1kg, 5kg, 25kg, 50kg bags, bulk containers',
        shelfLife: '12-24 months in proper storage',
        certifications: ['Organic', 'Fair Trade', 'Non-GMO', 'Kosher']
      },
      applications: ['Direct Consumption', 'Food Processing', 'Pet Food', 'Industrial Use'],
      nutritionPer100g: { calories: '365', protein: '7.1g', fiber: '1.3g', carbs: '80g' }
    },
    {
      name: 'Wheat & Wheat Products',
      varieties: ['Hard Red Winter', 'Soft White', 'Durum', 'Spelt', 'Einkorn'],
      origin: 'USA, Canada, Australia, Ukraine',
      season: 'Harvest: July-September, Available year-round',
      image: '/images/products/categories/wheat.jpg',
      description: 'Premium wheat grains and flour for baking, food processing, and industrial applications.',
      specifications: {
        packaging: '25kg, 50kg bags, 1MT bulk bags, loose bulk',
        shelfLife: '12 months for grains, 6-8 months for flour',
        certifications: ['Organic', 'Non-GMO', 'Food Grade', 'IP Certified']
      },
      applications: ['Flour Milling', 'Bread Making', 'Pasta Production', 'Animal Feed'],
      nutritionPer100g: { calories: '339', protein: '13.2g', fiber: '12.2g', carbs: '72g' }
    },
    {
      name: 'Corn & Maize',
      varieties: ['Yellow Dent', 'White Corn', 'Sweet Corn', 'Popcorn', 'Blue Corn'],
      origin: 'USA, Brazil, Argentina, Ukraine',
      season: 'Harvest: September-November, Available year-round',
      image: '/images/products/categories/corn.jpg',
      description: 'Versatile corn products for food processing, animal feed, and industrial applications.',
      specifications: {
        packaging: '25kg, 50kg bags, 1MT bulk bags, loose bulk',
        shelfLife: '12-18 months in dry storage',
        certifications: ['Non-GMO', 'IP Certified', 'Food Grade', 'Feed Grade']
      },
      applications: ['Food Processing', 'Animal Feed', 'Ethanol Production', 'Starch Manufacturing'],
      nutritionPer100g: { calories: '365', protein: '9.4g', fiber: '7.3g', carbs: '74g' }
    },
    {
      name: 'Legumes & Pulses',
      varieties: ['Chickpeas', 'Lentils', 'Black Beans', 'Kidney Beans', 'Peas'],
      origin: 'India, Turkey, Canada, Myanmar',
      season: 'Various harvest seasons, year-round availability',
      image: '/images/products/categories/legumes.jpg',
      description: 'Protein-rich legumes and pulses providing essential nutrition and versatile applications.',
      specifications: {
        packaging: '25kg, 50kg polypropylene bags, bulk containers',
        shelfLife: '2-3 years in proper storage conditions',
        certifications: ['Organic', 'Fair Trade', 'Non-GMO', 'Halal']
      },
      applications: ['Direct Consumption', 'Food Processing', 'Flour Production', 'Sprouting'],
      nutritionPer100g: { calories: '352', protein: '24.6g', fiber: '30.5g', carbs: '61g' }
    },
    {
      name: 'Barley & Oats',
      varieties: ['Two-Row Barley', 'Six-Row Barley', 'Hulled Oats', 'Steel-Cut Oats'],
      origin: 'Canada, Australia, USA, Europe',
      season: 'Harvest: July-September, Available year-round',
      image: '/images/products/categories/barley-oats.jpg',
      description: 'Nutritious grains perfect for brewing, food processing, and health-conscious consumers.',
      specifications: {
        packaging: '25kg, 50kg bags, bulk containers',
        shelfLife: '12-18 months in cool, dry storage',
        certifications: ['Organic', 'Non-GMO', 'Gluten-Free Oats', 'Malting Grade']
      },
      applications: ['Brewing', 'Food Products', 'Animal Feed', 'Health Foods'],
      nutritionPer100g: { calories: '354', protein: '12.5g', fiber: '17.3g', carbs: '73g' }
    },
    {
      name: 'Quinoa & Ancient Grains',
      varieties: ['White Quinoa', 'Red Quinoa', 'Black Quinoa', 'Amaranth', 'Chia Seeds'],
      origin: 'Bolivia, Peru, Ecuador, USA',
      season: 'Year-round processing and availability',
      image: '/images/products/categories/quinoa.jpg',
      description: 'Superfood grains with complete amino acid profiles and exceptional nutritional benefits.',
      specifications: {
        packaging: '1kg, 5kg, 25kg bags, custom packaging available',
        shelfLife: '2-3 years in airtight containers',
        certifications: ['Organic', 'Fair Trade', 'Non-GMO', 'Gluten-Free']
      },
      applications: ['Health Foods', 'Gluten-Free Products', 'Protein Supplements', 'Bakery'],
      nutritionPer100g: { calories: '368', protein: '14.1g', fiber: '7g', carbs: '64g' }
    }
  ]

  const nutritionBenefits = [
    {
      title: 'Complete Nutrition',
      description: 'Essential macronutrients for balanced diet',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'High Fiber Content',
      description: 'Supporting digestive health and satiety',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Plant-Based Protein',
      description: 'Sustainable protein sources for all diets',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: 'Long Storage Life',
      description: 'Extended shelf life for food security',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const qualityStandards = [
    { standard: 'Moisture Content', requirement: '&lt; 14%', description: 'Optimal moisture for storage' },
    { standard: 'Protein Content', requirement: '&gt; 10%', description: 'High nutritional value' },
    { standard: 'Foreign Matter', requirement: '&lt; 2%', description: 'Minimal impurities' },
    { standard: 'Broken Kernels', requirement: '&lt; 5%', description: 'Premium grain integrity' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-700 via-yellow-700 to-orange-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/food-staples.png"
            alt="Staple Foods"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-amber-700/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Products / Staple Foods
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Essential <span className="text-yellow-300">Staple Foods</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Premium grains and staple foods that form the foundation of global nutrition and food security from trusted sources worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Samples
            </Link>
            <Link href="#products" className="border-2 border-white text-white hover:bg-white hover:text-amber-700 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Nutrition Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Nutritional Foundation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our staple foods provide essential nutrients that support healthy communities and food security worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nutritionBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every batch meets stringent international quality standards for food safety and nutritional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border-2 border-amber-100 hover:border-amber-300 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                  {standard.standard}
                </h3>
                <div className="text-2xl font-bold text-amber-600 mb-2">
                  {standard.requirement}
                </div>
                <p className="text-sm text-gray-600">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Certifications & Compliance
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">ISO</div>
                <p className="text-gray-600 text-sm">22000 Food Safety</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">HACCP</div>
                <p className="text-gray-600 text-sm">Hazard Analysis</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">BRC</div>
                <p className="text-gray-600 text-sm">Global Standards</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">Organic</div>
                <p className="text-gray-600 text-sm">Certified Options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Staple Food Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From traditional grains to ancient superfoods, we source the finest staple foods from premier growing regions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stapleProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
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
                    <p className="text-amber-200">{product.origin}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Varieties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.varieties.map((variety, varIndex) => (
                          <span key={varIndex} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
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

                  {/* Nutrition Facts */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Nutrition per 100g:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-sm">
                        <span className="text-gray-600">Calories:</span>
                        <span className="font-medium text-gray-900 ml-2">{product.nutritionPer100g.calories}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Protein:</span>
                        <span className="font-medium text-gray-900 ml-2">{product.nutritionPer100g.protein}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Fiber:</span>
                        <span className="font-medium text-gray-900 ml-2">{product.nutritionPer100g.fiber}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Carbs:</span>
                        <span className="font-medium text-gray-900 ml-2">{product.nutritionPer100g.carbs}</span>
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

      {/* Global Food Security */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Supporting Global Food Security
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our staple foods program contributes to global nutrition and food security initiatives worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2B+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">People Fed Annually</h3>
              <p className="text-gray-600">Our staple foods reach communities worldwide through our distribution network.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                95%
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Nutritional Standards</h3>
              <p className="text-gray-600">Meeting or exceeding international nutritional requirements and safety standards.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                50+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Countries Served</h3>
              <p className="text-gray-600">Global reach ensuring food security across diverse markets and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Partner for Food Security
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto">
            Join us in providing essential nutrition and food security through our premium staple foods program.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-amber-100 mb-4">Supply Availability</div>
              <p className="text-sm text-amber-100">Continuous supply chain operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-amber-100 mb-4">Food Safety Score</div>
              <p className="text-sm text-amber-100">Highest safety and quality standards</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">5M+</div>
              <div className="text-amber-100 mb-4">Tons Annually</div>
              <p className="text-sm text-amber-100">Massive scale operations</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-amber-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-amber-700 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default StapleFoodsPage
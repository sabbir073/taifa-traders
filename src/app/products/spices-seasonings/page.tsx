import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Spices & Seasonings - Black Pepper, Turmeric, Cardamom | Taifa Traders',
  description: 'Authentic spices & seasonings from traditional growing regions. Black pepper, turmeric, cardamom, cinnamon, ginger & custom blends. Organic certified, steam sterilized.',
  keywords: 'premium spices trading, black pepper export, turmeric wholesale, cardamom supplier, cinnamon import, ginger trading, spice blends, organic spices, steam sterilized',
  openGraph: {
    title: 'Premium Spices & Seasonings - Black Pepper, Turmeric, Cardamom | Taifa Traders',
    description: 'Authentic spices from traditional growing regions. Organic certified, steam sterilized with custom blending services.',
    url: 'https://taifatraders.com/products/spices-seasonings',
    images: [
      {
        url: '/images/products/spices.png',
        width: 1200,
        height: 630,
        alt: 'Premium Spices & Seasonings by Taifa Traders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Spices & Seasonings - Authentic Global Sourcing',
    description: 'Authentic spices from traditional growing regions with organic certification.',
    images: ['/images/products/spices.png'],
  },
}

const SpicesSeasoningsPage = () => {
  const spiceProducts = [
    {
      name: 'Black Pepper',
      varieties: ['Tellicherry', 'Malabar', 'Sarawak', 'Lampong', 'Madagascar'],
      origin: 'India, Indonesia, Malaysia, Madagascar',
      season: 'Harvest: December-February, Available year-round',
      image: '/images/products/categories/black-pepper.jpg',
      description: 'Premium black peppercorns with intense aroma and pungent flavor from the world\'s finest pepper growing regions.',
      specifications: {
        packaging: '25kg, 50kg jute bags, vacuum-sealed pouches',
        shelfLife: '3-4 years in proper storage conditions',
        certifications: ['Organic', 'Fair Trade', 'EU Organic', 'USDA Organic']
      },
      applications: ['Food Processing', 'Restaurants', 'Retail Packaging', 'Spice Blends'],
      qualityGrades: ['TGSEB', 'GL-1', 'FAQ', 'Pinhead'],
      piperine: '5-9%'
    },
    {
      name: 'Turmeric',
      varieties: ['Curcumin Rich', 'Madras', 'Alleppey', 'Erode', 'Salem'],
      origin: 'India, Myanmar, Thailand, Peru',
      season: 'Harvest: January-March, Processing year-round',
      image: '/images/products/categories/turmeric.jpg',
      description: 'High-curcumin turmeric powder and whole rhizomes with vibrant color and potent anti-inflammatory properties.',
      specifications: {
        packaging: '25kg, 50kg PP bags, retail pouches, bulk containers',
        shelfLife: '2-3 years in airtight containers',
        certifications: ['Organic', 'Fair Trade', 'Steam Sterilized', 'Kosher']
      },
      applications: ['Food Coloring', 'Health Supplements', 'Cosmetics', 'Traditional Medicine'],
      qualityGrades: ['Finger', 'Bulb', 'Powder'],
      curcumin: '3-8%'
    },
    {
      name: 'Cardamom',
      varieties: ['Green Cardamom', 'Black Cardamom', 'Guatemala Cardamom'],
      origin: 'India, Guatemala, Tanzania',
      season: 'Green: October-February, Black: September-December',
      image: '/images/products/categories/cardamom.jpg',
      description: 'Aromatic cardamom pods with intense flavor profile, known as the "Queen of Spices" for premium applications.',
      specifications: {
        packaging: '10kg, 25kg cartons with moisture barriers',
        shelfLife: '2-3 years for pods, 1-2 years ground',
        certifications: ['Organic', 'Fair Trade', 'Mountain Grown', 'Hand Picked']
      },
      applications: ['Baking', 'Beverages', 'Perfumery', 'Traditional Medicine'],
      qualityGrades: ['AGEB', 'AGB', 'AGS', 'Bold Green'],
      essentialOil: '4-8%'
    },
    {
      name: 'Cinnamon',
      varieties: ['Ceylon Cinnamon', 'Cassia Cinnamon', 'Saigon Cinnamon'],
      origin: 'Sri Lanka, Indonesia, Vietnam, Madagascar',
      season: 'Year-round harvesting and processing',
      image: '/images/products/categories/cinnamon.jpg',
      description: 'Premium cinnamon bark and powder with sweet, warm flavor and exceptional aroma from traditional growing regions.',
      specifications: {
        packaging: '20kg, 25kg cartons, retail pouches available',
        shelfLife: '3-4 years for bark, 2-3 years for powder',
        certifications: ['Organic', 'Fair Trade', 'Ceylon Certified', 'EU Organic']
      },
      applications: ['Baking', 'Confectionery', 'Beverages', 'Essential Oils'],
      qualityGrades: ['Alba', 'Continental', 'Mexican', 'Hamburg'],
      aldehydeContent: '1-4%'
    },
    {
      name: 'Ginger',
      varieties: ['Fresh Ginger', 'Dried Ginger', 'Ginger Powder', 'Crystallized'],
      origin: 'China, India, Peru, Nigeria',
      season: 'Fresh: Year-round, Dried: Post-harvest processing',
      image: '/images/products/categories/ginger.jpg',
      description: 'Premium ginger root and products with intense heat and aromatic compounds for culinary and medicinal applications.',
      specifications: {
        packaging: '25kg mesh bags for fresh, 25kg bags for dried',
        shelfLife: '6 months fresh, 3-4 years dried/powder',
        certifications: ['Organic', 'Fair Trade', 'Global GAP', 'HACCP']
      },
      applications: ['Food Processing', 'Beverages', 'Health Products', 'Traditional Medicine'],
      qualityGrades: ['Grade A', 'Grade B', 'Split Dried', 'Bleached'],
      gingerol: '1-3%'
    },
    {
      name: 'Specialty Spice Blends',
      varieties: ['Curry Powders', 'Garam Masala', 'Chinese Five Spice', 'Ras el Hanout'],
      origin: 'Custom blending from global sources',
      season: 'Year-round production and availability',
      image: '/images/products/categories/spice-blends.jpg',
      description: 'Expertly crafted spice blends combining traditional recipes with premium ingredients for authentic flavors.',
      specifications: {
        packaging: '1kg, 5kg, 25kg containers, custom retail packaging',
        shelfLife: '18-24 months depending on blend composition',
        certifications: ['Organic Options', 'Kosher', 'Halal', 'Custom Formulations']
      },
      applications: ['Food Service', 'Manufacturing', 'Retail', 'Private Label'],
      qualityGrades: ['Premium', 'Standard', 'Economy', 'Custom'],
      customization: 'Available'
    }
  ]

  const spiceProcessing = [
    {
      title: 'Steam Sterilization',
      description: 'Eliminates pathogens while preserving flavor compounds',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Grinding & Milling',
      description: 'Precise particle size control for optimal flavor release',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Quality Testing',
      description: 'Comprehensive analysis of flavor compounds and purity',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Custom Packaging',
      description: 'Tailored packaging solutions for various market needs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  const healthProperties = [
    { spice: 'Turmeric', property: 'Anti-inflammatory', compound: 'Curcumin', benefit: 'Reduces inflammation' },
    { spice: 'Ginger', property: 'Digestive Aid', compound: 'Gingerol', benefit: 'Improves digestion' },
    { spice: 'Cinnamon', property: 'Blood Sugar Control', compound: 'Cinnamaldehyde', benefit: 'Regulates glucose' },
    { spice: 'Black Pepper', property: 'Nutrient Absorption', compound: 'Piperine', benefit: 'Enhances bioavailability' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-700 via-orange-700 to-yellow-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/spices.png"
            alt="Spices and Seasonings"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-red-700/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Products / Spices & Seasonings
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Aromatic <span className="text-yellow-300">Spices & Seasonings</span>
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Premium spices and seasonings sourced from traditional growing regions, offering authentic flavors, aromas, and health benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Samples
            </Link>
            <Link href="#products" className="border-2 border-white text-white hover:bg-white hover:text-red-700 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Processing Excellence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Spice Processing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art processing ensures maximum flavor retention while meeting the highest food safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {spiceProcessing.map((process, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
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
              Our Spice Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From single-origin spices to expertly crafted blends, we offer the world's finest seasonings for every culinary need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiceProducts.map((product, index) => (
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
                    <p className="text-red-200">{product.origin}</p>
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
                          <span key={varIndex} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
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

                  {/* Quality Specifications */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 font-poppins">Quality Specifications:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-sm">
                        <span className="text-gray-600">Grades:</span>
                        <div className="font-medium text-gray-900">{product.qualityGrades.join(', ')}</div>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Active Compound:</span>
                        <div className="font-medium text-gray-900">
                          {product.piperine && `Piperine: ${product.piperine}`}
                          {product.curcumin && `Curcumin: ${product.curcumin}`}
                          {product.essentialOil && `Essential Oil: ${product.essentialOil}`}
                          {product.aldehydeContent && `Aldehyde: ${product.aldehydeContent}`}
                          {product.gingerol && `Gingerol: ${product.gingerol}`}
                          {product.customization && `Custom Blends: ${product.customization}`}
                        </div>
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
              Health & Wellness Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium spices offer more than flavor - they provide scientifically proven health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {healthProperties.map((property, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                  {property.spice}
                </h3>
                <div className="text-red-600 font-medium mb-2">{property.property}</div>
                <div className="text-sm text-gray-600 mb-2">Active: {property.compound}</div>
                <p className="text-xs text-gray-500">
                  {property.benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
                  Traditional Medicine Heritage
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ayurvedic Traditions</h4>
                      <p className="text-gray-600 text-sm">5,000+ years of documented medicinal use</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Scientific Validation</h4>
                      <p className="text-gray-600 text-sm">Modern research confirms traditional benefits</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Functional Foods</h4>
                      <p className="text-gray-600 text-sm">Integration into modern health products</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-red-500 rounded-full text-white text-3xl font-bold mb-4">
                  100+
                </div>
                <p className="text-gray-600">
                  Active compounds identified in our spice collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Origins */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Premium Sourcing Origins
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We source directly from the world's most renowned spice-growing regions for authentic flavors and superior quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                🇮🇳
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Indian Subcontinent</h3>
              <p className="text-gray-600 mb-4">Kerala pepper, Kashmiri saffron, Turmeric from Tamil Nadu</p>
              <div className="text-sm text-gray-500">85% of global spice production</div>
            </div>

            <div className="text-center bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Southeast Asia</h3>
              <p className="text-gray-600 mb-4">Indonesian nutmeg, Vietnamese cinnamon, Malaysian pepper</p>
              <div className="text-sm text-gray-500">Traditional spice route origins</div>
            </div>

            <div className="text-center bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                🌎
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Americas & Africa</h3>
              <p className="text-gray-600 mb-4">Madagascar vanilla, Guatemalan cardamom, Mexican chilies</p>
              <div className="text-sm text-gray-500">Unique terroir characteristics</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Spice Up Your Business
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
            Partner with us for authentic, premium spices and seasonings that will elevate your products and delight your customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-red-100 mb-4">Spice Varieties</div>
              <p className="text-sm text-red-100">Comprehensive spice portfolio</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-red-100 mb-4">Authenticity Guaranteed</div>
              <p className="text-sm text-red-100">Direct sourcing from origins</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-red-100 mb-4">Source Countries</div>
              <p className="text-sm text-red-100">Global spice network</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-red-700 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default SpicesSeasoningsPage
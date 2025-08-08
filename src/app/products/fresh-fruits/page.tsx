import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fresh Fruits Export - Citrus, Apples, Grapes & Seasonal Fruits | Taifa Traders',
  description: 'Premium fresh fruits from global orchards. Citrus fruits, apples, grapes, berries & seasonal varieties. Cold chain logistics, organic certified options available.',
  keywords: 'fresh fruits export, citrus fruits trading, apple export, grape supplier, seasonal fruits, organic fruits, cold chain logistics, premium fresh produce',
  openGraph: {
    title: 'Fresh Fruits Export - Premium Quality from Global Orchards | Taifa Traders',
    description: 'Premium fresh fruits with cold chain logistics. Organic certified options from the world\'s finest orchards.',
    url: 'https://taifatraders.com/products/fresh-fruits',
    images: [
      {
        url: '/images/products/fresh-fruits.png',
        width: 1200,
        height: 630,
        alt: 'Fresh Fruits Export by Taifa Traders',
      },
    ],
  },
  twitter: {
    title: 'Fresh Fruits Export - Taifa Traders',
    description: 'Premium fresh fruits with cold chain logistics from global orchards. Organic certified options available.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/products/fresh-fruits',
  },
}

const FreshFruitsPage = () => {
  const fruitProducts = [
    {
      name: 'Premium Citrus',
      varieties: ['Oranges', 'Lemons', 'Limes', 'Grapefruits'],
      origin: 'Mediterranean & South America',
      season: 'Year-round availability',
      image: '/images/products/categories/citrus.jpg',
      description: 'Fresh, juicy citrus fruits with exceptional flavor and vitamin C content.',
      specifications: {
        packaging: '10kg, 15kg, 20kg cartons',
        shelfLife: '2-4 weeks refrigerated',
        certifications: ['GlobalGAP', 'Organic', 'Rainforest Alliance']
      }
    },
    {
      name: 'Tree-Ripened Apples',
      varieties: ['Gala', 'Fuji', 'Granny Smith', 'Red Delicious'],
      origin: 'Europe & North America',
      season: 'August - April',
      image: '/images/products/categories/apples.jpg',
      description: 'Crisp, sweet apples harvested at peak ripeness for optimal taste and texture.',
      specifications: {
        packaging: '18kg cartons, bulk bins',
        shelfLife: '3-6 months in controlled atmosphere',
        certifications: ['Organic', 'Fair Trade', 'Local Farm Certified']
      }
    },
    {
      name: 'Premium Grapes',
      varieties: ['Thompson Seedless', 'Red Globe', 'Black Beauty'],
      origin: 'Chile, Peru & California',
      season: 'November - May',
      image: '/images/products/categories/grapes.jpg',
      description: 'Sweet, seedless grapes with perfect clusters and extended freshness.',
      specifications: {
        packaging: '8.2kg cartons with ventilation',
        shelfLife: '4-6 weeks refrigerated',
        certifications: ['GlobalGAP', 'SQF', 'Organic']
      }
    },
    {
      name: 'Exotic Tropical Fruits',
      varieties: ['Mangoes', 'Pineapples', 'Dragon Fruit', 'Passion Fruit'],
      origin: 'Southeast Asia & South America',
      season: 'Year-round (varied by variety)',
      image: '/images/products/categories/tropical.jpg',
      description: 'Premium exotic fruits delivering authentic tropical flavors and nutrients.',
      specifications: {
        packaging: 'Variety-specific protective packaging',
        shelfLife: '1-3 weeks depending on variety',
        certifications: ['Fair Trade', 'Rainforest Alliance', 'Organic']
      }
    },
    {
      name: 'Berry Collection',
      varieties: ['Blueberries', 'Strawberries', 'Raspberries', 'Blackberries'],
      origin: 'North America & Europe',
      season: 'May - September (fresh), Year-round (frozen)',
      image: '/images/products/categories/berries.jpg',
      description: 'Antioxidant-rich berries picked at peak ripeness for maximum nutritional value.',
      specifications: {
        packaging: '125g, 250g, 500g clamshells',
        shelfLife: '7-14 days fresh, 12 months frozen',
        certifications: ['Organic', 'Non-GMO', 'SQF']
      }
    },
    {
      name: 'Stone Fruits',
      varieties: ['Peaches', 'Nectarines', 'Plums', 'Apricots'],
      origin: 'Mediterranean & California',
      season: 'May - September',
      image: '/images/products/categories/stone-fruits.jpg',
      description: 'Juicy stone fruits with perfect balance of sweetness and acidity.',
      specifications: {
        packaging: '10kg cartons with protective padding',
        shelfLife: '1-2 weeks at optimal temperature',
        certifications: ['GlobalGAP', 'Organic', 'Local Premium']
      }
    }
  ]

  const qualityFeatures = [
    {
      title: 'Cold Chain Management',
      description: 'Temperature-controlled logistics from harvest to delivery',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: 'Ripeness Optimization',
      description: 'Expert timing to ensure perfect ripeness upon arrival',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Quality Grading',
      description: 'Systematic grading for consistent quality standards',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: 'Traceability',
      description: 'Complete farm-to-table tracking for food safety',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ]

  const nutritionalBenefits = [
    { nutrient: 'Vitamin C', benefit: 'Immune system support', percentage: '120%' },
    { nutrient: 'Fiber', benefit: 'Digestive health', percentage: '25%' },
    { nutrient: 'Antioxidants', benefit: 'Anti-inflammatory properties', percentage: '200%' },
    { nutrient: 'Potassium', benefit: 'Heart health support', percentage: '15%' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/fresh-fruits.png"
            alt="Fresh Fruits"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-green-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Products / Fresh Fruits
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Premium <span className="text-yellow-300">Fresh Fruits</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Hand-selected fresh fruits from the world's finest orchards, delivering exceptional quality, taste, and nutritional value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Samples
            </Link>
            <Link href="#products" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
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
              Fresh Fruit Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality ensures every fruit meets the highest standards of freshness, flavor, and nutritional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
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
              Our Fresh Fruit Selection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse collection of premium fresh fruits sourced from the best growing regions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fruitProducts.map((product, index) => (
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
                    <p className="text-green-200">{product.origin}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Varieties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.varieties.map((variety, varIndex) => (
                          <span key={varIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                            {variety}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Season:</h4>
                      <p className="text-gray-600 text-sm">{product.season}</p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4 font-poppins">Specifications:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Packaging:</span>
                        <span className="font-medium text-gray-900">{product.specifications.packaging}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shelf Life:</span>
                        <span className="font-medium text-gray-900">{product.specifications.shelfLife}</span>
                      </div>
                      <div>
                        <span className="text-gray-600 block mb-2">Certifications:</span>
                        <div className="flex flex-wrap gap-1">
                          {product.specifications.certifications.map((cert, certIndex) => (
                            <span key={certIndex} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
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

      {/* Nutritional Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Nutritional Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our fresh fruits are packed with essential nutrients that support health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {nutritionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 font-poppins mb-2">
                  {benefit.percentage}
                </div>
                <div className="text-gray-900 font-semibold mb-2 font-poppins">
                  {benefit.nutrient}
                </div>
                <p className="text-sm text-gray-600">
                  {benefit.benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-4">
              Health Benefits of Fresh Fruits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Immune Support</h4>
                <p className="text-gray-600 text-sm">High vitamin C content boosts natural immunity</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Heart Health</h4>
                <p className="text-gray-600 text-sm">Natural potassium supports cardiovascular function</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Digestive Wellness</h4>
                <p className="text-gray-600 text-sm">Natural fiber promotes healthy digestion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Source Premium Fresh Fruits Today
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Partner with us for consistent supply of the world's finest fresh fruits with guaranteed quality and freshness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">365</div>
              <div className="text-green-100 mb-4">Days Fresh Supply</div>
              <p className="text-sm text-green-100">Year-round availability guaranteed</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">&lt; 48hrs</div>
              <div className="text-green-100 mb-4">Farm to Port</div>
              <p className="text-sm text-green-100">Ultra-fast cold chain logistics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <div className="text-green-100 mb-4">Quality Score</div>
              <p className="text-sm text-green-100">Consistent premium quality</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quote
            </Link>
            <Link href="/products" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default FreshFruitsPage
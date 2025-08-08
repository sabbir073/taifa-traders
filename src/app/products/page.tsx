import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Premium Products - Edible Oils, Fruits, Spices & Food Staples | Taifa Traders',
  description: 'Discover our premium product range: edible oils, fresh fruits, spices & food staples. Global sourcing with quality assurance. 1000+ varieties from 50+ countries.',
  keywords: 'premium food products, edible oils trading, fresh fruits export, spices and seasonings, food staples import, olive oil, sunflower oil, citrus fruits, black pepper, rice wheat trading',
  openGraph: {
    title: 'Premium Products - Edible Oils, Fruits, Spices & Food Staples | Taifa Traders',
    description: 'Discover our premium product range: edible oils, fresh fruits, spices & food staples. Global sourcing with quality assurance. 1000+ varieties from 50+ countries.',
    url: 'https://taifatraders.com/products',
    images: [
      {
        url: '/images/products/products-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Food Products by Taifa Traders',
      },
    ],
  },
  twitter: {
    title: 'Premium Products by Taifa Traders',
    description: 'Premium edible oils, fresh fruits, spices & food staples. Global sourcing with quality assurance from 50+ countries.',
  },
  alternates: {
    canonical: 'https://taifatraders.com/products',
  },
}

const ProductsPage = () => {
  const productCategories = [
    {
      id: 'fresh-fruits',
      category: 'Fresh Fruits',
      title: 'Premium Fresh Produce',
      description: 'Hand-selected fresh fruits sourced from the world\'s finest orchards, delivering exceptional quality and taste.',
      image: '/images/products/fresh-fruits.png',
      items: ['Citrus', 'Oranges', 'Apples', 'Grapes', 'Berries', 'Seasonal Fruits', 'Exotic Fruits'],
      regions: ['Mediterranean', 'South America', 'Southeast Asia'],
      certifications: ['Organic', 'Fair Trade', 'GlobalGAP'],
      features: ['Year-round availability', 'Cold chain logistics', 'Quality grades', 'Custom packaging']
    },
    {
      id: 'edible-oils',
      category: 'Edible Oils',
      title: 'Premium Cooking & Edible Oils',
      description: 'High-quality refined and unrefined oils for cooking, food processing, and industrial applications.',
      image: '/images/products/edible-oils.png',
      items: ['Olive Oil', 'Sunflower Oil', 'Soybean Oil', 'Palm Oil', 'Coconut Oil', 'Specialty Oils'],
      regions: ['Europe', 'South America', 'Southeast Asia', 'Africa'],
      certifications: ['RSPO', 'Organic', 'Non-GMO', 'Kosher'],
      features: ['Multiple packaging sizes', 'Private labeling', 'Bulk quantities', 'Custom blends']
    },
    {
      id: 'staple-foods',
      category: 'Staple Foods',
      title: 'Essential Food Commodities',
      description: 'Essential food staples and grains that form the backbone of global nutrition and food security.',
      image: '/images/products/food-staples.png',
      items: ['Rice', 'Wheat', 'Corn', 'Barley', 'Lentils', 'Pulses', 'Quinoa'],
      regions: ['Asia', 'North America', 'Europe', 'Australia'],
      certifications: ['Organic', 'Non-GMO', 'Fair Trade', 'Rainforest Alliance'],
      features: ['Various grades', 'Bulk packaging', 'Long shelf life', 'Nutritional analysis']
    },
    {
      id: 'spices-seasonings',
      category: 'Spices & Seasonings',
      title: 'Aromatic Spices & Seasonings',
      description: 'Premium spices and seasonings sourced from traditional growing regions, offering authentic flavors and aromas.',
      image: '/images/products/spices.png',
      items: ['Black Pepper', 'Turmeric', 'Cardamom', 'Cinnamon', 'Ginger', 'Specialty Blends'],
      regions: ['India', 'Indonesia', 'Madagascar', 'Guatemala'],
      certifications: ['Organic', 'Fair Trade', 'EU Organic', 'USDA Organic'],
      features: ['Steam sterilization', 'Custom grinding', 'Whole & ground', 'Flavor profiling']
    }
  ]

  const qualityStandards = [
    {
      title: 'International Certifications',
      description: 'All products meet international quality and safety standards',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: '25+ Certifications'
    },
    {
      title: 'Global Sourcing Network',
      description: 'Direct relationships with trusted suppliers worldwide',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      stats: '200+ Suppliers'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and inspection procedures',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      stats: '99.8% Quality Rate'
    },
    {
      title: 'Sustainable Sourcing',
      description: 'Committed to environmentally responsible practices',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      stats: '80% Sustainable'
    }
  ]

  const productStats = [
    { number: '1000+', label: 'Product Varieties', description: 'Diverse product portfolio' },
    { number: '50+', label: 'Source Countries', description: 'Global sourcing network' },
    { number: '99.8%', label: 'Quality Rating', description: 'Consistent excellence' },
    { number: '24/7', label: 'Supply Chain', description: 'Continuous operations' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/products/products-hero.jpg"
            alt="Premium Products"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
            Premium <span className="text-accent-500">Products</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Sourcing the world's finest food products with uncompromising quality, sustainability, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request Quote
            </Link>
            <Link href="#categories" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Product Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {productStats.map((stat, index) => (
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

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Uncompromising Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence ensures every product meets the highest international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {standard.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {standard.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {standard.description}
                </p>
                <div className="text-accent-500 font-bold text-lg">
                  {standard.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of premium food products sourced from the finest producers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productCategories.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-64 md:h-auto">
                    <Image
                      src={product.image}
                      alt={product.category}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r"></div>
                  </div>
                  
                  <div className="md:w-3/5 p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center bg-accent-100 text-accent-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {product.category}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-3">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Key Items */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Key Products:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.items.slice(0, 2).map((item, itemIndex) => (
                          <span key={itemIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {item}
                          </span>
                        ))}
                        {product.items.length > 2 && (
                          <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-sm font-medium">
                            +{product.items.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2"></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href={`/products/${product.id}`}
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    >
                      View Details
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From farm to table, we ensure quality and traceability at every step of the supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Supplier Selection</h3>
              <p className="text-gray-600">Rigorous vetting of suppliers based on quality, sustainability, and ethical practices.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Quality Inspection</h3>
              <p className="text-gray-600">Comprehensive testing and inspection of all products before procurement.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Logistics & Storage</h3>
              <p className="text-gray-600">Optimal storage conditions and efficient logistics to maintain product integrity.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">Final Delivery</h3>
              <p className="text-gray-600">Timely delivery with complete documentation and traceability records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-poppins mb-6">
            Ready to Source Premium Products?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Partner with us to access the world's finest food products with guaranteed quality and reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Fast</div>
              <div className="text-blue-100 mb-4">Quick Sourcing</div>
              <p className="text-sm text-blue-100">Rapid product sourcing and delivery</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Global</div>
              <div className="text-blue-100 mb-4">Worldwide Reach</div>
              <p className="text-sm text-blue-100">Access to global markets and suppliers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div className="text-3xl font-bold mb-2">Quality</div>
              <div className="text-blue-100 mb-4">Premium Standards</div>
              <p className="text-sm text-blue-100">Guaranteed quality and certification</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Get Quote Now
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
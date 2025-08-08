import Image from 'next/image'
import Link from 'next/link'

const ProductsSection = () => {
  const products = [
    {
      category: "Fresh Fruits",
      title: "Premium Fresh Produce",
      image: "/images/products/fresh-fruits.png",
      items: ["Citrus", "Oranges", "Apples", "Grapes", "Seasonal & Exotic"],
      description: "Premium quality fresh fruits sourced from the best orchards worldwide",
      icon: "🍎",
      url: "/products/fresh-fruits"
    },
    {
      category: "Refined Edible Oils",
      title: "High-Grade Cooking Oils",
      image: "/images/products/edible-oils.png", 
      items: ["Soybean Oil", "Palm Oil", "Mustard Oil", "Sunflower Oil", "Canola Oil"],
      description: "High-grade refined oils meeting international food safety standards",
      icon: "🛢️",
      url: "/products/edible-oils"
    },
    {
      category: "Food Staples",
      title: "Essential Food Commodities",
      image: "/images/products/food-staples.png",
      items: ["Premium Rice", "Quality Lentils", "Pure Wheat", "Refined Sugar"],
      description: "Essential food staples in multiple grades and types for global markets",
      icon: "🌾",
      url: "/products/staple-foods"
    },
    {
      category: "Premium Spices",
      title: "Authentic Spice Collection",
      image: "/images/products/spices.png",
      items: ["Clove", "Cumin", "Coriander", "Ginger", "Garlic", "Turmeric"],
      description: "Authentic spices and seasonings from origin countries with rich flavors",
      icon: "🌶️",
      url: "/products/spices-seasonings"
    },
    {
      category: "Luxury & Lifestyle",
      title: "Elegant Lifestyle Products",
      image: "/images/products/luxury-lifestyle.png",
      items: ["Home Décor", "Gift Items", "Specialty Products", "Custom Imports"],
      description: "Elegant lifestyle products and customized imports based on demand",
      icon: "🎁",
      url: "/products"
    },
    {
      category: "Agricultural Products",
      title: "Farm Fresh Commodities",
      image: "/images/products/agricultural.png",
      items: ["Seeds", "Pulses", "Grains", "Nuts", "Dried Fruits"],
      description: "High-quality agricultural products directly from farms and suppliers",
      icon: "🚜",
      url: "/products"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Our <span className="text-accent-500">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We move more than just products. We move possibilities. Discover our wide range 
            of high-demand goods from trusted international suppliers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.category}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.icon} {product.category}
                </div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg font-poppins mb-2">
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Product Items */}
                <div className="mb-6">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="text-sm font-semibold text-gray-900 font-poppins mr-2">
                      Key Items:
                    </span>
                    {product.items.slice(0, 2).map((item, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {item}
                      </span>
                    ))}
                    {product.items.length > 2 && (
                      <span className="bg-accent-500/10 text-accent-500 px-2 py-1 rounded text-xs">
                        +{product.items.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn More Button */}
                <Link href={product.url} className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/products" className="inline-block bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 mr-4">
            SEE ALL PRODUCTS
          </Link>
          <Link href="/contact" className="inline-block border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            REQUEST QUOTE
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
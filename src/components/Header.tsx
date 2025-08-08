'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface DropdownMenu {
  title: string
  items: { name: string; href: string }[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const aboutDropdown: DropdownMenu = {
    title: 'About',
    items: [
      { name: 'Our Company', href: '/about' },
      { name: 'Mission & Vision', href: '/about/mission' },
      { name: 'Leadership Team', href: '/about/team' },
      { name: 'Global Network', href: '/about/network' },
    ]
  }

  const productsDropdown: DropdownMenu = {
    title: 'Products',
    items: [
      { name: 'Fresh Fruits', href: '/products/fresh-fruits' },
      { name: 'Edible Oils', href: '/products/edible-oils' },
      { name: 'Staple Foods', href: '/products/staple-foods' },
      { name: 'Spices & Seasonings', href: '/products/spices-seasonings' },
      { name: 'All Products', href: '/products' },
    ]
  }

  const servicesDropdown: DropdownMenu = {
    title: 'Services',
    items: [
      { name: 'Global Sourcing', href: '/services/sourcing' },
      { name: 'Quality Assurance', href: '/services/quality' },
      { name: 'Logistics & Shipping', href: '/services/logistics' },
      { name: 'Trade Consulting', href: '/services/consulting' },
      { name: 'All Services', href: '/services' },
    ]
  }

  const DropdownComponent = ({ dropdown }: { dropdown: DropdownMenu }) => {
    return (
      <div className="relative group">
        <button className="flex items-center text-gray-700 hover:text-accent-500 font-medium py-2 px-3 transition-colors duration-300">
          {dropdown.title}
          <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* CSS-only dropdown that shows on group hover */}
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
          <div className="py-2">
            {dropdown.items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Taifa Traders"
              width={120}
              height={109}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 ml-8">
            <div className="flex items-center space-x-10">
              <Link href="/" className="text-gray-700 hover:text-accent-500 font-medium transition-colors duration-300 py-2 px-3">
                Home
              </Link>
              
              <DropdownComponent dropdown={aboutDropdown} />
              <DropdownComponent dropdown={productsDropdown} />
              <DropdownComponent dropdown={servicesDropdown} />
              
              <Link href="/contact" className="text-gray-700 hover:text-accent-500 font-medium transition-colors duration-300 py-2 px-3">
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-h-96 overflow-y-auto py-4">
              {/* Home */}
              <Link 
                href="/" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  About
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'about' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'about' && (
                  <div className="bg-gray-50 px-4 py-2">
                    {aboutDropdown.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-500 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleDropdown('products')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Products
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'products' && (
                  <div className="bg-gray-50 px-4 py-2">
                    {productsDropdown.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-500 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Services
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'services' && (
                  <div className="bg-gray-50 px-4 py-2">
                    {servicesDropdown.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-accent-500 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link 
                href="/contact" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
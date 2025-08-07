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

  const aboutDropdown: DropdownMenu = {
    title: 'About Us',
    items: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'Leadership Team', href: '/about/leadership' },
      { name: 'Core Values', href: '/about/core-values' },
      { name: 'Certifications & Compliance', href: '/about/certifications' },
    ]
  }

  const servicesDropdown: DropdownMenu = {
    title: 'Products & Services',
    items: [
      { name: 'Essential Commodities', href: '/services/commodities' },
      { name: 'Edible Oils', href: '/services/edible-oils' },
      { name: 'Fresh Fruits & Spices', href: '/services/fruits-spices' },
      { name: 'Custom Import Solutions', href: '/services/import-solutions' },
      { name: 'Logistics & Warehousing', href: '/services/logistics' },
      { name: 'Trade Consulting', href: '/services/consulting' },
    ]
  }

  const moreDropdown: DropdownMenu = {
    title: 'More',
    items: [
      { name: 'Global Network', href: '/global-network' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Career', href: '/career' },
    ]
  }

  const DropdownComponent = ({ dropdown }: { dropdown: DropdownMenu }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="flex items-center text-gray-700 hover:text-accent-500 font-medium py-2 px-3 transition-colors duration-300">
          {dropdown.title}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
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
        )}
      </div>
    )
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
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-accent-500 font-medium transition-colors duration-300">
              Home
            </Link>
            
            <DropdownComponent dropdown={aboutDropdown} />
            <DropdownComponent dropdown={servicesDropdown} />
            <DropdownComponent dropdown={moreDropdown} />
            
            <Link href="/contact" className="text-gray-700 hover:text-accent-500 font-medium transition-colors duration-300">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-accent-500 font-medium">
                Home
              </Link>
              <div className="px-3 py-2">
                <span className="text-gray-700 font-medium">About Us</span>
                <div className="ml-4 mt-1 space-y-1">
                  {aboutDropdown.items.map((item, index) => (
                    <Link key={index} href={item.href} className="block py-1 text-sm text-gray-600 hover:text-accent-500">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <span className="text-gray-700 font-medium">Products & Services</span>
                <div className="ml-4 mt-1 space-y-1">
                  {servicesDropdown.items.map((item, index) => (
                    <Link key={index} href={item.href} className="block py-1 text-sm text-gray-600 hover:text-accent-500">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <span className="text-gray-700 font-medium">More</span>
                <div className="ml-4 mt-1 space-y-1">
                  {moreDropdown.items.map((item, index) => (
                    <Link key={index} href={item.href} className="block py-1 text-sm text-gray-600 hover:text-accent-500">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-accent-500 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
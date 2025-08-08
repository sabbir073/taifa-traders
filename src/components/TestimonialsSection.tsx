'use client'
import { useState } from 'react'

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Ahmed Khan",
      company: "FreshMart Ltd",
      position: "Managing Director",
      content: "Taifa Traders has been our go-to partner for importing fresh produce. Their attention to quality and timely deliveries has helped us maintain our reputation in the market. The team is professional and always goes the extra mile.",
      rating: 5,
      avatar: "/images/hero-bg.jpg"
    },
    {
      name: "Sarah Rahman",
      company: "Global Foods BD",
      position: "Procurement Manager",
      content: "Working with Taifa Traders has transformed our supply chain. Their global network and competitive pricing have significantly improved our margins while maintaining quality standards. Highly recommended!",
      rating: 5,
      avatar: "/images/hero-bg.jpg"
    },
    {
      name: "Md. Zahirul Islam",
      company: "Apex Commodities",
      position: "CEO",
      content: "The team at Taifa Traders understands the complexities of international trade. They've helped us navigate regulatory requirements and expand our product range. Their expertise is invaluable to our business growth.",
      rating: 5,
      avatar: "/images/hero-bg.jpg"
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins mb-4">
            Client <span className="text-accent-500">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto ">
            Don't just take our word for it - hear what our satisfied clients have to say about 
            their experience working with Taifa Traders.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 text-accent-500/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="text-lg text-gray-700 mb-8  leading-relaxed italic">
              "{testimonials[activeTestimonial].content}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-xl font-semibold text-gray-600">
                  {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 font-poppins">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-accent-500 font-medium">
                  {testimonials[activeTestimonial].position}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white hover:bg-accent-500 hover:text-white text-gray-600 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white hover:bg-accent-500 hover:text-white text-gray-600 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-accent-500' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
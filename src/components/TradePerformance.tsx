'use client'
import { useState, useEffect } from 'react'

const TradePerformance = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const stats = [
    {
      number: 500,
      suffix: '+',
      label: 'Shipments',
      description: 'Successfully completed worldwide'
    },
    {
      number: 50,
      suffix: '+',
      label: 'Global Partners',
      description: 'Trusted suppliers and distributors'
    },
    {
      number: 95,
      suffix: '%',
      label: 'Client Retention',
      description: 'Satisfied customers return rate'
    },
    {
      number: 10,
      suffix: 'M+',
      label: 'Trade Value',
      description: 'Total trade volume in USD',
      prefix: '$'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('trade-performance')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const CountUp = ({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (isVisible) {
        const duration = 2000
        const steps = 60
        const stepValue = end / steps
        const stepDuration = duration / steps

        let currentStep = 0
        const timer = setInterval(() => {
          currentStep += 1
          setCount(Math.min(currentStep * stepValue, end))
          
          if (currentStep >= steps) {
            clearInterval(timer)
            setCount(end)
          }
        }, stepDuration)

        return () => clearInterval(timer)
      }
    }, [isVisible, end])

    return (
      <span>
        {prefix}{Math.floor(count)}{suffix}
      </span>
    )
  }

  return (
    <section id="trade-performance" className="py-20 bg-primary-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Trade Performance <span className="text-accent-500">Statistics</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-rubik">
            Our numbers speak for themselves - delivering excellence in every aspect of international trade.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-white font-poppins mb-2">
                  <CountUp 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix || ''}
                  />
                </div>
                <div className="text-accent-500 font-semibold text-lg mb-2 font-poppins">
                  {stat.label}
                </div>
                <div className="text-blue-100 text-sm font-rubik">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 font-rubik text-lg mb-6">
            Join hundreds of satisfied clients who trust us for their international trading needs
          </p>
          <button className="bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            START TRADING WITH US
          </button>
        </div>
      </div>
    </section>
  )
}

export default TradePerformance
import Image from 'next/image'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-accent-500">Home</Link>
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8 text-lg">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By accessing and using the services provided by Taifa Traders ("we," "our," or "us"), you accept and agree to be bound by the terms and provisions of this agreement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    If you do not agree with any part of these terms, you should not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Description of Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Taifa Traders provides international trading services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Global sourcing and procurement services</li>
                    <li>Import and export facilitation</li>
                    <li>Supply chain management</li>
                    <li>Trade consulting and advisory services</li>
                    <li>Logistics and warehousing solutions</li>
                    <li>Quality assurance and inspection services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. User Obligations</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Not use our services for illegal or unauthorized purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Maintain the confidentiality of your account information</li>
                    <li>Promptly notify us of any unauthorized use of your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Trading Terms</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">Orders and Contracts</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All orders and contracts are subject to our acceptance and confirmation. We reserve the right to refuse or cancel orders at our discretion.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 font-poppins">Pricing and Payment</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>All prices are subject to change without notice</li>
                    <li>Payment terms will be specified in individual contracts</li>
                    <li>Late payments may incur additional charges</li>
                    <li>All payments must be made in the agreed currency</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 font-poppins">Delivery and Risk</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Delivery terms will be specified using standard Incoterms</li>
                    <li>Risk of loss transfers according to agreed terms</li>
                    <li>We are not liable for delays beyond our control</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Quality and Inspection</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We strive to ensure product quality through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Pre-shipment quality inspections</li>
                    <li>Compliance with international standards</li>
                    <li>Third-party certification when required</li>
                    <li>Proper documentation and traceability</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    However, final inspection and acceptance of goods is the buyer's responsibility unless otherwise agreed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">6. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the fullest extent permitted by law, Taifa Traders shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Delays due to force majeure events</li>
                    <li>Actions or omissions of third-party suppliers</li>
                    <li>Currency fluctuations or market changes</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Our total liability shall not exceed the value of the specific transaction in question.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">7. Force Majeure</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Natural disasters and extreme weather conditions</li>
                    <li>War, terrorism, or civil unrest</li>
                    <li>Government regulations or sanctions</li>
                    <li>Labor strikes or transportation disruptions</li>
                    <li>Pandemic or health emergencies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">8. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All content on our website and materials, including text, graphics, logos, and software, are the property of Taifa Traders and are protected by intellectual property laws.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    You may not reproduce, distribute, or use our content without express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">9. Confidentiality</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Both parties agree to maintain the confidentiality of proprietary information shared during the course of business, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Pricing information and commercial terms</li>
                    <li>Supplier and customer details</li>
                    <li>Business strategies and market intelligence</li>
                    <li>Technical specifications and processes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">10. Dispute Resolution</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Any disputes arising from these terms or our services shall be resolved through:
                  </p>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                    <li>Good faith negotiations between the parties</li>
                    <li>Mediation by a mutually agreed mediator</li>
                    <li>Arbitration under the rules of the relevant chamber of commerce</li>
                    <li>Legal proceedings in the courts of Bangladesh (as a last resort)</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">11. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to conflict of law principles.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">12. Modifications</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">13. Termination</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Either party may terminate the service relationship with reasonable notice. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>All outstanding obligations must be fulfilled</li>
                    <li>Confidentiality obligations remain in effect</li>
                    <li>Payment for completed services is due</li>
                    <li>Access to our services will be discontinued</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">14. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions regarding these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Taifa Traders</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Address:</strong> CWN(A) 3B, Flat-B-1, Road-49, Gulshan-2, Dhaka-1212, Bangladesh</p>
                      <p><strong>Email:</strong> <a href="mailto:info@taifatraders.com" className="text-accent-500 hover:text-red-600">info@taifatraders.com</a></p>
                      <p><strong>Phone:</strong> <a href="tel:+8801898899026" className="text-accent-500 hover:text-red-600">+8801898899026</a></p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white font-poppins mb-4">
              Ready to Start Trading with Us?
            </h2>
            <p className="text-blue-100 mb-8">
              Contact us to discuss your international trading needs and requirements.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
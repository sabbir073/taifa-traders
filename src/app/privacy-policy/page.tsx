import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700 py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
            <span className="text-gray-600">Privacy Policy</span>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Taifa Traders ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By using our website and services, you consent to the practices described in this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 font-poppins">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Name and contact information (email, phone, address)</li>
                    <li>Company information and business details</li>
                    <li>Trade inquiries and communication preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 font-poppins">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website and search terms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To provide and maintain our trading services</li>
                    <li>To process transactions and manage orders</li>
                    <li>To communicate with you about our services</li>
                    <li>To send marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>With trusted partners and suppliers to facilitate trade</li>
                    <li>With service providers who assist our operations</li>
                    <li>When required by law or legal process</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">6. Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Right to access your personal information</li>
                    <li>Right to correct or update your information</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to restrict processing of your information</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">7. Cookies and Tracking</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">8. International Transfers</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As an international trading company, we may transfer your information to countries outside your jurisdiction. We ensure appropriate safeguards are in place for such transfers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">9. Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">10. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
              Have Questions About Our Privacy Practices?
            </h2>
            <p className="text-blue-100 mb-8">
              We're here to help. Contact us for any privacy-related concerns.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-accent-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
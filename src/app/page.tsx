import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80')`
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Professional Auto Repair Services
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Quality service you can trust for all your automotive needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/appointments"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-blue-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Expert Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional automotive care with state-of-the-art equipment and certified technicians
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Oil Change Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop&crop=center&auto=format&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl font-bold">$29.99</span>
                  <span className="ml-2 text-sm">starting</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                  Oil Changes
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Premium oil change service with multi-point inspection and quality motor oil
                </p>
              </div>
            </div>

            {/* Brake Service */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center&auto=format&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl font-bold">$159.99</span>
                  <span className="ml-2 text-sm">starting</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                  Brake Service
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Complete brake system inspection, repair & replacement with quality parts
                </p>
              </div>
            </div>

            {/* Engine Diagnostics */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop&crop=center&auto=format&q=80')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-3xl font-bold">$89.99</span>
                  <span className="ml-2 text-sm">per service</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                  Engine Diagnostics
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Advanced computer diagnostics & performance analysis using modern equipment
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Auto Parts & Accessories
          </h2>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition text-base sm:text-lg"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

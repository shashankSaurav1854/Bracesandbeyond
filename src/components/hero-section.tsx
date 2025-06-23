export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-20 pt-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center text-center mb-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-wide">
            BRACES & BEYOND &nbsp;
          </h2>
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-wide whitespace-nowrap">
            | GURUGRAM
          </h2>
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Perfect Smile
            <span className="block text-blue-600">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Experience exceptional dental care with Dr. Puja Priya. We provide comprehensive,
            pain-free treatments in a comfortable and modern environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </a>
            <a
              href="tel:+1234567890"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

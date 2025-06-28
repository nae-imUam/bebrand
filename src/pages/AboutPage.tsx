import React from 'react';
import { Sparkles, HeartHandshake, IndianRupee, Factory, CheckCircle, Target } from 'lucide-react'; // Essential icons

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Hero Section: Simple, Powerful Introduction */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-800 text-white rounded-3xl p-8 md:p-16 text-center shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 bg-pattern-light opacity-10 animate-pulse-slow"></div> {/* Subtle background pattern */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
            Your Brand, Our Canvas.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-light">
            At **beBrand**, we empower businesses across India to truly shine.
            We take your vision and bring it to life with precision and passion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/request-quote"
              className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get a Quote Today
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              See Our Services
            </a>
          </div>
        </div>
      </section>

      ---

      {/* Our Story: The beBrand Journey */}
      <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="lg:order-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Our Story: Crafting India's Brand Narratives
          </h2>
          <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              Born from India's dynamic spirit, **beBrand** started with a clear purpose:
              to make **high-quality, custom printing** accessible to every entrepreneur, every business,
              from the bustling lanes of Delhi to the serene backwaters of Kerala.
            </p>
            <p>
              We believe a physical product tells a story no digital ad can replicate.
              It's a tangible piece of your identity, a warm handshake with your customers.
              Whether it's vibrant T-shirts, elegant stationery, or unique packaging,
              we ensure every print reflects your brand's true essence.
            </p>
            <p className="font-semibold italic text-teal-600 border-l-4 border-teal-400 pl-4 py-2">
              "We're not just printers; we're partners in building your brand's legacy."
            </p>
          </div>
        </div>
    
      </section>
      <div className="lg:order-1 flex justify-center items-center">
          <img
            src="https://i.ibb.co/Kxyh0cSp/bebrand-journey.png" // Image of hands working on design/print or vibrant Indian art
            alt="The beBrand Journey"
            className="rounded-2xl shadow-xl w-full  h-auto max-h-96 object-cover transform transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>

      ---

      {/* Our Values: Simple & Direct */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Commitments to You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 cursor-pointer">
            <Sparkles size={48} className="text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Creative Excellence</h3>
            <p className="text-gray-600 text-sm">
              Bringing your unique ideas to life with innovative designs and superior print quality.
            </p>
          </div>
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-teal-50 cursor-pointer">
            <HeartHandshake size={48} className="text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Partnerships</h3>
            <p className="text-gray-600 text-sm">
              Building lasting relationships based on reliability, transparency, and mutual respect.
            </p>
          </div>
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-yellow-50 cursor-pointer">
            <IndianRupee size={48} className="text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Great Value</h3>
            <p className="text-gray-600 text-sm">
              Premium printing solutions that deliver exceptional quality for every rupee.
            </p>
          </div>
          <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-purple-50 cursor-pointer">
            <Factory size={48} className="text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Unmatched Quality</h3>
            <p className="text-gray-600 text-sm">
              Meticulous attention to detail and a commitment to flawless execution on every order.
            </p>
          </div>
        </div>
      </section>

      ---

      {/* Our Vision: Clear and Aspirational */}
      <section
        className="relative bg-fixed bg-cover bg-center text-white py-24 md:py-32 rounded-3xl shadow-xl overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547842512-1d227f2771d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Image of a clean, modern print facility or a vibrant, well-branded product
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 animate-fade-in-up">
          <Target size={64} className="mx-auto mb-6 text-white drop-shadow-md" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Our Vision: Empowering Brands Across India.
          </h2>
          <p className="text-xl md:text-2xl opacity-90 font-light">
            We aim to be India's most trusted printing partner, helping every brand
            craft a memorable identity that connects deeply with their audience.
          </p>
        </div>
      </section>

      ---

      {/* beBrand's Impact: Concise Numbers */}
      <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Footprint in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <CheckCircle size={48} className="text-blue-600 mx-auto mb-4" />
            <h3 className="text-5xl font-extrabold text-blue-800">1000+</h3>
            <p className="text-lg text-gray-700">Happy Clients</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <Sparkles size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-5xl font-extrabold text-green-800">5000+</h3>
            <p className="text-lg text-gray-700">Projects Delivered</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <HeartHandshake size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-5xl font-extrabold text-purple-800">10+</h3>
            <p className="text-lg text-gray-700">Years of Trust</p>
          </div>
        </div>
      </section>

      ---

      {/* Meet the Team (Still Recommended but Simplified Copy) */}
      <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Meet the beBrand Family</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          We're a dedicated team in Jharkhand, passionate about bringing your brand's vision to life.
          Your success is our ultimate goal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Team Member Card 1 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <img
              src="https://i.ibb.co/ynTX8Cmm/priya.png" // Consider diverse, authentic Indian team photos
              alt="Priya Sharma"
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-teal-300 transform transition duration-300 hover:scale-105"
              loading="lazy"
            />
            <h4 className="text-xl font-semibold text-gray-900">Priya Sharma</h4>
            <p className="text-teal-600 font-medium mb-2">Founder & Lead Designer</p>
            <p className="text-gray-600 text-center text-sm">
              Passionate about turning ideas into stunning visuals.
            </p>
          </div>
          {/* Example Team Member Card 2 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <img
              src="https://i.ibb.co/QjfsznWc/Rajesh.png" // Consider diverse, authentic Indian team photos
              alt="Rajesh Kumar"
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-teal-300 transform transition duration-300 hover:scale-105"
              loading="lazy"
            />
            <h4 className="text-xl font-semibold text-gray-900">Rajesh Kumar</h4>
            <p className="text-teal-600 font-medium mb-2">Operations Lead</p>
            <p className="text-gray-600 text-center text-sm">
              Ensuring every order is perfect and delivered on time.
            </p>
          </div>
          {/* Example Team Member Card 3 */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <img
              src="https://i.ibb.co/SXydN3MG/Deepa.png" // Consider diverse, authentic Indian team photos
              alt="Deepa Singh"
              className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-teal-300 transform transition duration-300 hover:scale-105"
              loading="lazy"
            />
            <h4 className="text-xl font-semibold text-gray-900">Deepa Singh</h4>
            <p className="text-teal-600 font-medium mb-2">Client Success</p>
            <p className="text-gray-600 text-center text-sm">
              Your direct line for a smooth and satisfying experience.
            </p>
          </div>
        </div>
      </section>

      ---

      {/* Final Call to Action Section */}
      <section className="bg-blue-700 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg transform transition duration-500 hover:scale-[1.01] animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Grow Your Brand?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Let's create something impactful together.
        </p>
        <a
          href="/request-quote"
          className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center"
        >
          Start Your Project
          <Sparkles size={20} className="ml-2" />
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
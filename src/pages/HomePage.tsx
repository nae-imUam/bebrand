import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Plus } from 'lucide-react';
import { ShieldCheck, IndianRupee, Handshake, Quote } from 'lucide-react';

interface HomePageProps {
  navigate: (page: string, categoryId?: string, sampleDetails?: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => (
  <div className="space-y-12">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-16 text-center shadow-xl overflow-hidden">
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://i.ibb.co/mF5CzC1T/be-Brand-Prom.png?text=Your+Brand+Visuals')" }}></div> */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 leading-tight animate-fade-in-up">
          <span className="block text-indigo-700">Custom Prints,</span> <span className="block text-blue-600">Unleash Your Brand!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
          From T-shirts to Umbrellas, we bring your vision to life for sports teams, schools, and businesses.
        </p>
        <img src='https://i.ibb.co/mF5CzC1T/be-Brand-Prom.png?text=Your+Brand+Visuals' alt="beBrand Promotional Image" className="mb-6 rounded-lg shadow-lg animate-fade-in-up delay-200" />
        <button
          onClick={() => navigate('services')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 inline-flex items-center group animate-fade-in-up delay-200"
        >
          Explore Our Services
          <Plus size={20} className="ml-2 group-hover:rotate-90 transition duration-300" />
        </button>
      </div>
    </section>

    {/* Services Highlights */}
    <section className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Popular Printing Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          image="https://i.ibb.co/jvmLF7Sw/be-Brandtshirt2.png?text=T-shirts"
          title="Apparel & Uniforms"
          description="Custom T-shirts, jerseys, hoodies, and more for teams and events."
        />
        <ServiceCard
          image="https://i.ibb.co/PvgnbDp2/be-Brand-Bags2.png?text=Bags"
          title="Bags & Accessories"
          description="Branded bags, backpacks, and promotional items for everyday use."
        />
        <ServiceCard
          image="https://i.ibb.co/rRX1W3rg/be-Brand-Umb5.png?text=Umbrellas"
          title="Outdoor & Promotional"
          description="Custom umbrellas, caps, and outdoor gear to make a statement."
        />
        <ServiceCard
          image="https://i.ibb.co/60BgwJqJ/be-Brand-Shoes.png?text=Footwear"
          title="Custom Footwear"
          description="Personalized shoes for sports, school events, or unique branding."
        />
        <ServiceCard
          image="https://i.ibb.co/kntNPWQ/be-Brandsporting.png?text=Sports+Gear"
          title="Sports & Coaching Gear"
          description="Tailored printing for sports equipment, training apparel, and more."
        />
        <ServiceCard
          image="https://i.ibb.co/NdMfdHC3/be-Brandimas.png?text=School+Supplies"
          title="School & Institution Needs"
          description="Branded school uniforms, stationery, and event accessories."
        />
      </div>
    </section>

     {/* Why Choose Us Section: Emphasizing Indian Values */}
    <section className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 md:p-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Why **beBrand** is Your Best Choice</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
        Rooted in Jharkhand, we blend modern techniques with a deep understanding of local needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <ShieldCheck size={48} className="text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Assured Quality</h3>
          <p className="text-gray-600 text-sm">
            We use top-grade materials and precise printing, ensuring every product is a testament to quality.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <IndianRupee size={48} className="text-amber-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Value for Money</h3>
          <p className="text-gray-600 text-sm">
            Competitive pricing tailored for the Indian market, delivering excellence within your budget.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <Handshake size={48} className="text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Expertise & Support</h3>
          <p className="text-gray-600 text-sm">
            Dedicated team in Jharkhand ready to provide personalized service and quick solutions.
          </p>
        </div>
      </div>
    </section>

    ---

    {/* Customer Testimonial Section: Authentic & Local */}
    <section className="bg-blue-600 text-white rounded-xl shadow-lg p-8 md:p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 animate-spin-slow">
        <Quote size={100} className="text-blue-400 mx-auto" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <Quote size={64} className="mx-auto mb-6 text-blue-200 opacity-80" />
        <p className="text-xl md:text-2xl italic font-light mb-6 leading-relaxed">
          "Working with **beBrand** was a breeze! They delivered fantastic customized uniforms for our school
          cricket team right here in Ranchi. The quality is top-notch and the service was truly exceptional."
        </p>
        <p className="text-lg font-semibold">- Rohit Sharma, Sports Coordinator, DPS Ranchi</p>
      </div>
    </section>


    {/* Call to Action */}
    <section className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg transform transition duration-500 hover:scale-[1.01]">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Create Something Amazing?</h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Get a free quote today and let's bring your brand's vision to life with high-quality custom printing.
      </p>
      <button
        onClick={() => navigate('contact')} // Keeping this to contact as general quote
        className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
      >
        Get a Free Quote
      </button>
    </section>
  </div>
);

export default HomePage;
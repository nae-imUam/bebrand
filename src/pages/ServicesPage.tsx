import React from 'react';
import { Shirt, Briefcase, FlaskConical, PenTool, Footprints, Award} from 'lucide-react';

interface ServicesPageProps {
  navigate: (page: string, categoryId?: string, sampleDetails?: any) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ navigate }) => {
  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Comprehensive Printing Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          UniPrint Hub offers a wide range of customization options to meet all your branding needs, from apparel, accessories to promotional items. Click on a service to see samples and pricing!
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'T-Shirts & Hoodies',
              desc: 'Custom printing for casual wear, team jerseys, event merchandise, and corporate uniforms.',
              img: 'https://placehold.co/400x300/4F46E5/FFFFFF/PNG?text=T-shirts',
              categoryId: 'Apparel',
              icon: <Shirt size={24} className="text-blue-600" />,
            },
            {
              title: 'Bags & Backpacks',
              desc: 'Personalized tote bags, backpacks, and duffels perfect for promotions, schools, or everyday branding.',
              img: 'https://placehold.co/400x300/F97316/FFFFFF/PNG?text=Bags',
              categoryId: 'Bags',
              icon: <Briefcase size={24} className="text-orange-600" />,
            },
            {
              title: 'Umbrellas & Caps',
              desc: 'High-quality printing on umbrellas, caps, and hats, ideal for outdoor events and brand visibility.',
              img: 'https://placehold.co/400x300/06B6D4/FFFFFF/PNG?text=Umbrellas',
              categoryId: 'Accessories',
              icon: <FlaskConical size={24} className="text-cyan-600" />,
            },
            {
              title: 'Custom Footwear',
              desc: 'Unique designs on shoes for sports teams, school events, or a distinctive brand statement.',
              img: 'https://placehold.co/400x300/EF4444/FFFFFF/PNG?text=Footwear',
              categoryId: 'Footwear',
              icon: <Footprints size={24} className="text-red-600" />,
            },
            {
              title: 'Sportswear & Uniforms',
              desc: 'Durable and breathable printing for sports jerseys, tracksuits, shorts, and performance wear.',
              img: 'https://placehold.co/400x300/22C55E/FFFFFF/PNG?text=Sportswear',
              categoryId: 'Apparel',
              icon: <Shirt size={24} className="text-green-600" />,
            },
            {
              title: 'Pants, Lowers & Uppers',
              desc: 'Comprehensive branding solutions for all types of clothing, ensuring consistency across your apparel.',
              img: 'https://placehold.co/400x300/A855F7/FFFFFF/PNG?text=Pants+Uppers',
              categoryId: 'Apparel',
              icon: <Shirt size={24} className="text-purple-600" />,
            },
            {
              title: 'Coaching & School Gear',
              desc: 'Specialized printing for coaching bibs, training cones, school bags, and stationery items.',
              img: 'https://placehold.co/400x300/F59E0B/FFFFFF/PNG?text=School+Gear',
              categoryId: 'SportsCoaching',
              icon: <Award size={24} className="text-yellow-600" />,
            },
            {
              title: 'Mugs & Drinkware',
              desc: 'Custom mugs, bottles, and tumblers – perfect for corporate gifts or personal use.',
              img: 'https://placehold.co/400x300/3B82F6/FFFFFF/PNG?text=Mugs',
              categoryId: 'Drinkware',
              icon: <FlaskConical size={24} className="text-indigo-600" />,
            },
            {
              title: 'Promotional Items',
              desc: 'Boost your brand with custom pens, keychains, notebooks, and other highly effective giveaways.',
              img: 'https://placehold.co/400x300/EC4899/FFFFFF/PNG?text=Promotional+Items',
              categoryId: 'Promotional',
              icon: <PenTool size={24} className="text-pink-600" />,
            },
          ].map((service, index) => (
            <button
              key={index}
              onClick={() => navigate('samples', service.categoryId)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/400x300/E0E7FF/4338CA?text=Image+Not+Found';
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
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
          BeBrand offers a wide range of customization options to meet all your branding needs, from apparel, accessories to promotional items. Click on a service to see samples and pricing!
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'T-Shirts & Hoodies',
              desc: 'Custom printing for casual wear, team jerseys, event merchandise, and corporate uniforms.',
              img: 'https://i.ibb.co/jvmLF7Sw/be-Brandtshirt2.png?text=T-shirts',
              categoryId: 'Apparel',
              icon: <Shirt size={24} className="text-blue-600" />,
            },
            {
              title: 'Bags & Backpacks',
              desc: 'Personalized tote bags, backpacks, and duffels perfect for promotions, schools, or everyday branding.',
              img: 'https://i.ibb.co/G4RL1HwZ/be-Brand-Bags2.png?text=Bags',
              categoryId: 'Bags',
              icon: <Briefcase size={24} className="text-orange-600" />,
            },
            {
              title: 'Umbrellas & Caps',
              desc: 'High-quality printing on umbrellas, caps, and hats, ideal for outdoor events and brand visibility.',
              img: 'https://i.ibb.co/rLYhYcL/be-Brand-Umb4.png?text=Umbrellas',
              categoryId: 'Accessories',
              icon: <FlaskConical size={24} className="text-cyan-600" />,
            },
            {
              title: 'Custom Footwear',
              desc: 'Unique designs on shoes for sports teams, school events, or a distinctive brand statement.',
              img: 'https://i.ibb.co/jPrszg4H/be-Brandsportshoes.png?text=Footwear',
              categoryId: 'Footwear',
              icon: <Footprints size={24} className="text-red-600" />,
            },
            {
              title: 'Sportswear & Uniforms',
              desc: 'Durable and breathable printing for sports jerseys, tracksuits, shorts, and performance wear.',
              img: 'https://i.ibb.co/hxZs5PmM/be-Brandtshirt.png?text=Sportswear',
              categoryId: 'Apparel',
              icon: <Shirt size={24} className="text-green-600" />,
            },
            {
              title: 'Pants, Lowers & Uppers',
              desc: 'Comprehensive branding solutions for all types of clothing, ensuring consistency across your apparel.',
              img: 'https://i.ibb.co/NgFWKj7F/be-Brand-Upper.png?text=Pants+Uppers',
              categoryId: 'Apparel',
              icon: <Shirt size={24} className="text-purple-600" />,
            },
            {
              title: 'Coaching & School Gear',
              desc: 'Specialized printing for coaching bibs, training cones, school bags, and stationery items.',
              img: 'https://i.ibb.co/kntNPWQ/be-Brandsporting.png?text=School+Gear',
              categoryId: 'SportsCoaching',
              icon: <Award size={24} className="text-yellow-600" />,
            },
            {
              title: 'Mugs & Drinkware',
              desc: 'Custom mugs, bottles, and tumblers – perfect for corporate gifts or personal use.',
              img: 'https://i.ibb.co/RGBnJ22t/be-Brand-Mugs.png?text=Mugs',
              categoryId: 'Drinkware',
              icon: <FlaskConical size={24} className="text-indigo-600" />,
            },
            {
              title: 'Promotional Items',
              desc: 'Boost your brand with custom pens, keychains, notebooks, and other highly effective giveaways.',
              img: 'https://i.ibb.co/ns0r2C2N/be-Brand-Notebooks.png?text=Promotional+Items',
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
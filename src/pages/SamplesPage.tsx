import React, { useState, useEffect } from 'react';
import { Shirt, Briefcase, Palette, PenTool, Footprints, Award, BookOpen, FlaskConical } from 'lucide-react';

interface SampleDetails {
  id: number;
  name: string;
  img: string;
  description: string;
  price: string;
  moq: string;
  features: string[];
}

interface SamplesPageProps {
  navigate: (page: string, categoryId?: string, sampleDetails?: SampleDetails | null) => void;
  initialSelectedCategory: string;
}

interface SampleCategory {
  id: string;
  name: string;
  icon: React.JSX.Element;
  samples: SampleDetails[];
}

const SamplesPage: React.FC<SamplesPageProps> = ({ navigate, initialSelectedCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialSelectedCategory || 'All');

  const allSampleCategories: SampleCategory[] = [
    {
      id: 'All',
      name: 'All Categories',
      icon: <Palette size={20} className="mr-2" />,
      samples: [],
    },
    {
      id: 'Apparel',
      name: 'Apparel & Uniforms',
      icon: <Shirt size={20} className="mr-2" />,
      samples: [
        {
          id: 1,
          name: 'Classic Cotton Tee',
          img: 'https://i.ibb.co/1GFLyqY9/be-Brandcotshirt.png?text=Team+Tee+Sample',
          description: 'Soft cotton tee with durable screen print for sports teams, clubs, and events. Excellent for everyday wear.',
          price: '₹155.99/unit',
          moq: '50 units',
          features: ['100% Pre-shrunk Cotton', 'Vibrant Screen Printing', 'Unisex Fit', 'Comfortable & Breathable']
        },
        {
          id: 2,
          name: 'Performance Dry-Fit Polo',
          img: 'https://i.ibb.co/ksvjkbXw/be-Brandpolo.png?text=Polo+Shirt+Sample',
          description: 'Moisture-wicking polo for coaching staff, corporate events, and active teams. Features an elegant embroidered logo option.',
          price: '₹258.50/unit',
          moq: '30 units',
          features: ['Quick-Dry Fabric', 'Embroidered Logo Option', 'Breathable Design', 'Professional Look']
        },
        {
          id: 3,
          name: 'Premium Fleece Hoodie',
          img: 'https://i.ibb.co/ndbHvzs/be-Brand-Hoodie2.png?text=Hoodie+Sample',
          description: 'Warm and comfortable hoodie with large back print for school clubs, university societies, or promotional giveaways.',
          price: '₹355.00/unit',
          moq: '25 units',
          features: ['Heavy Blend Fleece', 'Large Print Area', 'Kangaroo Pocket', 'Ideal for Winter Promotions']
        },
        {
          id: 13,
          name: 'Custom V-Neck T-Shirt',
          img: 'https://i.ibb.co/KcGKPdLr/be-Brand-Vneck2.png?text=V-Neck+Tee',
          description: 'Stylish V-neck T-shirt, perfect for fashion-forward brands or event staff. Soft and flattering fit.',
          price: '₹157.50/unit',
          moq: '50 units',
          features: ['Soft Cotton Blend', 'Modern V-Neck Design', 'Comfort & Style', 'Retail-Ready Quality']
        },
        {
          id: 14,
          name: 'Long Sleeve Performance Top',
          img: 'https://i.ibb.co/HvBkMrD/be-Brandlongsleev.png?text=Long+Sleeve+Top',
          description: 'Lightweight and breathable long-sleeve top for sports training or casual wear. Provides sun protection.',
          price: '₹252.00/unit',
          moq: '40 units',
          features: ['UV Protection', 'Moisture-Wicking', 'Athletic Fit', 'Ideal for Outdoor Activities']
        },
        {
          id: 15,
          name: 'Team Basketball Jersey',
          img: 'https://i.ibb.co/qMQM1nkS/Gemini-Generated-Image-iuzy1wiuzy1wiuzy.png?text=Basketball+Jersey',
          description: 'Fully customizable basketball jersey with team name, numbers, and logos. Durable and designed for performance.',
          price: '₹455.00/unit',
          moq: '15 units',
          features: ['Reversible Options', 'Durable Mesh Fabric', 'Full Customization', 'Pro-Level Quality']
        },
      ],
    },
    {
      id: 'Bags',
      name: 'Bags & Backpacks',
      icon: <Briefcase size={20} className="mr-2" />,
      samples: [
        {
          id: 4,
          name: 'Branded Canvas Tote Bag',
          img: 'https://i.ibb.co/27BtPpQx/Gemini-Generated-Image-ifr2vvifr2vvifr2.png?text=Tote+Bag+Sample',
          description: 'Eco-friendly, sturdy canvas tote bag. Excellent for retail, events, and sustainable branding. Large print area.',
          price: '₹85.75/unit',
          moq: '100 units',
          features: ['Recycled Canvas', 'Spacious Compartment', 'Custom Handle Colors', 'Reusable & Durable']
        },
        {
          id: 5,
          name: 'Custom Drawstring Sport Bag',
          img: 'https://i.ibb.co/HTFvLxZC/Gemini-Generated-Image-5ngxqc5ngxqc5ngx.png?text=Drawstring+Bag',
          description: 'Lightweight and durable drawstring bag, ideal for sports teams, school activities, or gym promotions. Easy to carry.',
          price: '₹55.20/unit',
          moq: '75 units',
          features: ['Durable Polyester', 'Easy Cinch Closure', 'Vibrant Print', 'Lightweight & Versatile']
        },
        {
          id: 16,
          name: 'Personalized Laptop Backpack',
          img: 'https://i.ibb.co/7tcTRx1y/Gemini-Generated-Image-qtqi45qtqi45qtqi.png?text=Laptop+Backpack',
          description: 'High-quality backpack with padded laptop compartment, perfect for corporate employees or school use. Custom logo embroidery.',
          price: '₹450.00/unit',
          moq: '20 units',
          features: ['Padded Laptop Sleeve', 'Multiple Compartments', 'Comfortable Straps', 'Professional Appeal']
        },
        {
          id: 17,
          name: 'Travel Duffel Bag',
          img: 'https://i.ibb.co/yjQKdfb/Gemini-Generated-Image-jd0f30jd0f30jd0f.png?text=Duffel+Bag',
          description: 'Spacious duffel bag for travel, sports, or weekend trips. Ideal for team kits or employee recognition gifts.',
          price: '₹350.00/unit',
          moq: '25 units',
          features: ['Large Capacity', 'Durable Material', 'Detachable Shoulder Strap', 'Versatile Use']
        },
      ],
    },
    {
      id: 'Accessories',
      name: 'Accessories & Headwear',
      icon: <FlaskConical size={20} className="mr-2" />, // Reusing FlaskConical for a generic icon
      samples: [
        {
          id: 6,
          name: 'Embroidered Baseball Cap',
          img: 'https://i.ibb.co/TMGk21HY/Gemini-Generated-Image-flkrwlflkrwlflkr.png?text=Cap+Sample',
          description: 'Classic baseball cap with custom embroidered logo. Ideal for outdoor events, team wear, or brand promotion.',
          price: '₹152.00/unit',
          moq: '50 units',
          features: ['100% Cotton Twill', 'Adjustable Strap', 'High-Quality Embroidery', 'Universal Appeal']
        },
        {
          id: 18,
          name: 'Custom Printed Socks',
          img: 'https://i.ibb.co/dwHh1zhQ/Gemini-Generated-Image-fb609mfb609mfb60.png?text=Custom+Socks',
          description: 'Fun and unique custom printed socks. Great for team spirit, quirky giveaways, or branded merchandise.',
          price: '₹95.50/pair',
          moq: '60 pairs',
          features: ['Comfortable Blend', 'Full Color Printing', 'Unique Branding', 'Memorable Gift']
        },
        {
          id: 19,
          name: 'Sublimated Lanyard',
          img: 'https://i.ibb.co/39SDrK0Y/Gemini-Generated-Image-fg9wowfg9wowfg9w.png?text=Lanyard+Sample',
          description: 'Full-color sublimated lanyards for conferences, staff IDs, or event passes. Highly customizable.',
          price: '₹35.00/unit',
          moq: '100 units',
          features: ['Durable Polyester', 'Vibrant Full-Color Print', 'Various Attachments', 'Event Essential']
        },
      ],
    },
    {
      id: 'Drinkware',
      name: 'Drinkware',
      icon: <FlaskConical size={20} className="mr-2" />,
      samples: [
        {
          id: 7,
          name: 'Large Golf Umbrella',
          img: 'https://i.ibb.co/RkgHtty6/Gemini-Generated-Image-vs1izivs1izivs1i.png?text=Umbrella+Sample',
          description: 'Large, windproof umbrella with multiple panel printing. Perfect for corporate gifts, outdoor events, and strong brand visibility.',
          price: '₹455.00/unit',
          moq: '20 units',
          features: ['Auto Open Mechanism', 'Fiberglass Frame', 'Multiple Print Panels', 'Weather Resistant']
        },
        {
          id: 8,
          name: 'Custom Insulated Tumbler',
          img: 'https://placehold.co/600x400/3B82F6/FFFFFF/PNG?text=Tumbler+Sample',
          description: 'Keep drinks hot or cold with your custom logo. Perfect for office, travel, or client appreciation gifts.',
          price: '₹158.00/unit',
          moq: '40 units',
          features: ['Double-Wall Insulation', 'Stainless Steel', 'Laser Engraving/Print', 'Premium Feel']
        },
        {
          id: 20,
          name: 'Branded Ceramic Mug',
          img: 'https://i.ibb.co/hFTsVNtm/Gemini-Generated-Image-y3ez0by3ez0by3ez.png?text=Ceramic+Mug',
          description: 'Classic ceramic mug with your custom design. Ideal for office use, coffee shops, or promotional giveaways.',
          price: '₹75.50/unit',
          moq: '50 units',
          features: ['Microwave Safe', 'Dishwasher Safe', 'Vibrant Print Quality', 'Everyday Brand Exposure']
        },
        {
          id: 21,
          name: 'Sport Water Bottle',
          img: 'https://i.ibb.co/NnK4YXcH/Gemini-Generated-Image-lvh8x5lvh8x5lvh8.png?text=Sport+Bottle',
          description: 'Durable, BPA-free sport water bottle with full-color logo printing. Essential for gyms, sports teams, and active lifestyles.',
          price: '₹150.50/unit',
          moq: '60 units',
          features: ['BPA-Free Plastic', 'Leak-Proof Lid', 'Ergonomic Design', 'Promotes Healthy Habits']
        },
      ],
    },
    {
      id: 'Promotional',
      name: 'Promotional & Office Supplies',
      icon: <PenTool size={20} className="mr-2" />,
      samples: [
        {
          id: 9,
          name: 'Branded Ballpoint Pens',
          img: 'https://i.ibb.co/hJQbmTpv/Gemini-Generated-Image-80916g80916g8091.png?text=Branded+Pens',
          description: 'Affordable and effective way to promote your brand. Ideal for conferences, trade shows, and mass giveaways. High brand recall.',
          price: '₹15.50/unit',
          moq: '200 units',
          features: ['Smooth Writing', 'Multiple Color Options', 'Durable Print', 'Cost-Effective Marketing']
        },
        {
          id: 10,
          name: 'Custom Logo Keychains',
          img: 'https://i.ibb.co/wFP215nf/Gemini-Generated-Image-sfcsxgsfcsxgsfcs.png?text=Custom+Keychains',
          description: 'Keep your brand in hand with personalized keychains. Great for everyday visibility and a lasting impression.',
          price: '₹25.25/unit',
          moq: '150 units',
          features: ['Durable Material', 'Various Shapes Available', 'Clear Branding', 'Long-Lasting Exposure']
        },
        {
          id: 11,
          name: 'Branded Spiral Notebooks',
          img: 'https://i.ibb.co/Csz3TRjY/Gemini-Generated-Image-loiv95loiv95loiv.png?text=Branded+Notebooks',
          description: 'Professional notebooks with your logo. Perfect for corporate events, client gifts, or internal team use.',
          price: '₹65.00/unit',
          moq: '75 units',
          features: ['High-Quality Paper', 'Custom Cover Design', 'Useful & Practical', 'Enhances Professional Image']
        },
        {
          id: 12,
          name: 'Custom USB Flash Drives',
          img: 'https://i.ibb.co/KxWNt4wr/Gemini-Generated-Image-l3al9tl3al9tl3al.png?text=Custom+USB',
          description: 'A tech-savvy promotional item for data sharing and maximum brand exposure. Available in various capacities.',
          price: '₹150.00/unit',
          moq: '50 units',
          features: ['Various Capacities', 'Sleek Design', 'Functional Gift', 'Modern & Tech-Savvy Branding']
        },
        {
          id: 22,
          name: 'Custom Stress Balls',
          img: 'https://i.ibb.co/tTW4zLDP/Gemini-Generated-Image-4pu2j94pu2j94pu2.png?text=Stress+Ball',
          description: 'Fun and interactive stress relief with your brand logo. A memorable giveaway for any event or office.',
          price: '₹35.50/unit',
          moq: '100 units',
          features: ['Ergonomic Design', 'Various Shapes', 'Interactive Marketing', 'Reduces Stress']
        },
        {
          id: 23,
          name: 'Branded Sticky Notes',
          img: 'https://i.ibb.co/MkCCjn8h/Gemini-Generated-Image-m2jz4qm2jz4qm2jz.png?text=Sticky+Notes',
          description: 'Keep your brand top-of-mind with custom sticky notes. Essential for office and study use.',
          price: '₹25.00/pad',
          moq: '100 pads',
          features: ['Strong Adhesive', 'Various Sizes', 'Practical Desk Item', 'Daily Brand Reminder']
        },
      ],
    },
    {
      id: 'Footwear',
      name: 'Custom Footwear',
      icon: <Footprints size={20} className="mr-2" />,
      samples: [
        {
          id: 24,
          name: 'Custom Branded Sneakers',
          img: 'https://i.ibb.co/fG25rzFF/Gemini-Generated-Image-7982zv7982zv7982.png?text=Custom+Sneakers',
          description: 'Unique, personalized sneakers for sports teams, special events, or bold brand representation. Stand out from the crowd.',
          price: '₹755.00/pair',
          moq: '10 pairs',
          features: ['High-Quality Materials', 'Full Custom Print Area', 'Comfortable & Durable', 'Exclusive Branding']
        },
        {
          id: 25,
          name: 'Team Flip-Flops',
          img: 'https://i.ibb.co/6qkDXZw/bebrand-Shoes2.png?text=Team+Flip-Flops',
          description: 'Custom printed flip-flops, great for sports teams, beach events, or summer promotions. Light and comfortable.',
          price: '₹152.00/pair',
          moq: '30 pairs',
          features: ['Comfortable Sole', 'Durable Strap', 'Vibrant Print', 'Casual Brand Exposure']
        },
      ],
    },
    {
      id: 'SportsCoaching',
      name: 'Sports & Coaching Gear',
      icon: <Award size={20} className="mr-2" />,
      samples: [
        {
          id: 26,
          name: 'Numbered Training Bibs',
          img: 'https://i.ibb.co/m5jR7TWT/Gemini-Generated-Image-krqn51krqn51krqn.png?text=Training+Bibs',
          description: 'Lightweight and durable training bibs with custom numbers and logos for sports teams and coaching academies.',
          price: '₹85.00/unit',
          moq: '20 units',
          features: ['Breathable Mesh', 'Fade-Resistant Print', 'Multiple Colors', 'Enhances Team Coordination']
        },
        {
          id: 27,
          name: 'Custom Sports Towels',
          img: 'https://i.ibb.co/TMj6kW9y/Gemini-Generated-Image-jo5j6sjo5j6sjo5j.png?text=Sports+Towel',
          description: 'Highly absorbent sports towels with embroidered or printed logos. Perfect for gyms, sports clubs, or event participants.',
          price: '₹155.00/unit',
          moq: '30 units',
          features: ['Quick-Dry Microfiber', 'Soft & Absorbent', 'Durable Branding', 'Practical & Premium']
        },
        {
          id: 28,
          name: 'Branded Coaching Boards',
          img: 'https://i.ibb.co/QFHwqY7n/Gemini-Generated-Image-ebyqzkebyqzkebyq.png?text=Coaching+Board',
          description: 'Customizable coaching boards for strategy and drills. Essential for any coach or team leader.',
          price: '₹255.00/unit',
          moq: '10 units',
          features: ['Dry-Erase Surface', 'Custom Layouts', 'Durable Construction', 'Strategic Tool']
        },
      ],
    },
    {
      id: 'SchoolInstitution',
      name: 'School & Institution Supplies',
      icon: <BookOpen size={20} className="mr-2" />,
      samples: [
        {
          id: 29,
          name: 'Custom School Bags',
          img: 'https://i.ibb.co/HfwcbNjP/Gemini-Generated-Image-k86c9rk86c9rk86c.png?text=School+Bag',
          description: 'Durable school backpacks with embroidered school crests or logos. Comfortable and spacious for students.',
          price: '₹358.00/unit',
          moq: '20 units',
          features: ['Reinforced Stitching', 'Padded Straps', 'Multiple Pockets', 'School Spirit Builder']
        },
        {
          id: 30,
          name: 'Personalized Graduation Stoles',
          img: 'https://i.ibb.co/PZ12h4Jn/Gemini-Generated-Image-w4h868w4h868w4h8.png?text=Graduation+Stole',
          description: 'High-quality graduation stoles with custom embroidery for school or university ceremonies. A lasting memento.',
          price: '₹250.00/unit',
          moq: '20 units',
          features: ['Premium Satin Fabric', 'Detailed Embroidery', 'Commemorative Item', 'School Pride']
        },
      ],
    },
  ];

  // Populate the 'All Categories' samples by flattening all other category samples
  useEffect(() => {
    // This effect ensures that the 'All Categories' list is always up-to-date
    // and correctly reflects all samples when the component mounts or initial category changes.
    const allSamples = allSampleCategories.slice(1).flatMap(category => category.samples);
    // Directly modifying allSampleCategories[0].samples is okay for static data like this,
    // but in a real app with dynamic data, you'd manage this state differently (e.g., using useState for `allSampleCategories`).
    allSampleCategories[0].samples = allSamples;
  }, [initialSelectedCategory]); // Dependency array: re-run if initialSelectedCategory changes

  const displayedSamples = selectedCategory === 'All'
    ? allSampleCategories[0].samples
    : allSampleCategories.find(cat => cat.id === selectedCategory)?.samples || [];

  return (
    <div className="space-y-12">
      <section className="bg-gradient-to-r from-emerald-500 to-lime-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Samples & Pricing</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Explore our extensive portfolio of custom printed products by category, featuring competitive pricing and flexible minimum order quantities.
        </p>
      </section>

      {/* Category Navigation */}
      <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {allSampleCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition duration-300
                ₹{5selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Displayed Samples */}
      <section className="bg-white rounded-xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-200 pb-4">
          {allSampleCategories.find(cat => cat.id === selectedCategory)?.name} Samples
        </h2>
        {displayedSamples.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedSamples.map((sample) => (
              <div key={sample.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                <img
                  src={sample.img}
                  alt={sample.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x400/E0E7FF/4338CA?text=Sample+Image';
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{sample.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{sample.description}</p>
                  <div className="flex justify-between items-center mb-4 text-lg font-bold">
                    <span className="text-blue-700">{sample.price}</span>
                    <span className="text-gray-600 text-sm">MOQ: {sample.moq}</span>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc list-inside space-y-1 mt-4">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    {sample.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate('requestQuote', 'All', sample)} // Pass sample details to requestQuote page
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition duration-300"
                  >
                    Request Quote for {sample.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg py-10">No samples available for this category yet. Please check back soon!</p>
        )}
      </section>

      <section className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-lg transform transition duration-500 hover:scale-[1.01]">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Didn't find what you're looking for?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          We offer fully custom solutions! Contact us with your unique requirements.
        </p>
        <button
          onClick={() => navigate('requestQuote', 'All', null)} // Navigate to blank quote form
          className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          Contact for Custom Order
        </button>
      </section>
    </div>
  );
};

export default SamplesPage;
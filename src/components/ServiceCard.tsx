import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = 'https://placehold.co/400x300/E0E7FF/4338CA?text=Image+Not+Found';
      }}
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
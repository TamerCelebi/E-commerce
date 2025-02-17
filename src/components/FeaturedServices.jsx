import React from 'react';
import { FaBook, FaArrowsAlt, FaCrown } from 'react-icons/fa';
import { services } from '../data/services';

const iconMap = {
  book: FaBook,
  arrows: FaArrowsAlt,
  crown: FaCrown
};

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-[#737373] text-xl mb-2">Featured Products</h5>
          <h2 className="text-2xl font-bold text-[#252B42] mb-4">
            THE BEST SERVICES
          </h2>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id} 
                className="text-center p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-4xl text-[#23A6F0]" />
                </div>
                <h3 className="text-2xl font-bold text-[#252B42] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#737373]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

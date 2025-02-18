import React from 'react';
import { FaBook, FaChartLine, FaRocket } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaBook className="w-8 h-8 text-[#23A6F0]" />,
      title: "Easy Wins",
      description: "Get your best looking smile now!"
    },
    {
      id: 2,
      icon: <FaChartLine className="w-8 h-8 text-[#23A6F0]" />,
      title: "Concrete",
      description: "Defalcate is most focused in helping you discover your most beautiful smile"
    },
    {
      id: 3,
      icon: <FaRocket className="w-8 h-8 text-[#23A6F0]" />,
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">
            THE BEST SERVICES
          </h2>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#252B42] mb-4">
                {service.title}
              </h3>
              <div className="w-12 h-1 bg-[#E74040] mx-auto mb-4"></div>
              <p className="text-[#737373] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

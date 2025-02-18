import React, { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'FREE',
      price: '0',
      description: 'Organize across all apps by hand',
      features: [
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: '1GB Cloud storage', active: false },
        { text: 'Email and community support', active: false }
      ],
      buttonText: 'Try for free',
      buttonClass: 'bg-transparent border-2 border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'
    },
    {
      name: 'STANDARD',
      price: '19',
      description: 'Organize across all apps by hand',
      features: [
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: '1GB Cloud storage', active: true },
        { text: 'Email and community support', active: true }
      ],
      buttonText: 'Buy Now',
      buttonClass: 'bg-[#23A6F0] text-white hover:bg-[#1A8CD8]'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[#252B42] text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-[#737373] text-base max-w-[650px] mx-auto leading-relaxed">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={isMonthly ? 'text-base font-bold text-[#252B42]' : 'text-base font-bold text-[#737373]'}>
            Monthly
          </span>
          <div className="relative">
            <input
              type="checkbox"
              checked={!isMonthly}
              onChange={() => setIsMonthly(!isMonthly)}
              className="sr-only peer"
            />
            <div className="w-16 h-8 bg-[#23A6F0] rounded-full cursor-pointer"></div>
            <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
              isMonthly ? '' : 'translate-x-8'
            }`}></div>
          </div>
          <span className={!isMonthly ? 'text-base font-bold text-[#252B42]' : 'text-base font-bold text-[#737373]'}>
            Yearly
          </span>
          <span className="ml-2 bg-[#B2E3FF] text-[#23A6F0] px-3 py-1 rounded-full text-sm font-bold">
            Save 25%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[936px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-[#23A6F0] rounded-2xl p-8 text-center hover:shadow-xl transition-shadow bg-white"
            >
              <h3 className="text-[#252B42] text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-[#737373] mb-8 text-base">{plan.description}</p>
              <div className="flex justify-center items-baseline gap-1 mb-8">
                <span className="text-[#23A6F0] text-2xl font-bold">$</span>
                <span className="text-[#23A6F0] text-6xl font-bold leading-none">{plan.price}</span>
                <span className="text-[#8EC2F2] ml-1 text-base">Per Month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 justify-center">
                    <span className={feature.active ? 'text-[#2DC071]' : 'text-[#BDBDBD]'}>
                      <BsCheckCircleFill size={23} />
                    </span>
                    <span className={feature.active ? 'text-[#252B42]' : 'text-[#737373]'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              <button className={plan.buttonClass + ' w-full py-4 rounded-md transition-colors font-bold text-base'}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

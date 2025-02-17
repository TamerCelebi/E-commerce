import React from 'react';

const Brands = () => {
  const brands = [
    {
      name: "Hooli",
      logo: "/hooli.svg"
    },
    {
      name: "Lyft",
      logo: "/lyft.svg"
    },
    {
      name: "Fast Company",
      logo: "/fast-company.svg"
    },
    {
      name: "Stripe",
      logo: "/stripe.svg"
    },
    {
      name: "AWS",
      logo: "/aws.svg"
    },
    {
      name: "Reddit",
      logo: "/reddit.svg"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

import React from 'react';

const Contact = () => {
  const locations = [
    {
      city: "Paris",
      address: "1901 Thorn ridge Cir.",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "New York",
      address: "2715 Ash Dr. San Jose,",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "Berlin",
      address: "4140 Parker Rd.",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    },
    {
      city: "London",
      address: "3517 W. Gray St. Utica,",
      zipCode: "75000 Paris",
      phone: "+451 215 215",
      fax: "+451 215 215"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(0, 89, 113, 0.9) 0%, rgba(37, 187, 241, 0.9) 100%), url(/images/contact-image.jpg)'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-8">CONTACT US</h1>
          <p className="text-lg mb-8 max-w-xl">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: 
            Newtonian mechanics
          </p>
          <button className="bg-[#23A6F0] text-white px-10 py-4 rounded hover:bg-blue-600 transition-colors">
            CONTACT US
          </button>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {locations.map((location, index) => (
            <div key={index} className="text-white">
              <h3 className="text-2xl font-bold mb-4">{location.city}</h3>
              <div className="space-y-2">
                <p>{location.address}</p>
                <p>{location.zipCode}</p>
                <p>Phone : {location.phone}</p>
                <p>Fax : {location.fax}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

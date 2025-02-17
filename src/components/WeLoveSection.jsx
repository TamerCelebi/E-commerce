import React from 'react';

const WeLoveSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sol taraftaki resimler */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img 
              src="https://picsum.photos/400/600?random=20"
              alt="Featured model 1"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img 
              src="https://picsum.photos/400/600?random=21"
              alt="Featured model 2"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Sağ taraftaki içerik */}
        <div className="flex flex-col justify-center">
          <h5 className="text-[#23A6F0] text-xl mb-4">Featured Products</h5>
          <h2 className="text-[#252B42] text-4xl font-bold mb-6">We love what we do</h2>
          
          <div className="space-y-4 text-[#737373]">
            <p>
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics: 
              Newtonian mechanics.
            </p>
            <p>
              Problems trying to resolve the conflict between 
              the two major realms of Classical physics: 
              Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WeLoveSection);

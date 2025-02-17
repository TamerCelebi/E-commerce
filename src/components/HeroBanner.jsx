import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative min-h-[600px] overflow-hidden bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Sol taraf - İçerik */}
          <div className="flex flex-col justify-center z-10">
            <span className="text-[#23A6F0] text-lg font-bold mb-4">
              SUMMER 2024
            </span>
            <h1 className="text-[#252B42] text-5xl font-bold mb-6">
              NEW COLLECTION
            </h1>
            <p className="text-[#737373] text-xl mb-8 max-w-md">
              We know how large objects will act, but things on a small scale.
            </p>
            <Link 
              to="/shop"
              className="bg-[#23A6F0] text-white px-10 py-4 rounded-md text-lg font-medium hover:bg-[#1a7ab3] transition-colors w-fit"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Sağ taraf - Resim */}
          <div className="relative flex items-center justify-center">
            <img 
              src="https://picsum.photos/800/1000?random=40"
              alt="Summer Collection Model"
              className="absolute right-0 max-h-[600px] object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroBanner);

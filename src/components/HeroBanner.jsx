import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] bg-[#23856D]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center h-full">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-white z-10">
            <h5 className="text-base font-bold mb-4">SUMMER 2024</h5>
            <h1 className="text-5xl font-bold mb-4">NEW COLLECTION</h1>
            <p className="text-xl mb-8">
              We know how large objects will act, but things on a small scale.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-[#2DC071] hover:bg-[#23856D] text-white px-10 py-4 rounded-md text-lg font-medium transition-colors"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Image */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
            <img
              src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg"
              alt="Fashion Model"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

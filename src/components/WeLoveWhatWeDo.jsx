import React from 'react';

const WeLoveWhatWeDo = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Sol taraf - Resimler */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Happy Customer 1"
              className="w-full rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Happy Customer 2"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Sağ taraf - İçerik */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-[#252B42] mb-4">
            We Love What We Do
          </h2>
          <p className="text-[#737373] mb-8 leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics: 
            Newtonian mechanics and Maxwell's electromagnetic theory. This has been resolved now in this 
            unique store.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-5xl font-bold text-[#23A6F0] mb-2">15K</h3>
              <p className="text-[#737373]">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#23A6F0] mb-2">150K</h3>
              <p className="text-[#737373]">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeLoveWhatWeDo;

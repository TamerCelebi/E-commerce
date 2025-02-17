import React from 'react';
import { Link } from 'react-router-dom';
import { categoryImages } from '../data/categoryImages';

const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ana kategori kartı (Women's Fashion) */}
        <div className="relative h-[600px] overflow-hidden rounded-lg group">
          <img 
            src={categoryImages[0].image}
            alt={categoryImages[0].title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#23A6F0]/80 flex flex-col justify-center p-8 transition-all duration-300">
            <h3 className="text-white text-3xl font-bold mb-3">
              {categoryImages[0].title}
            </h3>
            <p className="text-white/90 mb-6 max-w-md">
              {categoryImages[0].description}
            </p>
            <Link 
              to={`/category/${categoryImages[0].category}`}
              className="text-white border-2 border-white px-8 py-3 rounded-md hover:bg-white hover:text-[#23A6F0] transition-colors inline-block text-center w-fit text-lg"
            >
              {categoryImages[0].buttonText}
            </Link>
          </div>
        </div>

        {/* Diğer kategori kartları */}
        <div className="flex flex-col gap-8">
          {categoryImages.slice(1).map(category => (
            <div key={category.id} className="relative h-[270px] overflow-hidden rounded-lg group">
              <img 
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#23A6F0]/80 flex flex-col justify-center p-8 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold mb-3">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-4 text-sm max-w-md">
                  {category.description}
                </p>
                <Link 
                  to={`/category/${category.category}`}
                  className="text-white border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#23A6F0] transition-colors inline-block text-center w-fit"
                >
                  {category.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategoryGrid);

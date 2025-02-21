import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CategoryBanners = () => {
  const { categories } = useSelector((state) => state.categories);

  // Get top 5 categories by rating
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Top Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topCategories.map((category) => (
          <div 
            key={category.id} 
            className="relative h-[400px] group overflow-hidden rounded-lg"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm mb-4">Rating: {category.rating}</p>
              <Link
                to={`/shop/${category.gender}/${category.name.toLowerCase()}/${category.id}`}
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-[#23A6F0] hover:text-white transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanners;

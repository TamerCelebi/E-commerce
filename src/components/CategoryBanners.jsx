import React from 'react';
import { Link } from 'react-router-dom';

const CategoryBanners = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Fashion",
      subtitle: "New Collection",
      image: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/shop/mens"
    },
    {
      id: 2,
      title: "Women's Fashion",
      subtitle: "Spring Collection",
      image: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/shop/womens"
    },
    {
      id: 3,
      title: "Accessories",
      subtitle: "Special Offers",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/shop/accessories"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="relative h-[400px] group overflow-hidden rounded-lg"
          >
            {/* Arkaplan Resmi */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Koyu Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            {/* İçerik */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm mb-4">{category.subtitle}</p>
              <Link
                to={category.link}
                className="inline-block px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                EXPLORE NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanners;

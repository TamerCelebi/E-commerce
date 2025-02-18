import React from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge, FaList } from 'react-icons/fa';
import img1 from '../assets/pictures/222_LE_upscale_magic_x2_strength_71_similarity_60.jpg';
import img2 from '../assets/pictures/team1.jpg';
import img3 from '../assets/pictures/team2.jpg';
import img4 from '../assets/pictures/team3.jpg';
import img5 from '../assets/pictures/team4.jpg';

const categories = [
  {
    id: 1,
    title: 'CLOTHS',
    items: '5 Items',
    image: img1,
    link: '/shop?category=cloths'
  },
  {
    id: 2,
    title: 'CLOTHS',
    items: '5 Items',
    image: img2,
    link: '/shop?category=cloths'
  },
  {
    id: 3,
    title: 'CLOTHS',
    items: '5 Items',
    image: img3,
    link: '/shop?category=cloths'
  },
  {
    id: 4,
    title: 'CLOTHS',
    items: '5 Items',
    image: img4,
    link: '/shop?category=cloths'
  },
  {
    id: 5,
    title: 'CLOTHS',
    items: '5 Items',
    image: img5,
    link: '/shop?category=cloths'
  }
];

const ShopCategories = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800">Shop</span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[3/4]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm">{category.items}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;

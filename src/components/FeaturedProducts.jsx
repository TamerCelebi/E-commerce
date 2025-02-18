import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/shopData';
import { FaStar } from 'react-icons/fa';

const FeaturedProducts = () => {
  // İlk 10 ürünü göster
  const featuredProducts = products.slice(0, 10);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h5 className="text-[#737373] text-xl mb-2">Featured Products</h5>
        <h2 className="text-[#252B42] text-4xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
        <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {featuredProducts.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[3/4]">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {product.originalPrice > product.price && (
                <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-sm rounded">
                  Sale
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-[#252B42] font-bold truncate">{product.name}</h3>
              <p className="text-[#737373] text-sm mb-2">{product.department}</p>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
              </div>
              <div className="flex items-center space-x-2">
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                )}
                <span className="text-[#23856D] font-bold">${product.price}</span>
              </div>
              <div className="mt-2 flex gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link 
          to="/shop"
          className="inline-block px-8 py-3 border-2 border-[#23A6F0] text-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors"
        >
          LOAD MORE PRODUCTS
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;

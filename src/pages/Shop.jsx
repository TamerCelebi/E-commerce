import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { products } from '../data/shopData';
import ShopCategories from '../components/ShopCategories';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Shop = () => {
  const history = useHistory();
  const [sortBy, setSortBy] = useState('popularity');
  const [viewType, setViewType] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Ürünleri sıralama
  const sortProducts = useCallback((products) => {
    switch (sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...products].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...products].sort((a, b) => b.id - a.id);
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  }, [sortBy]);

  const sortedProducts = useMemo(() => sortProducts(products), [sortProducts]);

  // Sayfalama
  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  }, [currentPage, sortedProducts]);

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Navigate to product detail
  const handleProductClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  // Rating yıldızlarını render etme
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <>
      <ShopCategories />
      
      <div className="container mx-auto px-4 py-8">
        {/* Sorting and View Options */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setViewType('grid')}
              className={`p-2 ${viewType === 'grid' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              Grid
            </button>
            <button 
              onClick={() => setViewType('list')}
              className={`p-2 ${viewType === 'list' ? 'text-blue-600' : 'text-gray-600'}`}
            >
              List
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={viewType === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          : "flex flex-col gap-6"
        }>
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-[3/4]">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2">
                  {product.originalPrice > product.price && (
                    <span className="bg-red-500 text-white px-2 py-1 text-sm rounded">
                      Sale
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.department}</p>
                <div className="flex items-center mb-2">
                  {renderRatingStars(product.rating)}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                    <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  </div>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(Shop);

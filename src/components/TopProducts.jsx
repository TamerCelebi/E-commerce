import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const TopProducts = () => {
  const history = useHistory();
  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Top Product Of the Week",
      link: "/product/1"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Top Product Of the Week",
      link: "/product/2"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Top Product Of the Week",
      link: "/product/3"
    }
  ];

  const handleProductClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="relative h-[400px] group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            {/* Background Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#23A6F0] bg-opacity-80"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <Link
                to={product.link}
                className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:text-[#23A6F0] transition-colors duration-300"
              >
                EXPLORE ITEMS
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

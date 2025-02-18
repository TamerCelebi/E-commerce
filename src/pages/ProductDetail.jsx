import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/shopData';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineEye } from 'react-icons/ai';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the product based on the ID from URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  // Create multiple views of the same image for the gallery
  const productImages = [
    product.image,
    product.image, // You can add more image variations here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Shop</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={productImages[selectedImage]}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border rounded-lg overflow-hidden ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-gray-500">10 Reviews</span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              <span className="text-gray-500 line-through mr-2">${product.originalPrice}</span>
              <span className="text-blue-600">${product.price}</span>
            </p>
            <p className="text-gray-500">Availability: In Stock</p>
          </div>

          <div className="border-t border-b py-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
              consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-900 font-semibold mb-2">Colors</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
              Select Options
            </button>
            <button className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
              <AiOutlineHeart className="w-6 h-6" />
            </button>
            <button className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
              <AiOutlineShoppingCart className="w-6 h-6" />
            </button>
            <button className="p-3 border rounded-md hover:bg-gray-50 transition-colors">
              <AiOutlineEye className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12">
        <div className="border-b">
          <nav className="flex gap-8">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-4">
              Description
            </button>
            <button className="text-gray-500 pb-4">
              Additional Information
            </button>
            <button className="text-gray-500 pb-4">
              Reviews (0)
            </button>
          </nav>
        </div>

        <div className="py-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">the quick fox jumps over</h3>
              <p className="text-gray-700 mb-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-gray-700">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
                consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">the quick fox jumps over</h3>
              <ul className="space-y-2 text-gray-700">
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
                <li>the quick fox jumps over the lazy dog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

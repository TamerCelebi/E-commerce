import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaChevronDown } from 'react-icons/fa';
import { fetchCategories } from '../store/categorySlice';

const Navbarr = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categoriesByGender = categories.reduce((acc, category) => {
    if (!acc[category.gender]) {
      acc[category.gender] = [];
    }
    acc[category.gender].push(category);
    return acc;
  }, {});

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center gap-8">
              <a href="tel:(225) 555-0118" className="flex items-center gap-2 text-sm">
                <FaPhone />
                <span>(225) 555-0118</span>
              </a>
              <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2 text-sm">
                <FaEnvelope />
                <span>michelle.rivera@example.com</span>
              </a>
            </div>

            {/* Follow Us Text */}
            <p className="text-sm my-2 md:my-0">
              Follow Us and get a chance to win 80% off
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm">Follow Us:</span>
              <div className="flex items-center gap-2">
                <a href="#" className="hover:text-[#23A6F0] transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-[#23A6F0] transition-colors">
                  <FaYoutube />
                </a>
                <a href="#" className="hover:text-[#23A6F0] transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-[#23A6F0] transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-[#252B42]">Bandage</Link>
              
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-[#23A6F0]"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Categories</span>
                  <FaChevronDown className="w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                    {Object.entries(categoriesByGender).map(([gender, cats]) => (
                      <div key={gender} className="p-4">
                        <h3 className="text-lg font-semibold capitalize mb-2">{gender}</h3>
                        <div className="space-y-2">
                          {cats.map((category) => (
                            <Link
                              key={category.id}
                              to={`/shop/${gender}/${category.name.toLowerCase()}/${category.id}`}
                              className="block text-gray-600 hover:text-[#23A6F0] hover:bg-gray-50 px-2 py-1 rounded"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-[#737373] hover:text-[#252B42] transition-colors">
                  Home
                </Link>
                <Link to="/shop" className="text-[#737373] hover:text-[#252B42] transition-colors">
                  Shop
                </Link>
                <Link to="/about" className="text-[#737373] hover:text-[#252B42] transition-colors">
                  About
                </Link>
                <Link to="/blog" className="text-[#737373] hover:text-[#252B42] transition-colors">
                  Blog
                </Link>
                <Link to="/contact" className="text-[#737373] hover:text-[#252B42] transition-colors">
                  Contact
                </Link>
                <Link to="/pages" className="text-[#737373] hover:text-[#252B42] transition-colors">
                  Pages
                </Link>
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-[#23A6F0] hover:text-[#1C85C1] transition-colors flex items-center gap-1">
                  Login / Register
                </Link>
                <button className="text-[#23A6F0] hover:text-[#1C85C1] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-[#23A6F0] hover:text-[#1C85C1] transition-colors relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-[#23A6F0] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    1
                  </span>
                </button>
                <button className="text-[#23A6F0] hover:text-[#1C85C1] transition-colors relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-[#23A6F0] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    1
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbarr;

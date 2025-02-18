import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [showPages, setShowPages] = useState(false);

  return (
    <header className="py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-dark">
            Bandage
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-dark hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-secondary hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-secondary hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-secondary hover:text-primary transition-colors"
                onClick={() => setShowPages(!showPages)}
              >
                Pages
                <FaChevronDown className="w-3 h-3" />
              </button>
              {showPages && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <Link 
                    to="/team" 
                    className="block px-4 py-2 text-secondary hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Team
                  </Link>
                  {/* Diğer sayfalar buraya eklenebilir */}
                </div>
              )}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-8">
            <Link to="/signup" className="hidden md:flex items-center gap-1 text-primary hover:opacity-80 transition-opacity">
              <span>Login</span>
              <span>/</span>
              <span>Register</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="text-primary hover:opacity-80 transition-opacity">
                <FaSearch className="w-5 h-5" />
              </button>
              <Link to="/cart" className="flex items-center gap-1 text-primary hover:opacity-80 transition-opacity">
                <FaShoppingCart className="w-5 h-5" />
                <span>1</span>
              </Link>
              <Link to="/wishlist" className="flex items-center gap-1 text-primary hover:opacity-80 transition-opacity">
                <FaHeart className="w-5 h-5" />
                <span>1</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

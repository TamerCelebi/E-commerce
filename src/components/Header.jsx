import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi';

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <a href="tel:(225) 555-0118" className="text-sm">(225) 555-0118</a>
              <a href="mailto:michelle.rivera@example.com" className="text-sm">michelle.rivera@example.com</a>
            </div>
            <p className="text-sm">Follow Us  and get a chance to win 80% off</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow Us :</span>
              <div className="flex space-x-4">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-[#252B42]">
              Bandage
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink exact to="/" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                Home
              </NavLink>
              <NavLink to="/shop" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                Shop
              </NavLink>
              <NavLink to="/about" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                About
              </NavLink>
              <NavLink to="/team" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                Team
              </NavLink>
              <NavLink to="/blog" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                Blog
              </NavLink>
              <NavLink to="/contact" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                Contact
              </NavLink>
              <NavLink to="/pages" className="text-sm text-[#737373] hover:text-[#252B42] transition-colors" activeClassName="text-[#252B42]">
                Pages
              </NavLink>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-sm text-[#23A6F0] hover:text-[#1A8CD8] transition-colors">
                  Login
                </Link>
                <span className="text-[#23A6F0]">/</span>
                <Link to="/signup" className="text-sm text-[#23A6F0] hover:text-[#1A8CD8] transition-colors">
                  Register
                </Link>
              </div>
              <button className="text-[#23A6F0]">
                <FiSearch size={20} />
              </button>
              <button className="text-[#23A6F0] flex items-center">
                <FiShoppingCart size={20} />
                <span className="ml-1">1</span>
              </button>
              <button className="text-[#23A6F0] flex items-center">
                <FiHeart size={20} />
                <span className="ml-1">1</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

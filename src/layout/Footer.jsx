import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-[#252B42] mb-4">Bandage</h3>
            <div className="flex items-center gap-4 text-[#23A6F0]">
              <a href="#" className="hover:text-[#252B42] transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#252B42] transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#252B42] transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-bold text-[#252B42] mb-4">Company Info</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="font-bold text-[#252B42] mb-4">Legal</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/carrier" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Carrier
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h5 className="font-bold text-[#252B42] mb-4">Features</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/business" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  User Analytic
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h5 className="font-bold text-[#252B42] mb-4">Resources</h5>
            <ul className="space-y-3">
              <li>
                <Link to="/ios" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  IOS & Android
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link to="/customers" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  Customers
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-[#737373] hover:text-[#23A6F0] transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h5 className="font-bold text-[#252B42] mb-4">Get In Touch</h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 border border-[#E6E6E6] rounded focus:outline-none focus:border-[#23A6F0]"
                />
                <button className="px-6 py-3 bg-[#23A6F0] text-white rounded hover:bg-[#1B80BE] transition-colors">
                  Subscribe
                </button>
              </form>
              <p className="text-[#737373] text-sm mt-2">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <p className="text-[#737373] text-center">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

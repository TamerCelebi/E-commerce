import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Logo ve Sosyal Medya */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:mb-0">Bandage</h2>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#23A6F0] hover:text-[#252B42] transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>

        {/* Footer Linkleri */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-[#252B42] mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#737373] hover:text-[#23A6F0]">About Us</Link></li>
              <li><Link to="/carrier" className="text-[#737373] hover:text-[#23A6F0]">Carrier</Link></li>
              <li><Link to="/hiring" className="text-[#737373] hover:text-[#23A6F0]">We are hiring</Link></li>
              <li><Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-[#252B42] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#737373] hover:text-[#23A6F0]">About Us</Link></li>
              <li><Link to="/carrier" className="text-[#737373] hover:text-[#23A6F0]">Carrier</Link></li>
              <li><Link to="/hiring" className="text-[#737373] hover:text-[#23A6F0]">We are hiring</Link></li>
              <li><Link to="/blog" className="text-[#737373] hover:text-[#23A6F0]">Blog</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-[#252B42] mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/business" className="text-[#737373] hover:text-[#23A6F0]">Business Marketing</Link></li>
              <li><Link to="/analytics" className="text-[#737373] hover:text-[#23A6F0]">User Analytic</Link></li>
              <li><Link to="/chat" className="text-[#737373] hover:text-[#23A6F0]">Live Chat</Link></li>
              <li><Link to="/support" className="text-[#737373] hover:text-[#23A6F0]">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-[#252B42] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/ios" className="text-[#737373] hover:text-[#23A6F0]">iOS & Android</Link></li>
              <li><Link to="/demo" className="text-[#737373] hover:text-[#23A6F0]">Watch a Demo</Link></li>
              <li><Link to="/customers" className="text-[#737373] hover:text-[#23A6F0]">Customers</Link></li>
              <li><Link to="/api" className="text-[#737373] hover:text-[#23A6F0]">API</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-bold text-[#252B42] mb-4">Get In Touch</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 border border-[#E6E6E6] rounded-l focus:outline-none focus:border-[#23A6F0]"
              />
              <button className="bg-[#23A6F0] text-white px-4 py-3 rounded-r hover:bg-[#1B80BE] transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[#737373] text-sm mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#737373] pt-6 border-t">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);

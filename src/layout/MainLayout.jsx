import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaPhone, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white py-3">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Contact Info */}
            <div className="flex items-center gap-8">
              <a href="tel:(225)555-0118" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <FaPhone className="w-4 h-4" />
                <span>(225) 555-0118</span>
              </a>
              <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <FaEnvelope className="w-4 h-4" />
                <span>michelle.rivera@example.com</span>
              </a>
            </div>

            {/* Promotion Text */}
            <p className="text-sm">Follow Us and get a chance to win 80% off</p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm">Follow Us :</span>
              <div className="flex items-center gap-3">
                <a href="#" className="hover:text-primary transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

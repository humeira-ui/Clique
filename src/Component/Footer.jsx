import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/icons/logo.svg" alt="Clique Logo" className="h-6 w-6" />
              <span className="font-bold text-gray-900">Clique Cloud</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              The complete education platform for students, teachers, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Solutions', 'Pricing', 'Updates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {[
              { icon: <FiFacebook />, label: 'Facebook' },
              { icon: <FiTwitter />, label: 'Twitter' },
              { icon: <FiLinkedin />, label: 'LinkedIn' },
              { icon: <FiInstagram />, label: 'Instagram' }
            ].map((social) => (
              <a 
                key={social.label} 
                href="#" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-center">
            <span className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Clique Cloud, Inc.
            </span>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xs transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
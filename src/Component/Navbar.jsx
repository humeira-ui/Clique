import React from 'react';
import icon from '../Component/logout.png';
import log from '../Component/person.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <img src={icon} alt="Clique Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold text-gray-800">Clique</h1>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-6">
        <button className="bg-white hover:bg-gray-50 text-green-400 border border-green-400 px-4 py-2 rounded-md font-medium transition duration-300 h-[42px]">
  Try for free
</button>
          
          <div className="relative flex items-center bg-red-500 rounded-lg px-3 py-2 group">
            
            <div className="relative flex items-center bg-red-500 rounded-full p-1">
  <img src={log} alt="User" className="h-6 w-6 rounded-full" />
</div>
            
            {/* Custom-styled select container */}
            <div className="relative ml-2">
              <select className="appearance-none bg-transparent pl-2 pr-6 py-1 text-white font-medium focus:outline-none cursor-pointer">
                <option className="text-gray-800">Login to Clique</option>
                <option className="text-gray-800">Login as a student</option>
                <option className="text-gray-800">Login as a tutor</option>
                <option className="text-gray-800">For school</option>
                <option className="text-gray-800">For application</option>
              </select>
              
              {/* Custom white dropdown arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* Hover effect - subtle white background change */}
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
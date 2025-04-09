import React from 'react';
import Pass from './Pass';
import study from '../assets/study.jpg';

const Secondsection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content Section */}
        <div className="order-2 lg:order-1">
          <Pass 
            header={
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Single Account for all Essential Educational Tools
              </h2>
            } 
            page={
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                A single account is all you need to access and connect your data to your preferred educational apps and resources.
              </p>
            } 
            button={
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center shadow-md hover:shadow-lg">
                Create a new account
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            } 
          />
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2">
          <img 
            src={study} 
            alt="Student using educational tools" 
            className="w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
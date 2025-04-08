import React from 'react';
import Card from './Card';
import pexel from '../assets/pexels.jpg';
import pexels from '../assets/first.jpg';
import pexe from '../assets/pexel.jpg';

const Section = () => {
  const cardData = [
    {
      image: pexel,
      title: 'Empowering Students with Tools for Success',
      category: 'Learning'
    },
    {
      image: pexels,
      title: 'Streamlining Education for Schools & Teachers',
      category: 'Teaching'
    },
    {
      image: pexe,
      title: 'Enabling Administrators with Smarter Tools',
      category: 'Administration'
    }
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-block mb-4 sm:mb-6">
          <div className="w-12 sm:w-16 h-1 bg-green-600 mx-auto mb-3 sm:mb-4" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            What is Clique Cloud?
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Clique Cloud is a secure, centralized platform providing apps and resources for seamless education at all levels.
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cardData.map((card, index) => (
            <Card 
              key={index}
              image={
                <img 
                  className="w-full h-36 sm:h-40 object-cover rounded-t-lg"
                  src={card.image} 
                  alt={card.title}
                />
              }
              header={
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
              }
              footer={
                <button className="footer flex items-center justify-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-green-200 transition-colors w-full sm:w-auto text-sm sm:text-base">
                  {card.category}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-3 w-3 sm:h-4 sm:w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </button>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
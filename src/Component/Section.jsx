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
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <div className="inline-block mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            What is Clique Cloud?
          </h1>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Clique Cloud is a secure, centralized platform providing apps and resources for seamless education at all levels.
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card 
              key={index}
              image={
                <img 
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-56 xl:h-64 object-cover rounded-t-lg"
                  src={card.image} 
                  alt={card.title}
                />
              }
              header={
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
              }
              footer={
                <button className="footer flex items-center justify-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full hover:bg-green-200 transition-colors w-full sm:w-auto">
                  {card.category}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
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
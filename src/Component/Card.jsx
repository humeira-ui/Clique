import React from 'react';

const Card = ({ image, header, footer }) => {
  return (
    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Section - Now Smaller */}
      <div className="flex-shrink-0">
        {image}
      </div>
      
      {/* Content Section */}
      <div className="flex-1 p-4 sm:p-6 flex flex-col">
        {/* Header */}
        <div className="flex-1">
          {header}
        </div>
        
        {/* Footer */}
        <div className="mt-4 sm:mt-6">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Card;
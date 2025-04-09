import React from 'react';
import entericon from '../Component/enter.png';
import main from '../Component/mine.jpg';
import student from '../Component/student.png';
import shield from '../Component/shield.png';
import enterprise from '../Component/enterprise.png';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A centralized platform with apps and resources for all levels of education.
            </h3>
            {/* Zigzag/Wavy Divider */}
<div className="relative py-4">
  <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
    <svg 
      viewBox="0 0 500 20" 
      preserveAspectRatio="none" 
      className="w-60 h-full"
    >
      <path 
        d="M0,10 C100,20 200,0 300,10 C400,20 500,0 500,10" 
        fill="none" 
        stroke="#16a34a" 
        strokeWidth="3"
      />
    </svg>
  </div>
</div>
            <p className="text-lg text-gray-600">
              Empowering students, teachers, and administrators with a secure and centralized platform to access apps and resources to improve learning outcome and deliver high quality education.
            </p>
          </div>

          {/* Button Container */}
          <div className="space-y-4 w-full">
  {/* Main Student Login Button - Green (full width) */}
  <div className="w-full">
    <button className="w-full bg-red-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 shadow-md flex items-center justify-between">
      <span>Login as a student</span>
      <img 
        src={entericon} 
        alt="Enter icon" 
        className="h-5 w-5 ml-2 transition-transform hover:translate-x-1"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </button>
  </div>

  {/* Secondary Buttons Container */}
  <div className="grid grid-cols-2 gap-4 w-full">
    {/* For School Button - Red */}
    <button className="bg-transparent hover:bg-gray-100 text-black px-4 py-3 rounded-lg font-medium shadow-sm transition duration-300 flex items-center justify-between border border-gray-300">
  <span>For school</span>
  <img 
    src={entericon} 
    alt="Enter icon" 
    className="h-4 w-4 ml-2 transition-transform hover:translate-x-1"
    onError={(e) => {
      e.target.style.display = 'none';
    }}
  />
</button>
    
    {/* Application Partner Button - Blue */}
    <button className="bg-transparent hover:bg-gray-100 text-black px-4 py-3 rounded-lg font-medium shadow-sm transition duration-300 flex items-center justify-between">
      <span>For Application Partner</span>
      <img 
        src={entericon} 
        alt="Enter icon" 
        className="h-4 w-4 ml-2 filter brightness-0 invert transition-transform hover:translate-x-1"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
    </button>
  </div>
</div>
        </div>

        {/* Right Column - Image with Stats */}
        <div className="relative">
  {/* Reduced main image (60% width, centered) */}
  <div className="flex justify-center">
    <img 
      src={main} 
      alt="Main illustration" 
      className="w-3/5 h-auto rounded-xl shadow-xl" 
    />
  </div>
  
  {/* Stats Cards (adjusted positions for smaller image) */}
  <div className="absolute top-10 left-40 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
    <div className="bg-blue-50 p-2 rounded-full">
      <img src={student} alt="Student icon" className="h-8 w-8" />
    </div>
    <p className="font-semibold text-gray-800">
      <span className="block text-lg">100+</span>
      <span className="text-sm text-gray-500">Students</span>
    </p>
  </div>
  
  <div className="absolute top-60 right-50 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
    <div className="bg-green-50 p-2 rounded-full">
      <img src={enterprise} alt="Enterprise icon" className="h-8 w-8" />
    </div>
    <p className="font-semibold text-gray-800">
      <span className="block text-lg">50+</span>
      <span className="text-sm text-gray-500">Schools</span>
    </p>
  </div>
  
  <div className="absolute bottom-8 left-20 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-3">
    <div className="bg-red-50 p-2 rounded-full">
      <img src={shield} alt="Shield icon" className="h-8 w-8" />
    </div>
    <p className="font-semibold text-gray-800">
      <span className="block text-lg">100%</span>
      <span className="text-sm text-gray-500">Secure</span>
    </p>
  </div>
</div>
      </div>
    </div>
  )
}

export default Hero;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const AboutExperienceWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div 
      className="bg-gray-700 p-6 rounded-2xl shadow-lg" 
      style={{
        boxShadow: "rgba(0, 0, 0, 0.4) 8px 7px 6px 0px",
      }}
      data-testid="about-experience-widget"
    >
      <div className="flex flex-col sm:flex-row items-center mb-4">
        {/* Help Icon */}
        <div className="bg-gray-700 text-gray-300 px-2 py-2 rounded-t-md sm:rounded-l-md flex items-center mb-4 sm:mb-0">
          <FontAwesomeIcon icon={faQuestionCircle} className="w-6 h-6" />
        </div>

        {/* Navbar */}
        <div className="relative flex-1 bg-black p-2 rounded-2xl flex items-center">
          {/* Sliding Badge */}
          <div
            className="absolute hidden sm:block transform -translate-y-1/2 bg-gray-800 rounded-2xl transition-all duration-500"
            style={{
              width: `${100 / 3}%`, // Badge width matches the width of each button
              height: "80%", // Adjust height of badge as needed
              left: `${(100 / 3) * (activeTab === 'about' ? 0 : activeTab === 'experience' ? 1 : 2)}%`,
              marginLeft: '5px', // Add margin-left for spacing
              marginRight: '5px', // Add margin-right for spacing
              boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 15px 20px', // 3D effect
              transform: 'translateZ(0)' // Ensures shadow effect is applied
            }}
          />
          <button
            className={`flex-1 px-4 py-2 rounded-l-md z-10 transition-colors duration-300 ${
              activeTab === 'about' ? 'text-gray-100' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={`flex-1 px-4 py-2 z-10 transition-colors duration-300 ${
              activeTab === 'experience' ? 'text-gray-100' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            Experiences
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded-r-md z-10 transition-colors duration-300 ${
              activeTab === 'recommended' ? 'text-gray-100' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab('recommended')}
          >
            Recommended
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-1 h-24 overflow-hidden rounded-lg">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-in-out flex"
            style={{
              width: "300%", // 3 tabs, each takes 100% width
              transform: `translateX(${
                activeTab === 'about' ? '0%' : activeTab === 'experience' ? '-33.33%' : '-66.66%'
              })`,
            }}
          >
            <div className="w-full sm:w-1/3 p-4 text-gray-400">
              <p>
                Hello! I'm Tushar, I am a passionate Software Engineer currently pursuing a degree in Electronics and Telecommunication at VIT College, Pune.
              </p>
            </div>
            <div className="w-full sm:w-1/3 p-4 text-gray-400">
              <p>Experience content goes here...</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 text-gray-400">
              <p>Recommended content goes here...</p>
            </div>
          </div>
        </div>
        {/* Vertical Divider */}
        <div className="hidden sm:block w-1 h-10 mx-2 rounded-full bg-gradient-to-b from-white to-gray-00"></div>
      </div>
    </div>
  );
};

export default AboutExperienceWidget;

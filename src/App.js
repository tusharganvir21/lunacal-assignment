import React from 'react';
import InstructionWidget from './components/InstructionWidget';
import AboutExperienceWidget from './components/AboutExperienceWidget';
import GalleryWidget from './components/GalleryWidget';

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-800 text-white overflow-auto">

      {/* InstructionWidget visible only on screens wider than 768px */}
      <div className="hidden md:flex md:w-1/2 p-4 md:p-8 items-center justify-center">
        <InstructionWidget />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center space-y-8">
        <AboutExperienceWidget />

        {/* Divider */}
        <div className="w-full h-1 bg-gray-600 rounded-full shadow-md my-4 mx-auto" style={{
          boxShadow: "rgba(0, 0, 0, 0.4) 8px 7px 6px 0px",
        }}></div>

        <GalleryWidget />

        {/* Divider */}
        <div className="w-full h-1 bg-gray-600 rounded-full shadow-md my-4 mx-auto" style={{
          boxShadow: "rgba(0, 0, 0, 0.4) 8px 7px 6px 0px",
        }}></div>
      </div>
    </div>
  );
};

export default App;

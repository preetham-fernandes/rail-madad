import React from 'react';
import InfoBar from './components/InfoBar';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Navbar from './components/Navbar';
import bgImage from './components/assets/body-bg.jpg';

const App = () => {
  return (
    <div className="h-screen flex flex-col ">
      {/* Navbar at the top */}
      <Navbar />

      {/* Content below the navbar, divided into 3 parts */}
      <div className="flex flex-1 overflow-hidden" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover', // To ensure the image covers the entire area
      backgroundPosition: 'center', // To center the image
      height: '100vh', // Full viewport height
    }}>
        
        {/* ---------------Infobar (10% width)-------------- */}
        <div className="w-1/10 h-screen sticky top-0">
          <InfoBar />
        </div>

        {/*---------------Left side content (30% width)-------------- */}
        <div className="w-[29%] h-screen sticky top-0">
          <LeftColumn />
        </div>

        {/* -------------Right side content (remaining width)-------------- */}
        <div className="flex-1 h-screen overflow-y-auto">
          <RightColumn />
        </div>
      </div>
    </div>
  );
};

export default App;

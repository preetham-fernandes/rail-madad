import React, { useState } from 'react'
import AdminDashboard from './AdminDashboard';
import Navbar from './components/mainPage/Navbar';
import InfoBar from './components/mainPage/InfoBar';
import LeftColumn from './components/mainPage/LeftColumn';
import RightColumn from './components/mainPage/RightColumn';
import bgImage from './components/assets/body-bg.jpg';

const Mainpage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = (userId, password) => {
      if (userId === 'admin' && password === 'password') {
        setIsLoggedIn(true);
      }
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  
    return (
      <div className="h-screen flex flex-col">
        {isLoggedIn ? (
          <AdminDashboard onLogout={handleLogout} />
        ) : (
          <>
            <Navbar onLogin={handleLogin} />
            <div 
              className="flex flex-1 overflow-hidden" 
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
              }}
            >
              <div className="w-1/10 h-screen sticky top-0">
                <InfoBar />
              </div>
              <div className="w-[29%] h-screen sticky top-0">
                <LeftColumn />
              </div>
              <div className="flex-1 h-screen overflow-y-auto">
                <RightColumn />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
export default Mainpage;
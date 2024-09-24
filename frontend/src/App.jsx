import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AdminDashboard from './components/Admin_Dashboard';
import InfoBar from './components/InfoBar';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import bgImage from './components/assets/body-bg.jpg';

const App = () => {
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
            }}
          >
            <div className="w-1/12 h-full">
              <InfoBar />
            </div>
            <div className="w-3/12 h-full">
              <LeftColumn />
            </div>
            <div className="flex-1 h-full overflow-y-auto">
              <RightColumn />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
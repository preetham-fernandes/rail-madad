import React, { useState } from "react";
import { LayoutDashboard, Building2, BarChart, Info, Settings, HelpCircle, Menu, Bell, ChevronDown, Check } from "lucide-react";
import Dashboard from "./components/adminDashboard/Dashboard";
import Departments from "./components/adminDashboard/Departments";
import Analytics from "./components/adminDashboard/Analytics";
import Totaltickets from "./components/adminDashboard/Dashboardfiles/Totaltickets";
import andheri from "./components/assets/railway_icons/andheri.jpg";
import logo from "./components/assets/RailMadad.gif";
import StationInfo from "./components/adminDashboard/StationInfo";

export default function AdminDashboard({ onLogout }) {
  const [activePage, setActivePage] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Ticket counts
  const [activeTickets, setActiveTickets] = useState(7);
  const [totalTickets, setTotalTickets] = useState(15);

  // State for notifications visibility
  const [visibleNotifications, setVisibleNotifications] = useState([true, true]); // true means visible

  // Function to handle "Check" button click in notifications
  const handleCheck = (index) => {
    setActiveTickets(activeTickets + 1);
    setTotalTickets(totalTickets + 1);
    setVisibleNotifications((prev) => {
      const newVisibleNotifications = [...prev];
      newVisibleNotifications[index] = false; // Hide the clicked notification
      return newVisibleNotifications;
    });
  };

  // Header component moved here
  const Header = ({ toggleMenu, toggleProfile, toggleNotification, isProfileOpen, isNotificationOpen, onLogout }) => {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center justify-center h-14">
            <img src={logo} alt="RailMadad Logo" className="h-10 mr-4" />
            <h1 className="text-2xl text-[#620922] font-bold">RailMadad</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleNotification}
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-xl font-bold pl-1 pb-1"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              {isNotificationOpen && (
                <div className="flex flex-col absolute right-0 mt-2 w-64 bg-white rounded-md border-2 shadow-lg py-1 z-10">
                  {visibleNotifications[0] && ( // Check if notification 1 is visible
                    <div className="notif1 flex border-b-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      PNR:<b>9876543211</b> has registered a complaint
                      </a>
                      <button
                        className="p-1 m-3 rounded-full bg-[#620922] text-white"
                        onClick={() => handleCheck(0)} // Pass index 0
                      >
                        <Check />
                      </button>
                    </div>
                  )}
                  {visibleNotifications[1] && ( // Check if notification 2 is visible
                    <div className="notif2 flex">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      PNR:<b>1123456789</b> has registered a complaint
                      </a>
                      <button
                        className="p-1 m-3 rounded-full bg-[#620922] text-white"
                        onClick={() => handleCheck(1)} // Pass index 1
                      >
                        <Check />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold pl-1 pb-1"
              >
                A <ChevronDown className="h-4 w-4" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md border-2 shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                  <a
                    href="#"
                    onClick={onLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="md:w-56 bg-[#6D0A26] text-white shadow-lg">
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-6 flex flex-col items-center">
            <div className="w-20 h-20 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center ring-2 ring-white overflow-hidden">
              <img src={andheri} alt="Andheri Logo" className="w-full h-full object-center object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-center">Andheri - ADH</h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col text-white p-4 text-base">
            <button
              className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors duration-200 ${activePage === 'dashboard' ? 'bg-[#8B0D32] text-white' : 'hover:bg-white hover:text-[#8B0D32]'}`}
              onClick={() => setActivePage('dashboard')}
            >
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Dashboard
            </button>

            <button
              className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors duration-200 ${activePage === 'departments' ? 'bg-[#8B0D32] text-white' : 'hover:bg-white hover:text-[#8B0D32]'}`}
              onClick={() => setActivePage('departments')}
            >
              <Building2 className="mr-2 h-5 w-5" />
              Departments
            </button>

            <button
              className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors duration-200 ${activePage === 'analytics' ? 'bg-[#8B0D32] text-white' : 'hover:bg-white hover:text-[#8B0D32]'}`}
              onClick={() => setActivePage('analytics')}
            >
              <BarChart className="mr-2 h-5 w-5" />
              Analytics
            </button>

            <button
              className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors duration-200 ${activePage === 'stationInfo' ? 'bg-[#8B0D32] text-white' : 'hover:bg-white hover:text-[#8B0D32]'}`}
              onClick={() => setActivePage('stationInfo')}
            >
              <Info className="mr-2 h-5 w-5" />
              Station Info
            </button>

            <button
              className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors duration-200 ${activePage === 'settings' ? 'bg-[#8B0D32] text-white' : 'hover:bg-white hover:text-[#8B0D32]'}`}
              onClick={() => setActivePage('settings')}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </button>

            <button
              className={`w-full flex items-center p-2 mb-2 rounded-lg transition-colors duration-200 ${activePage === 'helpDesk' ? 'bg-[#8B0D32] text-white' : 'hover:bg-white hover:text-[#8B0D32]'}`}
              onClick={() => setActivePage('helpDesk')}
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              Help Desk
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <Header
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          toggleNotification={() => setIsNotificationOpen(!isNotificationOpen)}
          isNotificationOpen={isNotificationOpen}
          toggleProfile={() => setIsProfileOpen(!isProfileOpen)}
          isProfileOpen={isProfileOpen}
          onLogout={onLogout}
        />

        {/* Render Active Page */}
        {activePage === 'dashboard' && <Dashboard activeTickets={activeTickets} totalTickets={totalTickets} />}
        {activePage === 'departments' && <Departments />}
        {activePage === 'analytics' && <Analytics />}
        {activePage === 'totaltickets' && <Totaltickets />}
        {activePage === 'stationInfo' && <StationInfo />}
      </div>
    </div>
  );
}

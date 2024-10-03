import React, { useState } from "react";
import { Menu, Bell, ChevronDown, Check } from "lucide-react";
import logo from "../assets/RailMadad.gif";

export default function Header({ toggleMenu, toggleProfile, toggleNotification, isProfileOpen, isNotificationOpen, onLogout }) {
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
            <button onClick={toggleNotification} className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-xl font-bold pl-1 pb-1">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            {isNotificationOpen && (
              <div className="flex absolute right-0 mt-2 w-64 bg-white rounded-md border-2 shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">9876543211 has registered a complaint</a>
                <button className="p-1 m-3 rounded-full bg-[#620922] text-white">
                  <Check />
                </button>
              </div>
              
            )}
          </div>
          <div className="relative">
            <button onClick={toggleProfile} className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold pl-1 pb-1">
              A <ChevronDown className="h-4 w-4" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md border-2 shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" onClick={onLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

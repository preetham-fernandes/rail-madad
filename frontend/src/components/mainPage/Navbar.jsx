import React, { useState } from "react";
import { PhoneIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Login from "../mainPage/Login";
import logoG20 from "../assets/navbar/logog20.png";
import googleMic from "../assets/navbar/google_mic.png";
import manLogo from "../assets/navbar/image.png";

export default function Navbar({ onLogin }) {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (userId, password) => {
    onLogin(userId, password);
    setShowLogin(false);
  };

  return (
    <>
      <nav className="logo bg-white w-full p-2 flex items-center justify-between">
        <img src={logoG20} alt="G20 Logo" className="h-10 w-40 ml-10 mr-6" />
        <div className="header mr-10 p-2">
          <h1 className="text-3xl font-navbar font-extrabold text-[#8B0D32]">
            RailMadad
          </h1>
          <p className="text-[12px] mt-1 tracking-wide font-navbar">
            For Inquiry, Assistance & Grievance Redressal
          </p>
        </div>
        <div className="emergency-call flex items-center mr-6">
        <button className="bg-railMadadNavbar text-white p-1 mr-2 rounded flex items-center space-x-1 hover:bg-hover blinking-button">
          <PhoneIcon className="h-5 w-5" />
          <span className="text-xl font-navbar font-bold">139</span>
        </button>
        <p className="text-[12px] ml-2 mr-10 tracking-wide font-navbar">
          for Security/Medical Assistance
        </p>
      </div>
        <div className="buttons flex items-center space-x-2 ml-auto">
          <button 
            className="bg-login text-black px-4 py-1 rounded hover:bg-railMadadNavbar hover:text-white text-sm"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button className="bg-signup text-black px-4 py-1 rounded hover:bg-railMadadNavbar hover:text-white text-sm">
            Signup
          </button>
          <button className="bg-white text-black px-4 py-1 rounded border border-gray-300 flex items-center text-sm">
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </button>
          <img src={googleMic} alt="Google Mic" className="h-8 w-8 mr-2" />
          <img src={manLogo} alt="Man Logo" className="h-10 w-10 mr-2" />
        </div>
      </nav>
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />
      )}
    </>
  );
}
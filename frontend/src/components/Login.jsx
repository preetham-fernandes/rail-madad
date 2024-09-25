import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function Login({ onClose, onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static credentials for demonstration
    if (userId === 'admin' && password === 'password') {
      onLogin(userId, password);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" style={{ zIndex: 1000 }}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">RAILWAY ADMIN LOGIN</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 p-2 rounded w-24 text-center">V600B</div>
              <button type="button" className="text-blue-500" aria-label="Refresh Captcha">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Enter Captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="w-3/4 p-2 border rounded"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#8B0D32] text-white p-2 rounded hover:bg-[#6D0A26]"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-600">OR</span>
          </div>
          <button
            onClick={() => {/* Handle forgot password */}}
            className="w-full mt-4 bg-gray-200 text-[#8B0D32] p-2 rounded hover:bg-gray-300"
          >
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
}
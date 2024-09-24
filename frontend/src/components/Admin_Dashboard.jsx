import React from 'react';
import { LogOut } from 'lucide-react';

export default function AdminDashboard({ onLogout }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-[#8B0D32] text-white p-6">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <button onClick={onLogout} className="flex items-center py-2 px-4 hover:bg-[#6D0A26] rounded w-full text-left">
          <LogOut className="mr-2" size={20} />
          LOGOUT
        </button>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
        <p>This is a simplified version for debugging purposes.</p>
      </main>
    </div>
  );
}
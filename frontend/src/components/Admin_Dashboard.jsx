import React, { useState } from 'react';
import { LogOut, LayoutDashboard, Building2, FileText, Info, Settings, HelpCircle, Bell, Menu, ChevronDown, Phone, Ticket, ShieldAlert, TrendingUp, Users, Clock } from 'lucide-react';

export default function AdminDashboard({ onLogout }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Building2, label: "Departments" },
    { icon: FileText, label: "Reports" },
    { icon: Info, label: "Station Info" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Helpdesk" },
  ];

  const overviewItems = [
    { title: "Total Calls", value: "21", icon: Phone, color: "text-blue-500", bgColor: "bg-blue-100" },
    { title: "Calls Attended", value: "18", icon: Ticket, color: "text-green-500", bgColor: "bg-green-100" },
    { title: "Calls Missed", value: "3", icon: Phone, color: "text-red-500", bgColor: "bg-red-100" },
    { title: "Security Calls", value: "5", icon: ShieldAlert, color: "text-yellow-500", bgColor: "bg-yellow-100" },
  ];

  const complaintItems = [
    { title: "Total Tickets", value: "15", icon: Ticket, color: "text-purple-500", bgColor: "bg-purple-100", progress: 75 },
    { title: "Active Tickets", value: "7", icon: HelpCircle, color: "text-orange-500", bgColor: "bg-orange-100", progress: 35 },
    { title: "Resolved Tickets", value: "8", icon: Settings, color: "text-teal-500", bgColor: "bg-teal-100", progress: 40 },
  ];

  const recentComplaints = [
    { id: 1, title: "Delayed Train", status: "Active", date: "2023-06-01" },
    { id: 2, title: "Ticket Refund", status: "Resolved", date: "2023-05-30" },
    { id: 3, title: "Lost Luggage", status: "Active", date: "2023-05-29" },
    { id: 4, title: "Platform Cleanliness", status: "Pending", date: "2023-05-28" },
  ];

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:w-64 bg-gradient-to-b from-[#8B0D32] to-[#6D0A26] text-white`}>
        <div className="flex items-center justify-center h-20 border-b border-[#6D0A26]">
          <h1 className="text-2xl font-bold">RailMadad</h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-6">
            <div className="w-20 h-20 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold ring-2 ring-white">
              AD
            </div>
            <h2 className="text-xl font-semibold text-center">Andheri -ADH</h2>
          </div>
          <div className="space-y-1 px-3">
            {menuItems.map((item, index) => (
              <button 
                key={index}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out ${
                  item.active ? 'bg-white text-[#8B0D32]' : 'hover:bg-white/10'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>
        <div className="p-4">
          <button 
            onClick={onLogout} 
            className="w-full bg-white text-[#8B0D32] py-2 rounded hover:bg-gray-100 flex items-center justify-center"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 py-3">
            <button className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">Welcome, Admin</h1>
            <div className="flex items-center space-x-4">
              <button className="relative" aria-label="Notifications">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button 
                  onClick={toggleProfile}
                  className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold"
                  aria-expanded={isProfileOpen}
                  aria-haspopup="true"
                >
                  AD
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#" onClick={onLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <div className="p-6 space-y-8">
          <section aria-labelledby="overview-title">
            <h2 id="overview-title" className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {overviewItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <div className={`flex items-center justify-between ${item.bgColor} p-2 rounded`}>
                    <span className="text-sm font-medium">{item.title}</span>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div className="text-3xl font-bold pt-4">{item.value}</div>
                </div>
              ))}
            </div>
          </section>
          
          <section aria-labelledby="complaint-title">
            <h2 id="complaint-title" className="text-2xl font-bold mb-6">Complaint Details</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {complaintItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <div className={`flex items-center justify-between ${item.bgColor} p-2 rounded`}>
                    <span className="text-sm font-medium">{item.title}</span>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div className="text-3xl font-bold pt-4">{item.value}</div>
                  <div className="relative pt-4">
                    <div className="h-2 w-full bg-gray-200 rounded">
                      <div 
                        className="h-2 bg-indigo-500 rounded" 
                        style={{ width: `${item.progress}%` }}
                        role="progressbar" 
                        aria-valuenow={item.progress} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section aria-labelledby="metrics-title">
            <h2 id="metrics-title" className="text-2xl font-bold mb-6">Additional Metrics</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Response Time</span>
                  <Clock className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">15 min</div>
                <p className="text-xs text-gray-500">5% improvement from last week</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Customer Satisfaction</span>
                  <TrendingUp className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-gray-500">3% increase from last month</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Active Users</span>
                  <Users className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-gray-500">10% increase from yesterday</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="recent-complaints-title">
            <h2 id="recent-complaints-title" className="text-2xl font-bold mb-6">Recent Complaints</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentComplaints.map((complaint) => (
                    <tr key={complaint.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{complaint.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          complaint.status === 'Active' ? 'bg-green-100 text-green-800' :
                          complaint.status === 'Resolved' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {complaint.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
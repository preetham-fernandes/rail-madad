import {
  Settings,
  Phone,
  Ticket,
  ShieldAlert,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import React, { useState } from "react"; 
import Totaltickets from "./Dashboardfiles/Totaltickets";
import Activetickets from "./Dashboardfiles/Activetickets";
import Resolvedtickets from "./Dashboardfiles/Resolvedtickets";

const Dashboard = ({ activeTickets, totalTickets }) => {
  // State to manage active page (dashboard or ticket lists)
  const [activePage, setActivePage] = useState('dashboard');

  const overviewItems = [
    {
      title: "Total Calls",
      value: "12",
      icon: Phone,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      title: "Calls Attended",
      value: "7",
      icon: Phone,
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      title: "Calls Missed",
      value: "3",
      icon: Phone,
      color: "text-red-500",
      bgColor: "bg-red-100",
    },
    {
      title: "Security Calls",
      value: "2",
      icon: ShieldAlert,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="p-4">
      {/* Conditional rendering for the dashboard, Total, Active, and Resolved tickets */}
      {activePage === 'dashboard' && (
        <>
          {/* Overview Section */}
          <section aria-labelledby="overview-title">
            <h2 id="overview-title" className="text-2xl font-bold mb-4">
              Overview
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {overviewItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <div
                    className={`flex items-center justify-between ${item.bgColor} p-2 rounded`}
                  >
                    <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                      {item.title}
                    </span>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div className="text-3xl font-bold pt-4">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Complaint Details Section */}
          <section aria-labelledby="complaint-title">
            <h2 id="complaint-title" className="text-2xl font-bold my-4">
              Complaint Details
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Total Tickets Button */}
              <button className="bg-white p-4 rounded shadow"
                      onClick={() => setActivePage('totaltickets')}>
                <div className="flex items-center justify-between bg-purple-100 p-2 rounded">
                  <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                    Total Tickets
                  </span>
                  <Ticket className="h-8 w-8 text-purple-500" />
                </div>
                <div className="text-3xl font-bold text-left pt-4">{totalTickets}</div> {/* Now using the dynamic value */}
                <div className="relative pt-4">
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div
                      className="h-2 bg-indigo-500 rounded"
                      style={{ width: `100%` }} // Progress bar filled to 100%
                    ></div>
                  </div>
                </div>
              </button>

              {/* Active Tickets Button */}
              <button className="bg-white p-4 rounded shadow"
                      onClick={() => setActivePage('activetickets')}>
                <div className="flex items-center justify-between bg-orange-100 p-2 rounded">
                  <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                    Active Tickets
                  </span>
                  <Ticket className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-left pt-4">{activeTickets}</div> {/* Now using the dynamic value */}
                <div className="relative pt-4">
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div
                      className="h-2 bg-indigo-500 rounded"
                      style={{ width: `${(activeTickets / totalTickets) * 100}%` }} // Dynamic progress based on tickets
                    ></div>
                  </div>
                </div>
              </button>

              {/* Resolved Tickets Button */}
              <button className="bg-white p-4 rounded shadow"
                      onClick={() => setActivePage('resolvedtickets')}>
                <div className="flex items-center justify-between bg-teal-100 p-2 rounded">
                  <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                    Resolved Tickets
                  </span>
                  <Settings className="h-8 w-8 text-teal-500" />
                </div>
                <div className="text-3xl font-bold text-left pt-4">{8}</div> {/* Static value for resolved tickets */}
                <div className="relative pt-4">
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div
                      className="h-2 bg-indigo-500 rounded"
                      style={{ width: `${(8 / totalTickets) * 100}%` }} // Dynamic progress based on tickets
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </section>

          {/* Additional Metrics Section */}
          <section aria-labelledby="metrics-title">
            <h2 id="metrics-title" className="text-2xl font-bold my-4">
              Additional Metrics
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Metric Cards */}
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                    Average Response Time
                  </span>
                  <Clock className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">15 min</div>
                <p className="text-xs text-gray-500">5% improvement from last week</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                    Customer Satisfaction
                  </span>
                  <TrendingUp className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-gray-500">3% increase from last month</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: "1rem", fontWeight: "500" }}>
                    Complaints Registered
                  </span>
                  <Users className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">158</div>
                <p className="text-xs text-gray-500">10% increase from yesterday</p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Render Totaltickets component */}
      {activePage === 'totaltickets' && <Totaltickets />}

      {/* Render Activetickets component */}
      {activePage === 'activetickets' && <Activetickets />}

      {/* Render Resolvedtickets component */}
      {activePage === 'resolvedtickets' && <Resolvedtickets />}
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend, ArcElement);

// Sample data for complaints
const totalComplaints = [
  { id: 1, title: "Cleanliness", status: "Active", date: "2024-09-30" },
    { id: 2, title: "Successful Ticket Refund", status: "Active", date: "2024-09-30" },
    { id: 3, title: "Lost Luggage", status: "Active", date: "2024-09-30" },
    { id: 4, title: "Platform Cleaned", status: "Resolved", date: "2024-09-29" },
    { id: 5, title: "Wrong Seat Assignment", status: "Active", date: "2024-09-29" },
    { id: 6, title: "Staff Provided Assistance", status: "Resolved", date: "2024-09-29" },
    { id: 7, title: "Ticket Machine Repaired", status: "Resolved", date: "2024-09-29" },
    { id: 8, title: "Inadequate Security Measures", status: "Active", date: "2024-09-29" },
    { id: 9, title: "Wi-Fi Issues Fixed", status: "Resolved", date: "2024-08-29" },
    { id: 10, title: "Safety Hazard on Platform", status: "Active", date: "2024-09-29" },
    { id: 11, title: "Staff Provided Assistance", status: "Resolved", date: "2024-09-29" },
    { id: 12, title: "Ticket Machine Repaired", status: "Resolved", date: "2024-09-29" },
    { id: 13, title: "Inadequate Security Measures", status: "Active", date: "2024-09-29" },
    { id: 14, title: "Wi-Fi Issues Fixed", status: "Resolved", date: "2024-08-29" },
    { id: 15, title: "Safety Hazard on Platform", status: "Active", date: "2024-09-29" },
    { id: 16, title: "Safety Hazard on Platform", status: "Active", date: "2024-09-29" },
];

const activeComplaints = [
  { id: 1, title: "Delayed Train", status: "Active", date: "2024-09-15" },
    { id: 2, title: "Ticket Refund Request", status: "Active", date: "2024-09-14" },
    { id: 3, title: "Lost Luggage", status: "Active", date: "2024-09-13" },
    { id: 4, title: "Platform Cleanliness Issue", status: "Active", date: "2024-09-12" },
    { id: 5, title: "Wrong Seat Assignment", status: "Active", date: "2024-09-11" },
    { id: 6, title: "Unresponsive Staff", status: "Active", date: "2024-09-10" },
    { id: 7, title: "Broken Ticket Machine", status: "Active", date: "2024-09-09" },
    { id: 8, title: "Inadequate Security Measures", status: "Active", date: "2024-09-08" },
];

// totalComplaints.filter(complaint => complaint.status === "Active");
const resolvedComplaints = [
  { id: 1, title: "Delayed Train Compensation", status: "Resolved", date: "2023-09-05" },
  { id: 2, title: "Successful Ticket Refund", status: "Resolved", date: "2023-09-04" },
  { id: 3, title: "Luggage Returned", status: "Resolved", date: "2023-09-03" },
  { id: 4, title: "Platform Cleaned", status: "Resolved", date: "2023-09-02" },
  { id: 5, title: "Seat Assignment Corrected", status: "Resolved", date: "2023-09-01" },
  { id: 6, title: "Staff Provided Assistance", status: "Resolved", date: "2023-08-30" },
  { id: 7, title: "Ticket Machine Repaired", status: "Resolved", date: "2023-08-29" },
  { id: 8, title: "Security Enhanced", status: "Resolved", date: "2023-08-28" },
];
// totalComplaints.filter(complaint => complaint.status === "Resolved");

const totalCalls = [
  { id: 1, title: "Customer Inquiry", status: "Attended", category: "General", date: "2023-09-04" },
  { id: 2, title: "Technical Support", status: "Attended", category: "General", date: "2023-09-01" },
  { id: 3, title: "Billing Issue", status: "Missed", category: "General", date: "2023-09-06" },
  { id: 4, title: "General Query", status: "Attended", category: "General", date: "2023-08-31" },
  { id: 5, title: "Product Information", status: "Missed", category: "General", date: "2023-09-09" },
  { id: 6, title: "Complaint", status: "Attended", category: "General", date: "2023-09-02" },
  { id: 7, title: "Refund Request", status: "Attended", category: "General", date: "2023-09-05" },
  { id: 8, title: "Security Issue", status: "Missed", category: "Security", date: "2023-09-15" },
  { id: 9, title: "Subscription Issue", status: "Attended", category: "General", date: "2023-08-28" },
  { id: 10, title: "Security Concern", status: "Attended", category: "Security", date: "2023-09-09" },
];

const attendedCalls = totalCalls.filter(call => call.status === "Attended");
const missedCalls = totalCalls.filter(call => call.status === "Missed");
const securityCalls = totalCalls.filter(call => call.category === "Security");


const Analytics = () => {
  // Data for the charts
  const callData = {
    labels: ['Calls Attended', 'Calls Missed', 'Security Calls'],
    datasets: [
      {
        label: 'Call Overview',
        data: [attendedCalls.length, missedCalls.length, securityCalls.length], // Include security calls
        backgroundColor: ['#C70039', '#FF6969', '#FFF5E0'],
        hoverBackgroundColor: ['#C70039', '#FF6969', '#FFF5E0'],
      },
    ],
  };

  const complaintData = {
    labels: ['Total Complaints', 'Active Complaints', 'Resolved Complaints'],
    datasets: [
      {
        label: 'Complaints Overview',
        data: [totalComplaints.length, activeComplaints.length, resolvedComplaints.length], // Use lengths of each array
        backgroundColor: ['#141E46', '#C70039', '#FF6969'],
        hoverBackgroundColor: ['#141E46', '#C70039', '#FF6969'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow height flexibility
  };

  return (
    <div className="max-h-[90vh] overflow-y-auto p-4"> {/* Scrollable wrapper */}
      <div className="grid grid-cols-2 gap-4">
        {/* Bar Chart */}
        <div className="bg-white p-8 shadow rounded" style={{ height: '300px' }}> {/* Set a fixed height */}
          {/* <h2 className="text-xl font-bold">Bar Chart</h2> */}
          <Bar data={complaintData} options={options} />
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-8 shadow rounded" style={{ height: '300px' }}> {/* Set a fixed height */}
          {/* <h2 className="text-xl font-bold">Doughnut Chart</h2> */}
          <Doughnut data={callData} options={options} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-8 shadow rounded" style={{ height: '300px' }}> {/* Set a fixed height */}
          {/* <h2 className="text-xl font-bold">Pie Chart</h2> */}
          <Pie data={complaintData} options={options} />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-8 shadow rounded" style={{ height: '300px' }}> {/* Set a fixed height */}
          {/* <h2 className="text-xl font-bold">Line Chart</h2> */}
          <Line data={callData} options={options} />
        </div>

        
      </div>
    </div>
  );
};

export default Analytics;

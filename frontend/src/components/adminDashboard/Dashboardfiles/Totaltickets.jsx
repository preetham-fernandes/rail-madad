import React from 'react';

const Totaltickets = () => {
  const recentComplaints = [
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

  return (
    <div>
      <section aria-labelledby="recent-complaints-title">
        <h2
          id="recent-complaints-title"
          className="text-2xl font-bold mb-6"
        >
          Total Tickets
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {/* Make the table scrollable by setting a max height and enabling overflow */}
          <div className="max-h-[75vh] overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Catagory
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentComplaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {complaint.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {complaint.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          complaint.status === "Active"
                            ? "bg-red-100 text-red-800"
                            : complaint.status === "Resolved"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {complaint.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Totaltickets;

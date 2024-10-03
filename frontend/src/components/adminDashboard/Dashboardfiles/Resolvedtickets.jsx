import React from 'react';

const Resolvedtickets = () => {
  const recentComplaints = [
    { id: 1, title: "Delayed Train Compensation", status: "Resolved", date: "2024-09-05" },
    { id: 2, title: "Successful Ticket Refund", status: "Resolved", date: "2024-09-04" },
    { id: 3, title: "Luggage Returned", status: "Resolved", date: "2024-09-03" },
    { id: 4, title: "Platform Cleaned", status: "Resolved", date: "2024-09-02" },
    { id: 5, title: "Seat Assignment Corrected", status: "Resolved", date: "2024-09-01" },
    { id: 6, title: "Staff Provided Assistance", status: "Resolved", date: "2024-08-30" },
    { id: 7, title: "Ticket Machine Repaired", status: "Resolved", date: "2024-08-29" },
    { id: 8, title: "Security Enhanced", status: "Resolved", date: "2024-08-28" },
  ];

  return (
    <div>
      <section aria-labelledby="recent-complaints-title">
        <h2
          id="recent-complaints-title"
          className="text-2xl font-bold mb-6"
        >
          Resolved Tickets
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-y-auto max-h-[75vh]"> {/* Set a maximum height here */}
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
                    Title
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

export default Resolvedtickets;

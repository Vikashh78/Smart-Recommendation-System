import { useState } from "react";

export default function HospitalDashboard() {
  const [requests, setRequests] = useState([]);
  const [donations, setDonations] = useState([
    { id: 1, donor: "Vikash Sharma", resource: "Blood", amount: "2 Units", date: "2025-09-01 14:20" },
    { id: 2, donor: "Rahul Mehta", resource: "Funds", amount: "₹5000", date: "2025-09-05 11:10" },
  ]);

  const [formData, setFormData] = useState({
    resource: "",
    urgency: "",
    details: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([
      ...requests,
      {
        id: requests.length + 1,
        resource: formData.resource,
        urgency: formData.urgency,
        details: formData.details,
        date: new Date().toLocaleString(),
      },
    ]);
    setFormData({ resource: "", urgency: "", details: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Hospital Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resource Request Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Request Resources</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Resource Needed (Blood, Oxygen, Funds...)"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.resource}
              onChange={(e) => setFormData({ ...formData, resource: e.target.value })}
              required
            />
            <select
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.urgency}
              onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
              required
            >
              <option value="">Select Urgency</option>
              <option value="5">Critical (5)</option>
              <option value="4">High (4)</option>
              <option value="3">Medium (3)</option>
              <option value="2">Low (2)</option>
              <option value="1">Very Low (1)</option>
            </select>
            <textarea
              placeholder="Additional Details"
              className="w-full px-4 py-2 border rounded-lg"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Donation History */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Donations Received</h2>
          {donations.length === 0 ? (
            <p className="text-gray-600">No donations yet.</p>
          ) : (
            <ul className="space-y-3">
              {donations.map((d) => (
                <li
                  key={d.id}
                  className="border-b pb-2 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{d.donor}</p>
                    <p className="text-sm text-gray-600">
                      {d.resource} • {d.amount} • {d.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Requests Submitted by Hospital */}
      <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Your Requests</h2>
        {requests.length === 0 ? (
          <p className="text-gray-600">No requests submitted.</p>
        ) : (
          <ul className="space-y-3">
            {requests.map((r) => (
              <li key={r.id} className="border-b pb-2">
                <p className="font-medium">
                  {r.resource} (Urgency: {r.urgency}/5)
                </p>
                <p className="text-sm text-gray-600">
                  {r.details} • {r.date}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

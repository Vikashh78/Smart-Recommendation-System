import { useEffect, useState } from "react";

export default function DonorDashboard() {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [activeTab, setActiveTab] = useState("recommendations"); // "recommendations" or "history"

  // Mock data for now (replace later with backend API/ML model)
  useEffect(() => {
    const data = [
      { id: 1, name: "City Hospital", resource: "Blood", urgency: 5, location: "Delhi" },
      { id: 2, name: "Apollo Hospital", resource: "Oxygen", urgency: 4, location: "Mumbai" },
      { id: 3, name: "AIIMS", resource: "Funds", urgency: 3, location: "Bangalore" },
    ];
    setHospitals(data);
    setFilteredHospitals(data);
  }, []);

  // Search filter
  useEffect(() => {
    const results = hospitals.filter(
      (h) =>
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.location.toLowerCase().includes(search.toLowerCase()) ||
        h.resource.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredHospitals(results);
  }, [search, hospitals]);

  // Handle donation submit
  const handleDonate = () => {
    if (selectedHospital && donationAmount) {
      setDonations([
        ...donations,
        {
          id: donations.length + 1,
          hospital: selectedHospital.name,
          resource: selectedHospital.resource,
          amount: donationAmount,
          date: new Date().toLocaleString(),
        },
      ]);
      setSelectedHospital(null);
      setDonationAmount("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Donor Dashboard</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("recommendations")}
          className={`px-4 py-2 rounded-l-lg ${
            activeTab === "recommendations" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Recommendations
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`px-4 py-2 rounded-r-lg ${
            activeTab === "history" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Donation History
        </button>
      </div>

      {/* Recommendations Tab */}
      {activeTab === "recommendations" && (
        <>
          {/* Search */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search by hospital, resource, or location..."
              className="w-1/2 px-4 py-2 border rounded-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Hospital Recommendation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((h) => (
              <div
                key={h.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <h2 className="text-xl font-semibold mb-2">{h.name}</h2>
                <p>
                  <span className="font-medium">Resource:</span> {h.resource}
                </p>
                <p>
                  <span className="font-medium">Urgency:</span> {h.urgency}/5
                </p>
                <p>
                  <span className="font-medium">Location:</span> {h.location}
                </p>

                <button
                  onClick={() => setSelectedHospital(h)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Donate
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Donation History Tab */}
      {activeTab === "history" && (
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Donations</h2>
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
                    <p className="font-medium">{d.hospital}</p>
                    <p className="text-sm text-gray-600">
                      {d.resource} • {d.amount} • {d.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Donation Popup */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              Donate to {selectedHospital.name}
            </h2>
            <p className="mb-2">
              <span className="font-medium">Resource:</span>{" "}
              {selectedHospital.resource}
            </p>

            <input
              type="text"
              placeholder="Enter amount/units"
              className="w-full px-3 py-2 border rounded-lg mb-4"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setSelectedHospital(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDonate}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

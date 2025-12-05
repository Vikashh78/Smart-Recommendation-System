import { motion } from "framer-motion";

export default function HospitalCard({ hospital, onDonate }) {
  // Map urgency to colors
  const urgencyColors = {
    5: "bg-red-600",
    4: "bg-orange-500",
    3: "bg-yellow-400",
    2: "bg-green-400",
    1: "bg-green-600",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
      className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hospital Info */}
      <div>
        <h2 className="text-xl font-bold mb-2 text-indigo-700">{hospital.name}</h2>
        <p className="mb-1"><span className="font-semibold">Resource:</span> {hospital.resource}</p>
        <p className="mb-1"><span className="font-semibold">Location:</span> {hospital.location}</p>
        <span
          className={`inline-block mt-2 px-3 py-1 text-sm text-white rounded-full ${urgencyColors[hospital.urgency]}`}
        >
          Urgency: {hospital.urgency}/5
        </span>
      </div>

      {/* Donate Button */}
      <button
        onClick={() => onDonate(hospital)}
        className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition"
      >
        Donate
      </button>
    </motion.div>
  );
}

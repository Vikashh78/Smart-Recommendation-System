import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">Smart Donation</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          {user?.role === "donor" && <Link to="/donor" className="hover:underline">Donor</Link>}
          {user?.role === "hospital" && <Link to="/hospital" className="hover:underline">Hospital</Link>}

          {!user ? (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:underline">Logout</button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 md:hidden space-y-2">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          {user?.role === "donor" && <Link to="/donor" className="hover:underline" onClick={() => setIsOpen(false)}>Donor</Link>}
          {user?.role === "hospital" && <Link to="/hospital" className="hover:underline" onClick={() => setIsOpen(false)}>Hospital</Link>}
          {!user ? (
            <>
              <Link to="/login" className="hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
              <Link to="/register" className="hover:underline" onClick={() => setIsOpen(false)}>Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:underline text-left">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}

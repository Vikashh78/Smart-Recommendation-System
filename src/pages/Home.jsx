import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Smart Donation Recommendation System
      </h1>
      <p className="mb-6 text-gray-700 max-w-lg px-4">
        A system that recommends hospital donations using Machine Learning for better resource allocation.
      </p>
      <div className="space-x-4">
        <Link 
          to="/login" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Login
        </Link>
        <Link 
          to="/register" 
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home
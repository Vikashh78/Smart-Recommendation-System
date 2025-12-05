import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Smart Donation Recommendation System</h1>
      <p className="mb-6 text-gray-100 max-w-lg">
        A system that recommends hospital donations using Machine Learning for better resource allocation.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</Link>
        <Link to="/register" className="px-4 py-2 bg-green-600 text-white rounded-lg">Register</Link>
      </div>
    </div>
  );
}

export default Home
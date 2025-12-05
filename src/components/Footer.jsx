import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-6">
      <p>© {new Date().getFullYear()} Smart Donation Recommendation System</p>
    </footer>
  )
}

export default Footer
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-light text-gray-400">Design</span>
              <span className="text-2xl font-light text-gray-600 ml-1">Mumbai</span>
            </div>
          </div>
          
          {/* Navigation - We'll build this step by step */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-500 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Exhibit</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Exhibitors</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Partners</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Talks</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Features</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Visit</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Team</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Contact</a>
          </nav>
          
          {/* Subscribe Button */}
          <div className="flex items-center">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
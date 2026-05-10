import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Videos</h1>
      
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl px-12">
        <div className="relative flex items-center w-full">
          <svg className="absolute left-4 w-4 h-4 text-[#86868b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search videos..." 
            className="w-full pl-11 pr-4 py-2 bg-[#f5f5f7] border-none rounded-full text-sm text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-shadow"
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-900 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
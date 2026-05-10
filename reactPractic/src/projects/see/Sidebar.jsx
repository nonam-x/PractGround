import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> },
    { name: 'Subscriptions', icon: <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> },
    { name: 'Explore', icon: <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> },
    { name: 'Library', icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> },
  ];

  const filterItems = ['Recently Added', 'Trending', 'Popular'];

  return (
  <aside className="w-60 flex-shrink-0 border-r border-gray-100 bg-[#fbfbfd] min-h-screen flex flex-col py-6 sticky bottom-0 left-0 ">
      {/* Logo Area */}
      <div className="px-8 mb-10">
        <svg width="48" height="24" viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-900">
          <circle cx="16" cy="12" r="10" />
          <circle cx="48" cy="12" r="10" />
          <path d="M26 12h12" />
          <path d="M6 12H0" />
          <path d="M64 12h-6" />
        </svg>
      </div>

      {/* Main Navigation */}
      <nav className=" flex flex-col px-4 space-y-1 mb-8">
        {menuItems.map((item) => (
          <button key={item.name} className="flex items-center space-x-4 px-4 py-2.5 rounded-lg text-[#1d1d1f] hover:bg-gray-200/50 transition-colors text-sm font-medium w-full text-left">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {item.icon}
            </svg>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Filters Section */}
      <div className="px-8 mb-4">
        <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Filters</h3>
      </div>
      <nav className="flex flex-col px-4 space-y-1">
        {filterItems.map((item) => (
          <button key={item} className="px-4 py-2 rounded-lg text-[#515154] hover:bg-gray-200/50 transition-colors text-sm w-full text-left">
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
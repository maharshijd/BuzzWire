import React from 'react';

const NavLink = ({ page, currentPage, setCurrentPage, children }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === page
          ? 'bg-blue-600 text-white shadow-md'
          : 'text-gray-700 hover:bg-blue-100'
      }`}
    >
      {children}
    </button>
);

export default NavLink;
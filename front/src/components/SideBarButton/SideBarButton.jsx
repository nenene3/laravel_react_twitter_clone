import React from 'react';

const SideBarButton = ({  onClick, type = "button", className = "",children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default SideBarButton;
import React from 'react';

const Button = ({ onClick,children , className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

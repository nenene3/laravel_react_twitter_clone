import React from 'react';

const TextInput = ({ id, name, value, onChange, placeholder, className,type }) => {
  return (
    <input
      type={type ?? "text"}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};

export default TextInput;

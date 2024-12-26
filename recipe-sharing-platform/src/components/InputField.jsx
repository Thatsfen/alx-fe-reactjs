import React from 'react';

const InputField = ({ 
  label, 
  type = 'text', 
  id, 
  value, 
  onChange, 
  error, 
  placeholder 
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input 
        type={type} 
        id={id} 
        className={`mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : ''
        }`} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
      />
      {error && (
        <p className="text-red-500 mt-1 text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputField;
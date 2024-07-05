import React from 'react';

export const ComboBox = ({ label, name, placeholder, options, register, rules, error, color }) => {
  return (
    <>
      <label className={`block ${color} font-bold mb-2`} htmlFor={name}>{label}</label>
      <div className="relative">
        <select
          id={name}
          className="bg-gray-200 w-full text-gray-800 text-lg px-4 py-3.5 rounded-md transition-all focus:outline-none focus:ring-[3px] focus:ring-[#84BD00]"
          {...register(name, rules)}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <span className="text-red-500 text-sm font-semibold mt-1">{error.message}</span>
      )}
    </>
  );
};


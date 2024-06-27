import React from 'react';

const Input = ({ label, name, type, placeholder, rules, register, error }) => {


    return (
        <>
            <label className="block text-white font-bold mb-2" htmlFor={name}>{label}</label>
            <input
                id={name}
                type={type}
                className="bg-gray-100 w-full text-gray-800 text-lg px-4 py-3.5 rounded-md transition-all focus:outline-none focus:ring-[3px] focus:ring-[#84BD00]"
                placeholder={placeholder}
                {...register(name, rules)}
            />
            {error && (
                <span className="text-red-500 text-sm font-semibold mt-1">{error.message}</span>
            )}
        </>
    );
};

export default Input;

import React from 'react';

const TextArea = ({ label, name, placeholder, rows, cols, register, rules, error, color }) => {
    return (
        <>
            <label className={`block ${color} font-bold mb-2`} htmlFor={name}>{label}</label>
            <textarea
                id={name}
                className="bg-gray-100 w-full text-gray-800 text-lg px-4 py-3.5 rounded-md transition-all focus:outline-none focus:ring-[3px] focus:ring-[#84BD00]"
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                {...register(name, rules)}
            />
            {error && (
                <span className="text-red-500 text-sm font-semibold mt-1">{error.message}</span>
            )}
        </>
    );
};

export default TextArea;

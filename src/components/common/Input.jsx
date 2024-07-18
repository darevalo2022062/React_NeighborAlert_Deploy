import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ label, name, type, defaultValue, placeholder, optional, rules, register, error, color }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <>
            {label && (
                <label className={`block ${color} font-bold mb-2`} htmlFor={name}>
                    {label} {optional && <span className={`${color} font-normal`}>(optional)</span>}
                </label>
            )}
            <div className="relative">
                <input
                    id={name}
                    type={showPassword && type === 'password' ? 'text' : type}
                    className="bg-gray-200 w-full text-gray-800 text-lg px-4 py-3.5 rounded-md transition-all focus:outline-none focus:ring-[3px] focus:ring-[#84BD00]"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    {...register(name, rules)}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-4 flex items-center text-gray-600"
                    >
                        {showPassword ? <FaRegEyeSlash size={24} /> : <FaRegEye size={24} />}
                    </button>
                )}
            </div>
            {error && (
                <span className="text-red-500 text-sm font-semibold mt-1">
                    {error.message}
                </span>
            )}
        </>
    );
};

export default Input;

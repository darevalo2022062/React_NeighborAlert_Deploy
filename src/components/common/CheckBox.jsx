import React from 'react';
import { FaCheck } from "react-icons/fa";

export const CheckBox = ({ label, name, register, rules, error }) => {
    return (
        <div className="inline-flex items-center">
            <label className="relative flex cursor-pointer items-center mx-3" htmlFor={name}>
                <input
                    id={name}
                    type="checkbox"
                    className="peer relative h-5 w-5 appearance-none rounded-full border border-gray-300 transition-all 
                                checked:border-[#84BD00] checked:bg-[#84BD00] 
                                checked:before:bg-[#84BD00] hover:before:opacity-10"
                    {...register(name, rules)}
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
                                text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <FaCheck />
                </div>
            </label>
            <label className="mt-px cursor-pointer select-none font-light text-gray-700" htmlFor={name}>
                {label}
            </label>
            {error && (
                <span className="text-red-500 text-sm font-semibold mt-1">{error.message}</span>
            )}
        </div>
    );
}



import React from 'react';
import { FiHome, FiBook, FiUser } from 'react-icons/fi';

export const Sidebar = () => {

    return (
        <>
        <div className="w-64 h-screen bg-[#13121f] text-white flex flex-col">
            <div className="p-4 flex items-center justify-center bg-[#13121f]">
                <span className="text-2xl font-bold">NeighborAlert</span>
            </div>
            <div className="flex-1">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center p-4 hover:bg-[#84bb0b]">
                            <FiHome className="mr-4" /> Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-4 hover:bg-[#84bb0b]">
                            <FiBook className="mr-4" /> My Courses
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-4 hover:bg-[#84bb0b]">
                            <FiUser className="mr-4" /> My Classes
                        </a>
                    </li>
                </ul>
            </div>
            <div className="p-4">
                <button className="w-full bg-[#84bb0b] text-[#13121f] p-2 rounded-lg hover:bg-[#84bb0b]/90">
                    Download our mobile app
                </button>
            </div>
        </div>
        </>
    );
};
import React, { useState, useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from '../assets/img/logo.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

            <nav className="bg-[#11111F] shadow-lg">
                <div className="max-w-7xl mx-auto h-24 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <button onClick={toggleSidebar} className="focus:outline-none mr-4 md:hidden">
                            <HiMenuAlt2 size={24} color='#fff' />
                        </button>
                        <Link to={isAuthenticated ? "/reports" : "/"} aria-label="Home" className="flex items-center">
                            <img src={logo} className='rounded-full' height="40" width="40" alt="Logo" />
                            <span className="text-white text-lg font-bold ml-2">Neighbor Alert</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex xl:gap-10 md:gap-8 gap-2">
                        {isAuthenticated ? (
                            <>
                                <Link to="/reports" className="text-white hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">Reports</Link>
                                <Link to="/my-reports" className="text-white  hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">My reports</Link>
                                <Link to="/i-reporter" className="text-white hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">I reporter</Link>
                                <Link to="/community" className="text-white hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">My community</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/" className="text-white hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">Home</Link>
                                <Link to="/about" className="text-white  hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">About Us</Link>
                                <Link to="/how-to-publish" className="text-white hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">How to publish</Link>
                                <Link to="/confidentiality" className="text-white hover:text-[#84BD00] transition duration-150 ease-in-out font-semibold">Confidentiality</Link>
                            </>
                        )}
                    </div>
                    <div className="hidden md:block">
                        {isAuthenticated ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost  avatar btn-lg">
                                    <div className="w-14 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user.img} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">Profile</a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={logout}>Logout</button></li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="btn rounded-full px-7 mx-2 border border-none my-auto bg-[#84BD00] hover:bg-[#92c752] text-white">Sign in</Link>
                                <Link to="/register" className="btn rounded-full px-6 border border-none">Sign up</Link>
                            </>
                        )}
                    </div>
                </div>
                <div ref={sidebarRef} className={`md:hidden fixed inset-y-0 left-0 z-50 transition-transform ease-in-out duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="bg-[#11111F] h-full w-64 shadow-lg flex flex-col justify-between">
                        <div className="pt-4 px-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={logo} className='rounded-full' height="40" width="40" alt="Logo" />
                                    <span className="text-white text-lg font-bold ml-2">Neighbor Alert</span>
                                </div>
                                <div>
                                    <button type="button" className="text-white focus:outline-none" onClick={toggleSidebar}>
                                        <IoMdClose size={24} />
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 mt-8 space-y-4">
                                {isAuthenticated ? (
                                    <>
                                        <div className="flex flex-col items-center">
                                            <div className="w-16 rounded-full">
                                                <img alt="User avatar" src={user.img} className='rounded-full' />
                                            </div>
                                            <span className="text-white mt-2">{`${user.name} ${user.lastName}`}</span>
                                        </div>
                                        <Link to="/reports" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Profile</Link>
                                        <Link to="/reports" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Settings</Link>
                                        <div className="h-px bg-gray-300 border-0"></div>
                                        <Link to="/reports" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Reports</Link>
                                        <Link to="/my-reports" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">My reports</Link>
                                        <Link to="/i-reporter" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">I reporter</Link>
                                        <Link to="/community" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">My community</Link>
                                        <button
                                            onClick={logout}
                                            className="block w-full text-left text-white bg-red-600 px-3 py-2 rounded-md"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={toggleSidebar} className="block w-full py-3 px-3 mt-5 bg-[#84BD00] text-white font-semibold hover:bg-[#92c752] rounded-3xl text-center">Sign in</Link>
                                        <Link to="/register" onClick={toggleSidebar} className="block w-full py-3 px-3 mb-5 bg-slate-50 text-black font-semibold hover:bg-gray-600 rounded-3xl text-center">Sign up</Link>
                                        <div className="h-px mb-5 bg-white border-0"></div>
                                        <Link to="/" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
                                        <Link to="/about" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">About Us</Link>
                                        <Link to="/how-to-publish" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">How to publish</Link>
                                        <Link to="/confidentiality" onClick={toggleSidebar} className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md">Confidentiality</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

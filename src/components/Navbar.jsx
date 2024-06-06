import React from 'react';
import { RiUserLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import logo from '../assets/logo.jpg'

const Navbar = () => {

    const { isAuthenticated, logout, user } = useAuth();

    return (
        <>
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-10 px-4 bg-[#11111F]">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 md:pl-6">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="" aria-label="Home" className="flex items-center">
                            <img src={logo} className='rounded-full' height="40" width="40" alt="Logo" />
                            <span className="text-white text-lg font-bold ml-2">Neighbor Alert</span>
                        </a>

                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex md:space-x-10">
                    {
                        isAuthenticated ? (
                            <>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">Home</a>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">My reports</a>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">I reporter</a>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">My community</a>
                            </>
                        ) : (
                            <>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">Home</a>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">About Us</a>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">How to publish</a>
                                <a href="" className="font-bold text-lg text-white hover:text-[#84BD00] transition duration-150 ease-in-out">Confidentiality</a>
                            </>
                        )
                    }
                </div>
                <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 md:pr-6">
                    {isAuthenticated ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn mx-2 border border-none my-auto bg-[#84BD00] hover:bg-[#92c752] text-white">Sign in</Link>
                            <Link to="/register" className="btn mr2 my-auto">Sign up</Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

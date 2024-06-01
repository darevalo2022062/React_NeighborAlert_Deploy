import React from 'react'
import { MdMailOutline } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import user from "../../assets/icon.jpg"
import { FaRegIdCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Register = () => {
    return (
        <>
            <div className="relative w-full min-h-screen bg-[#11111F] flex flex-col justify-center items-center">
                <div className="relative w-full sm:max-w-md px-16 py-5 mx-auto bg-[#11111F]">
                    <div className="md:mb-6 lg:mb-12">
                        <h2 className="text-center text-[#84BD00] text-4xl font-extrabold">Sign-In</h2>
                        <p className='text-center text-white mt-2 font-semibold'>Enter your information</p>
                    </div>
                    <form autoComplete="off" noValidate>
                        <div className="flex flex-col items-center justify-center">
                            <label htmlFor="photo" className="cursor-pointer">
                                <div className="w-20 h-20 rounded-full overflow-hidden">
                                    <img src={user} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                            </label>
                            <p className="text-sm font-semibold text-white mb-3">Select an image</p>
                            <input
                                id="photo"
                                type="file"
                                className="hidden"
                            />
                        </div>

                        {/* Input for name */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="name">Name</label>
                            <div className='relative'>
                                <input id="name" type="text" autoComplete="off" className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' />
                                <FaRegIdCard size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        {/* Input for last name */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="lastName">Last Name</label>
                            <div className='relative'>
                                <input id="lastName" type="text" autoComplete="off" className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' />
                                <FaRegIdCard size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        {/* Input for phone */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="phone">Phone</label>
                            <div className='relative'>
                                <input id="phone" type="text" autoComplete="off" className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' />
                                <FaPhone size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        {/* Input for email address */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="email">Email address</label>
                            <div className='relative'>
                                <input id="email" type="email" autoComplete="off" className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' />
                                <MdMailOutline size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="password">Password</label>
                            <div className='relative'>
                                <input id="password" type="password" autoComplete="off" className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' />
                                <RiLockPasswordFill size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="confirmPassword">Confirm password</label>
                            <div className='relative'>
                                <input id="confirmPassword" type="password" autoComplete="off" className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' />
                                <RiLockPasswordFill size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                        </div>

                        <div className="mt-14">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#84BD00] border border-transparent rounded-md font-semibold capitalize text-white">Create an account</button>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-white block text-center mt-4">
                                Already have an account?{' '}
                                <a href="/register" className="text-[#84BD00] hover:underline">Log in here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register

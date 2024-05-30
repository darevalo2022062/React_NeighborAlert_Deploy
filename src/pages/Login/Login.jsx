import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import './waves.css';  // Import the CSS for waves

const Login = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[#11111F] flex flex-col justify-center items-center">
        <div className="relative w-full sm:max-w-md px-16 py-5 mx-auto bg-[#11111F]">
          <div className="md:mb-6 lg:mb-12">
            <h2 className="text-center text-[#84BD00] text-4xl font-extrabold">Login</h2>
            <p className='text-center text-white mt-2 font-semibold'>Enter your email and password to login</p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">Email address</label>
              <div className='relative'>
                <input className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' id="email" type="email" />
                <MdMailOutline size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="password">Password</label>
              <div className='relative'>
                <input className='shadow appearance-none border rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10' id="password" type="password" />
                <RiLockPasswordFill size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div className="mt-14">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#84BD00] border border-transparent rounded-md font-semibold capitalize text-white">Sign In</button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-white block text-center mt-4">
                Don't have an account?{' '}
                <a href="/register" className="text-[#84BD00] hover:underline">Sign up here</a>
              </p>
            </div>
          </form>
        </div>

        {/* Waves SVG */}
        <div className="waves">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Login;

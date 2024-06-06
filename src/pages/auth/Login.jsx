import React from 'react';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './waves.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { login } = useAuth();

  const onSubmit = data => {
    const { email, pass } = data;
    login({ email, pass })
    reset()
  };

  return (
    <>
      <div className="relative w-full min-h-screen bg-[#11111F] flex flex-col justify-center items-center">
        <div className="relative w-full sm:max-w-md px-16 py-5 mx-auto bg-[#11111F]">
          <div className="md:mb-6 lg:mb-12">
            <h2 className="text-center text-[#84BD00] text-4xl font-extrabold">Login</h2>
            <p className='text-center text-white mt-2 font-semibold'>Enter your email and password to login</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">Email address</label>
              <div className='relative'>
                <input
                  className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.email ? 'border-2 border-red-500' : 'text-gray-700'
                    }`}
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                />
                <MdMailOutline size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
              {errors.email && <p className="text-red-500 text-xs font-semibold mt-2">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="password">Password</label>
              <div className='relative'>
                <input
                  className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.pass ? 'border-2 border-red-500' : 'text-gray-700'}`}
                  id="pass"
                  type="password"
                  {...register('pass', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                />
                <RiLockPasswordFill size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
              {errors.pass && <p className="text-red-500 text-xs font-semibold mt-2">{errors.pass.message}</p>}
            </div>

            <div className="mt-14">
              <button type="submit" className="btn border-none  text-white w-full  hover:bg-[#92c752] bg-[#84BD00]">Sign In</button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-white block text-center mt-4">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#84BD00] hover:underline">Sign up here</Link>
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

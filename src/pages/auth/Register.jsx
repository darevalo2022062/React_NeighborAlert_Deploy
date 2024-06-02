import React from 'react';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import user from "../../assets/icon.jpg";
import { FaRegIdCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { registerUser } = useAuth();
    const onSubmit = (data) => {
        const { name, lastName, phone, email, pass } = data;
        registerUser({ name, lastName, phone, email, pass });
    };

    const password = watch('pass', '');

    return (
        <>
            <div className="relative w-full min-h-screen bg-[#11111F] flex flex-col justify-center items-center">
                <div className="relative w-full sm:max-w-md px-16 py-5 mx-auto bg-[#11111F]">
                    <div className="md:mb-6 lg:mb-12">
                        <h2 className="text-center text-[#84BD00] text-4xl font-extrabold">Sign-In</h2>
                        <p className='text-center text-white mt-2 font-semibold'>Enter your information</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
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
                            // {...register('photo', { required: 'Image is required' })}
                            />
                            {/* {errors.photo && <p className="text-red-500 text-xs font-semibold mt-2">{errors.photo.message}</p>} */}
                        </div>

                        {/* Input for name */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="name">Name</label>
                            <div className='relative'>
                                <input
                                    id="name"
                                    type="text"
                                    className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.name ? 'border-2 border-red-500' : 'text-gray-700'}`}
                                    {...register('name', { required: 'Name is required' })}
                                />
                                <FaRegIdCard size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs font-semibold mt-2">{errors.name.message}</p>}
                        </div>

                        {/* Input for last name */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="lastName">Last Name</label>
                            <div className='relative'>
                                <input
                                    id="lastName"
                                    type="text"
                                    className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.lastName ? 'border-2 border-red-500' : 'text-gray-700'}`}
                                    {...register('lastName', { required: 'Last Name is required' })}
                                />
                                <FaRegIdCard size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.lastName && <p className="text-red-500 text-xs font-semibold mt-2">{errors.lastName.message}</p>}
                        </div>

                        {/* Input for phone */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="phone">Phone</label>
                            <div className='relative'>
                                <input
                                    id="phone"
                                    type="text"
                                    className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.phone ? 'border-2 border-red-500' : 'text-gray-700'}`}
                                    {...register('phone', { required: 'Phone number is required', pattern: { value: /^[0-9]+$/i, message: 'Invalid phone number' } })}
                                />
                                <FaPhone size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs font-semibold mt-2">{errors.phone.message}</p>}
                        </div>

                        {/* Input for email address */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="email">Email address</label>
                            <div className='relative'>
                                <input
                                    className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.email ? 'border-2 border-red-500' : 'text-gray-700'}`}
                                    id="email"
                                    type="email"
                                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                                />
                                <MdMailOutline size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs font-semibold mt-2">{errors.email.message}</p>}
                        </div>

                        {/* Input for password */}
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

                        {/* Input for confirm password */}
                        <div className="mb-4">
                            <label className="block text-white font-bold mb-2" htmlFor="confirmPassword">Confirm password</label>
                            <div className='relative'>
                                <input
                                    className={`shadow appearance-none border rounded-md w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline pr-10 ${errors.confirmPassword ? 'border-2 border-red-500' : 'text-gray-700'}`}
                                    id="confirmPassword"
                                    type="password"
                                    {...register('confirmPassword', {
                                        required: 'Confirm Password is required',
                                        validate: value => value === password || 'Passwords do not match'
                                    })}
                                />
                                <RiLockPasswordFill size={24} color='#11111F' className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                            </div>
                            {errors.confirmPassword && <p className="text-red-500 text-xs font-semibold mt-2">{errors.confirmPassword.message}</p>}
                        </div>

                        <div className="mt-14">
                            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#84BD00] border border-transparent rounded-md font-semibold capitalize text-white">Create an account</button>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-white block text-center mt-4">
                                Already have an account?{' '}
                                <Link to="/" className="text-[#84BD00] hover:underline">Log in here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;

import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import useUser from '../../hooks/useUser';



export const AccountSettings = () => {
    const { user } = useAuth();
    const { deleteAccount } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleDeleteAccount = () => {
        toast(
            (t) => (
                <span>
                    Are you sure you want to delete your account? This action cannot be undone.
                    <div className="mt-4">
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                                deleteAccount(),
                                console.log("Account deleted");
                            }}
                            className="mr-2 rounded-lg bg-red-600 px-4 py-2 text-white"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="rounded-lg bg-gray-300 px-4 py-2 text-black"
                        >
                            No
                        </button>
                    </div>
                </span>
            ),
            {
                duration: Infinity,
            }
        );
    };

    return (
        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow mb-2">
            <div className="pt-4">
                <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
                <p className="font- text-slate-600">Manage your account settings to keep your information up-to-date and secure.</p>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Email Address</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-gray-900">Your email address is <strong>{user.email}</strong></p>
                {/* <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button> */}
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Password</p>
            <div className="flex items-center">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <label htmlFor="current-password">
                        <span className="text-sm text-gray-500">Current Password</span>
                        <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                            <input type="password" id="current-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                        </div>
                    </label>
                    <label htmlFor="new-password">
                        <span className="text-sm text-gray-500">New Password</span>
                        <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                            <input type="password" id="new-password" className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="***********" />
                        </div>
                    </label>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
            </div>
            <p className="mt-2">Can't remember your current password? <a className="text-sm font-semibold text-blue-600 underline decoration-2" href="#">Recover Account</a></p>
            <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">Save Password</button>
            <hr className="mt-4 mb-8" />

            <div className="mb-10">
                <p className="py-2 text-xl font-semibold">Delete Account</p>
                <button onClick={handleDeleteAccount} className="inline-flex font-semibold items-center rounded-full bg-rose-100 px-4 py-3 text-rose-600">
                    Delete account
                </button>
            </div>
        </div>
    );
};

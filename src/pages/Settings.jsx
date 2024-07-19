import React from 'react';
import Navbar from '../components/Navbar';
import { AccountSettings } from '../components/settings/AccountSettings';
import { Apply } from '../components/settings/Apply';
import { useState } from 'react';
import useUser from '../hooks/useUser';


const Settings = () => {

    const [active, setActive] = useState('account');
    const { user } = useUser();
    console.log(active)

    return (
        <>
            <Navbar />
            <div className="mx-4 min-h-[calc(100vh-96px)] max-w-screen-xl sm:mx-8 xl:mx-auto">
                <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
                <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
                    <div className="col-span-2 hidden sm:block">
                        <ul>

                            <li cursor="pointer"
                                onClick={() => setActive('account')}
                                className={`mt-5 border-l-2 px-2 py-2 font-semibold ${active === 'account' ? 'border-l-[#84BD00] text-[#84BD00] cursor-pointer' : 'border-l-gray-400 text-gray-400 cursor-pointer'}`}
                            >
                                Account
                            </li>


                            <li
                                onClick={() => setActive('apply')}
                                className={`mt-5 border-l-2 px-2 py-2 font-semibold ${active === 'apply' ? 'border-l-[#84BD00] text-[#84BD00] cursor-pointer' : 'border-l-gray-400 text-gray-400 cursor-pointer'}`}
                            >
                                Apply to be admin
                            </li>

                        </ul>
                    </div>

                    {
                        active === 'account' ? <AccountSettings /> : <Apply />
                    }

                </div>
            </div>
        </>
    );
}

export default Settings;

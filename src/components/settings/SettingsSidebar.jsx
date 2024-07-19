import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const SettingsSidebar = () => {
    const [active, setActive] = useState('account');

    return (
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
    );
}

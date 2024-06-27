import React from 'react'
import { TbReport } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { BsIncognito } from "react-icons/bs";

export const MainFunctionalities = () => {
    return (
        <div className="text-gray-400 bg-[#11111F]">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold text-center text-white mb-20">
                    Main Functionalities
                </h1>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {/* Publication */}
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#84BD00] mb-4 flex-shrink-0">
                            <TbReport size={24} />
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">Report</h2>
                            <p className="leading-relaxed text-lg">
                                Users can post problems or situations that require attention in their community, such as potholes, deteriorated playgrounds, or security issues. These posts can be viewed depending on their topic.
                            </p>
                        </div>
                    </div>
                    {/* Report Update */}
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#84BD00] mb-4 flex-shrink-0">
                            <RxUpdate size={24} className='stroke-1' />
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">Report Update</h2>
                            <p className="leading-relaxed text-lg">
                                Once the report is verified, users are notified about the measures taken and any relevant updates that occur during or after the resolution process.
                            </p>
                        </div>
                    </div>
                    {/* Anonymity */}
                    <div className="p-4 md:w-1/3 flex">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-[#84BD00] mb-4 flex-shrink-0">
                            <BsIncognito size={24} />
                        </div>
                        <div className="flex-grow pl-6">
                            <h2 className="text-white text-lg title-font font-medium mb-2">Anonymity</h2>
                            <p className="leading-relaxed text-lg">
                                Depending on the nature of the post, the platform can publish the user's report anonymously to protect their integrity. Verification would be conducted similarly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import Navbar from '../components/Navbar';
import { FaArrowDown } from "react-icons/fa";
import Footer from '../components/common/Footer';

const HowToPublish = () => {
    return (
        <>
            <Navbar />
            <div className='bg-gray-100 py-5'>

                <div className=' min-h-[calc(100vh-96px)] flex flex-col items-center '>
                    <div className="p-4 max-w-xl mx-auto">
                        <h2 className="font-heading text-gray-900 mb-8 text-3xl font-bold lg:text-4xl">
                            How to publish your alert within a neighbor alert
                        </h2>

                        <div className="flex mb-8">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00]">
                                        <FaArrowDown className=" text-[#11111F]" />
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 1</p>
                                <p className="text-gray-600">
                                    Click on the input box labeled "Click to create a post…" to start the process.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-8">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00]">
                                        <FaArrowDown className="text-[#11111F]" />
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 2</p>
                                <p className="text-gray-600">
                                    Provide a title for your alert in the "Title" field (optional). The title should be a brief summary of your alert, making it easy for others to quickly understand the subject of your post.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-8">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00]">
                                        <FaArrowDown className=" text-[#11111F]" />
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 3</p>
                                <p className="text-gray-600">
                                    Choose the appropriate category for your alert from the dropdown menu. Categories help to organize alerts so that users can easily find relevant information. Options typically include General, Event, News, Job, and Housing.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-8">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00]">
                                        <FaArrowDown className=" text-[#11111F]" />
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 4</p>
                                <p className="text-gray-600">
                                    In the "Report Description" field, write a brief description of the alert. This description should include all necessary details, such as the who, what, when, where, and why of the alert, to provide clear and comprehensive information.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-8">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00]">
                                        <FaArrowDown className=" text-[#11111F]" />
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 5</p>
                                <p className="text-gray-600">
                                    If you want to add images to your alert, click on the upload area in the "Preview" section. Adding images can help provide visual context and make your alert more informative and engaging.
                                </p>
                            </div>
                        </div>

                        <div className="flex mb-8">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00]">
                                        <FaArrowDown className=" text-[#11111F]" />
                                    </div>
                                </div>
                                <div className="h-full w-px bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 6</p>
                                <p className="text-gray-600">
                                    If you wish to post the alert anonymously, select the "Post anonymously" option. Posting anonymously can be useful if you want to share sensitive information without revealing your identity.
                                </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#84BD00] bg-[#84BD00]">
                                        <FaArrowDown className=" text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-1">
                                <p className="mb-2 text-xl font-bold text-gray-900">Step 7</p>
                                <p className="text-gray-600">
                                    Click the "Create Post" button to publish your alert. Once you click this button, your alert will be visible to other users on the platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default HowToPublish;

import React from 'react';
import Navbar from '../../components/Navbar';
import useAuth from '../../hooks/useAuth';
import hero from '../../assets/hero.svg';
import { TbReport } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import { BsIncognito } from "react-icons/bs";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <Navbar />

            <div className="bg-[#11111F] min-h-[calc(100vh-80px)] flex items-start md:items-center py-10 md:py-0">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
                            <img
                                src={hero}
                                alt="Hero Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 lg:w-1/2">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                                Welcome to  <br className="hidden md:block" />
                                <span className="text-[#84BD00]">Neighbor Alert!</span>
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                                NeighborAlert is a digital tool for community members to report and resolve local issues collaboratively. It promotes safety, cleanliness, and prosperity by empowering users to post problems, receive updates, and maintain privacy.
                            </p>
                            <div className='flex justify-center'>
                                <Link to='/register' className="btn btn-lg mx-2 border border-none my-auto bg-[#84BD00] hover:bg-[#92c752] text-white">
                                    Join Us Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-gray-400 bg-[#11111F]">
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
            </section>
            <Footer />
        </>


    );
};

export default Home;

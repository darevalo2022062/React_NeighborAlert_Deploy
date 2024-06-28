import React from 'react'
import { Link } from 'react-router-dom';
import hero from '../../assets/svg/homehero.svg';

export const HeroSection = () => {
    return (
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
                            <Link to='/register' className="btn rounded-full btn-lg mx-2 border border-none my-auto bg-[#84BD00] hover:bg-[#92c752] text-white">
                                Join Us Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

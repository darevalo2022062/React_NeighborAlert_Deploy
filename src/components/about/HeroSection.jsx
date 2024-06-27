import React from 'react'
import hero from '../../assets/svg/abouthero.svg';

export const HeroSection = () => {
    return (
        <div className='flex justify-center bg-[#11111F]'>
            <div className="sm:flex items-center h-auto sm:h-[36rem] max-w-screen-xl">
                <div className="sm:w-1/2 p-10 w-full">
                    <div className="image object-center text-center">
                        <img src={hero} className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="sm:w-1/2 p-10 sm:p mb-10 sm:mb-0">
                    <div className="text">
                        <span className="text-white border-b-4 border-[#84BD00] uppercase">About us</span>
                        <h2 className="text-white my-4 font-bold text-4xl sm:text-5xl">About <span className="text-[#84BD00]">Us</span></h2>
                        <p className="text-gray-400 font-normal text-lg md:text-xl l">
                            At Neighbor Alert, we believe in the power of community and collaboration. Our platform is designed to help neighbors identify, share, and resolve local issues effectively.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

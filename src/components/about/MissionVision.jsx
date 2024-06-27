import React from 'react'
import mission from '../../assets/svg/mission.svg';
import vision from '../../assets/svg/vision.svg';

export const MissionVision = () => {
    return (
        <>
            <div className="flex justify-center max-w-screen py-8 sm:py-16">
                <div className="container flex flex-col md:flex-row gap-10 md:gap-20">
                    <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mission</h2>
                        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our mission at NeighborAlert is to facilitate collaboration and solidarity within communities by providing a digital platform where members can identify, share, and resolve local issues together. We believe in fostering an environment where neighbors can actively contribute to making their community a safer, cleaner, and more prosperous place. By leveraging technology, we aim to empower individuals to take collective action on problems ranging from local infrastructure issues to safety concerns, ensuring that every voice is heard and every problem addressed.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex items-center justify-center order-1 md:order-2">
                        <img src={mission} className='w-full h-full' alt="Mission" />
                    </div>
                </div>
            </div>

            <div className="flex justify-center max-w-screen py-8 sm:py-16">
                <div className="container flex flex-col md:flex-row gap-10 md:gap-20">
                    <div className="w-full md:w-1/2 p-4 flex items-center justify-center order-1">
                        <img src={vision} className='w-full h-full' alt="Vision" />
                    </div>
                    <div className="w-full md:w-1/2 p-4 order-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Vision</h2>
                        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our vision is to become a leading digital tool for community problem-solving globally. We aspire to empower individuals to work together towards the betterment and strengthening of their communities. By offering a platform that supports and enhances community collaboration, we aim to create a positive and lasting impact on society. Our goal is to help people overcome local challenges through mutual support and cooperation, fostering a sense of unity and resilience. We envision a world where every community has the resources and tools to thrive, and where NeighborAlert plays a pivotal role in facilitating sustainable growth and improvement.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

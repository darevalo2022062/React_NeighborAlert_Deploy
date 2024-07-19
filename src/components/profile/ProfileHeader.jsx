import React from 'react'

export const ProfileHeader = ({ user }) => {
    console.log("🚀 ~ ProfileHeader ~ user:", user)
    return (
        <section class="relative pt-40  ">
            <div  alt="cover-image" class="bg-slate-900 w-full absolute top-0 left-0 z-0 h-60" />
            <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div class="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                    <img src={user.img} alt="user-avatar-image" class="border-4 h-44 w-44 object-cover border-solid border-white rounded-full" />
                </div>
                <div class="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                    <div class="block">
                        <h3 class="font-manrope font-bold text-4xl text-gray-900 mb-1">{`${user.name} ${user.lastName}`}</h3>
                    </div>
                    
                </div>
            
            </div>
        </section>
    )
}

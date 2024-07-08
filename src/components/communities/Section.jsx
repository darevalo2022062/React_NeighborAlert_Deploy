import React from 'react'

export const Section = ({ community }) => {
    const { name, location, description, img, createdAt } = community;
    return (
        <>
            <div className="min-h-[calc(100vh-96px)] pb-6 mx-auto">
                <img src={img} alt="Featured image" className="w-full h-64 sm:h-96 object-cover" />
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-8">
                        <h1 className="text-5xl font-bold mb-2">{name}</h1>
                        <p className="text-gray-500 text-sm">Published on </p>
                    </div>
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}

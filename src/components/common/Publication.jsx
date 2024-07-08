import { format, parseISO } from 'date-fns';
import React from 'react';
import { CiShare2 } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import ImageGallery from './ImageGallery';

export const Publication = ({ post, deletePost, user }) => {

    const { _id, idUser, title, content, category, anonymous, createdAt } = post;

    const formatDate = (isoString) => {
        const date = parseISO(isoString);
        return format(date, "dd MMMM 'at' hh.mm a");
    };


    const images = [
        'https://placehold.co/600x400',
        'https://img.freepik.com/vector-gratis/minimalista-marco-blanco_23-2147504491.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1719964800&semt=ais_user',
        'https://placehold.co/600x400',
    ];

    const formattedDate = formatDate(createdAt);

    return (
        <div className="border max-w-screen-sm bg-white my-6 shadow-2xl rounded-2xl p-5 w-full">
            <div className="flex items-center justify-between">
                <div className="gap-3.5 flex items-center">
                    {anonymous ? (
                        <>
                            <img
                                src="https://i.ibb.co/Wg3WSP6/icon.jpg"
                                className="object-cover bg-yellow-500 border border-gray-500 rounded-full w-14 h-14"
                                alt="Profile"
                            />
                            <div className="flex flex-col">
                                <b className="mb-2 capitalize">User Anonymous</b>
                                <time dateTime={createdAt} className="text-gray-400 text-xs">{formattedDate}</time>

                            </div>
                        </>
                    ) : (
                        <>
                            <img
                                src={idUser.img}
                                className="object-cover bg-transparent rounded-full w-14 h-14"
                                alt="Profile"
                            />
                            <div className="flex flex-col">
                                <b className="mb-2 capitalize">{`${idUser.name} ${idUser.lastName}`}</b>
                                <time dateTime={createdAt} className="text-gray-400 text-xs">{formattedDate}</time>
                            </div>
                        </>
                    )}
                </div>
                <div className="dropdown dropdown-bottom dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-circle btn-sm m-1 btn-ghost">
                        <SlOptions />

                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {user && user.id === idUser?._id && (
                            <li><button onClick={() => deletePost(_id)}>Delete post</button></li>
                        )}
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className="whitespace-pre-wrap mt-7">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                {content}
            </div>
            <div className="mt-2 text-blue-500">{category}</div>

            <div className="mt-5 flex gap-2 justify-center border-b pb-4 flex-wrap">
                <ImageGallery images={images} />
            </div>
            <div className="h-16 border-b flex items-center justify-around">
                <div className="flex items-center gap-3">
                    <GoComment size='24' color='gray' />
                    <div className="text-sm">10 Comments</div>
                </div>
                <div className="flex items-center gap-3">
                    <CiShare2 size='24' color='gray' />

                    <div className="text-sm">Share</div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <img
                    src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    className="bg-yellow-500 rounded-full w-10 h-10 object-cover border"
                    alt="User profile"
                />
                <div className="flex items-center justify-between bg-gray-50 h-11 w-11/12 border rounded-2xl overflow-hidden px-4">
                    <input type="text" className="h-full w-full bg-gray-50 outline-none" placeholder="Write your comment..." name="comment" />
                </div>
            </div>
        </div>
    );
};

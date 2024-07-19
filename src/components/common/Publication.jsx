import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { CiShare2 } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import ImageGallery from './ImageGallery';

export const Publication = ({ post, deletePost, user }) => {
    const { _id, idUser, title, content, category, anonymous, createdAt, file } = post;
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => setShowFullContent(!showFullContent);

    const contentPreview = content.length > 100 ? `${content.slice(0, 100)}...` : content;

    return (
        <div className="border bg-white mt-6 shadow-2xl rounded-xl w-full">
            <div className="flex items-center justify-between p-5">
                <UserInfo anonymous={anonymous} user={user} createdAt={createdAt} />
                <DropdownMenu user={user} postUserId={idUser} deletePost={deletePost} postId={_id} />
            </div>
            <div className="whitespace-pre-wrap  px-5">
                <h1 className="text-2xl font-bold">{title}</h1>
                {showFullContent ? content : contentPreview}
                {content.length > 100 && (
                    <button onClick={toggleContent} className="text-blue-500">
                        {showFullContent ? "Show less" : "Show more"}
                    </button>
                )}
            </div>
            <div className="text-blue-500 px-5">{category}</div>
            <div className="mt-2">
                <ImageGallery images={file} />
            </div>
            <div className="h-16 border-b flex items-center justify-around px-5">
                <button className="w-1/2  flex items-center justify-center text-center gap-3">
                    <GoComment size='24' color='gray' />
                    10 Comments
                </button>
                <div className="divider divider-horizontal"></div>
                <button className="w-1/2 flex items-center justify-center text-center gap-3">
                    <CiShare2 size='24' color='gray' />
                    Share
                </button>
            </div>
        </div>
    );
};


const formatDate = (isoString) => {
    const date = parseISO(isoString);
    return format(date, "dd MMMM 'at' hh.mm a");
};

const UserInfo = ({ anonymous, user, createdAt }) => {
    const formattedDate = formatDate(createdAt);
    return (
        <div className="gap-3.5 flex items-center">
            <img
                src={anonymous ? "https://i.ibb.co/Wg3WSP6/icon.jpg" : user.img}
                className="object-cover bg-yellow-500 border border-gray-500 rounded-full w-14 h-14"
                alt="Profile"
            />
            <div className="flex flex-col">
                <b className="mb-2 capitalize">
                    {anonymous ? "User Anonymous" : `${user.name} ${user.lastName}`}
                </b>
                <time dateTime={createdAt} className="text-gray-400 text-xs">{formattedDate}</time>
            </div>
        </div>
    );
};

const DropdownMenu = ({ user, postUserId, deletePost, postId }) => {

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle btn-sm m-1 btn-ghost">
                <SlOptions />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {user && user.id === postUserId._id && (
                    <li><button onClick={() => deletePost(postId)}>Delete post</button></li>
                )}
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

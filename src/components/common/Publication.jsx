import { format, parseISO } from 'date-fns';
import React, { useState } from 'react';
import { CiShare2 } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import ImageGallery from './ImageGallery';
import useComment from '../../hooks/useComment';

export const Publication = ({ post, deletePost, user }) => {
    const { _id, idUser, title, content, category, anonymous, createdAt, file } = post;
    const [showFullContent, setShowFullContent] = useState(false);
    const { comments, error, isLoading, quantity, createComment } = useComment(_id);
    const [commentText, setCommentText] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [visibleComments, setVisibleComments] = useState(1);

    const toggleContent = () => setShowFullContent(!showFullContent);

    const contentPreview = content.length > 100 ? `${content.slice(0, 100)}...` : content;

    const handleCommentChange = (e) => setCommentContent(e.target.value);

    const handleAddComment = async () => {
        await createComment({ idPost: _id, content: commentContent, anonymous: false });
        setCommentContent('');
    };

    const handleShowMoreComments = () => {
        setVisibleComments(prev => Math.min(prev + 3, comments.length));
    };

    const handleShowLessComments = () => {
        setVisibleComments(1);
    };

    return (
        <div className="border bg-white mt-6 shadow-2xl rounded-xl w-full">
            <div className="flex items-center justify-between p-5">
                <UserInfo anonymous={anonymous} user={user} createdAt={createdAt} />
                <DropdownMenu user={user} postUserId={idUser} deletePost={deletePost} postId={_id} />
            </div>
            <div className="whitespace-pre-wrap px-5">
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
                <button className="w-1/2 flex items-center justify-center text-center gap-3">
                    <GoComment size='24' color='gray' />
                    {quantity} {quantity === 1 ? 'Comment' : 'Comments'}
                </button>
                <div className="divider divider-horizontal"></div>
                <button className="w-1/2 flex items-center justify-center text-center gap-3">
                    <CiShare2 size='24' color='gray' />
                    Share
                </button>
            </div>
            <div className="flex items-center justify-between p-3">
                <img
                    src={user.img}
                    className="rounded-full mx-2 w-10 h-10 object-cover border"
                    alt="User profile"
                />
                <div className="flex items-center justify-between bg-gray-50 h-12 w-11/12 border rounded-2xl overflow-hidden ">
                    <input
                        type="text"
                        className="h-full w-full bg-gray-50 outline-none px-4"
                        placeholder="Write your comment..."
                        name="comment"
                        value={commentContent}
                        onChange={handleCommentChange}
                    />
                    <button
                        onClick={handleAddComment}
                        className={`ml-2 px-4 py-3 ${commentContent ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                        disabled={!commentContent}
                    >
                        Comment
                    </button>
                </div>
            </div>
            <div className="px-5 py-3">
                {isLoading ? (
                    <p>Loading comments...</p>
                ) : error ? (
                    <p>Error loading comments: {error.message}</p>
                ) : (
                    <>
                        {comments.slice(0, visibleComments).map(comment => (
                            <div key={comment._id} className="flex items-start space-x-4 py-2">
                                <img
                                    src={comment.idUser.img}
                                    className="rounded-full w-10 h-10 object-cover border"
                                    alt="Commenter profile"
                                />
                                <div className="flex flex-col bg-gray-100 p-3 rounded-xl w-full">
                                    <div className="flex items-center justify-between">
                                        <b className="text-sm">{`${comment.idUser.name} ${comment.idUser.lastName}`}</b>
                                    </div>
                                    <p className="text-sm">{comment.content}</p>
                                </div>
                            </div>
                        ))}
                        {visibleComments < comments.length && (
                            <button onClick={handleShowMoreComments} className="text-blue-500">
                                Show more comments
                            </button>
                        )}
                        {visibleComments > 1 && (
                            <button onClick={handleShowLessComments} className="text-blue-500 ml-2">
                                Show less comments
                            </button>
                        )}
                    </>
                )}
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
                {user && user.id === postUserId?._id && (
                    <li><button onClick={() => deletePost(postId)}>Delete post</button></li>
                )}
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
    );
};

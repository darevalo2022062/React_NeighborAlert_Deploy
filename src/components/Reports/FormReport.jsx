import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Input from '../common/Input';
import { useForm } from 'react-hook-form';

export const FormReport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <button onClick={openModal} className="px-4 py-2 bg-indigo-500 text-white rounded-md">
                Open Modal
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="mx-auto w-10/12 max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Report Form
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="mx-auto flex flex-col">
                                            <div className='mb-5'>
                                                <Input
                                                    type={'email'}
                                                    label={"Title"}
                                                    name={'email'}
                                                    color={' text-gray-900'}
                                                    placeholder={'Enter your email address'}
                                                    register={register}
                                                    rules={{
                                                        required: 'Email is required', pattern: {
                                                            value: /^\S+@\S+$/i,
                                                            message: 'Invalid email address'
                                                        }
                                                    }}
                                                    error={errors.email}

                                                />
                                            </div>
                                            <label className='block text-gray-900 font-bold mb-2' htmlFor='content'>Description</label>
                                            <textarea id='content' className="h-60 bg-gray-100 w-full text-gray-800 text-lg px-4 py-3.5 rounded-md transition-all focus:outline-none focus:ring-[3px] focus:ring-[#84BD00]" spellCheck="false" placeholder="Describe everything about this post here"></textarea>
                                            <div className="icons flex text-gray-500 m-2">
                                                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                                                <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                                            </div>
                                            <div className="buttons flex">
                                                <button onClick={closeModal} className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</button>
                                                <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

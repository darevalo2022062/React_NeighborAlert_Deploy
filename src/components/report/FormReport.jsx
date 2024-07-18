import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { ComboBox } from '../common/ComboBox';
import Input from '../common/Input';
import { InputFile } from '../common/InputFile';
import TextArea from '../common/TextArea';
import { CheckBox } from '../common/CheckBox';
import { Dialog, Transition } from '@headlessui/react';
import { FaPen, FaPlus } from 'react-icons/fa';
import usePost from '../../hooks/usePost';

export const FormReport = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const { createPost, loading } = usePost();

    const options = [
        { value: '#general', label: 'General' },
        { value: '#event', label: 'Event' },
        { value: '#news', label: 'News' },
        { value: '#job', label: 'Job' },
        { value: '#housing', label: 'Housing' }
    ];

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = isOpen ? 'hidden' : originalOverflow;
        return () => document.body.style.overflow = originalOverflow;
    }, [isOpen]);

    const onSubmit = async (data) => {
        console.log(data);
        data.title = data.title.toUpperCase();
        createPost(data, closeModal);
    };

    function closeModal() {
        setIsOpen(false);
        reset();
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="relative flex items-center w-full  mx-auto mt-5">
                <div
                    className="relative w-full cursor-pointer py-4 pl-10 pr-5 rounded-3xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#84BD00] focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-white border border-gray-300"
                    onClick={openModal}
                >
                    <input
                        type="text"
                        readOnly
                        placeholder="Click to create a post..."
                        className="w-full bg-transparent focus:outline-none"
                    />
                    <FaPlus className="absolute top-1/2 transform -translate-y-1/2 right-4 text-[#84BD00] font-bold" size={18} />
                </div>
            </div>


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
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                                    <div className="mt-0 max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#84BD00] scrollbar-track-[#f5f5f5] scrollbar-thumb-rounded scrollbar-track-rounded">
                                        <form className="max-w-5xl w-full p-8 md:p-14" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <Input
                                                        type={'text'}
                                                        color={'text-gray-900'}
                                                        label={"Title"}
                                                        name={'title'}
                                                        placeholder={'Enter your title'}
                                                        register={register}
                                                        optional={true}
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <ComboBox
                                                        label="Select a category"
                                                        name="category"
                                                        placeholder="Select an option"
                                                        options={options}
                                                        register={register}
                                                        rules={{ required: 'You must select an option' }}
                                                        error={errors.category}
                                                        color="text-gray-700"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <TextArea
                                                    label="Report Description"
                                                    name="content"
                                                    placeholder="Write the report here ..."
                                                    rows={5}
                                                    cols={50}
                                                    register={register}
                                                    rules={{ required: 'Description is required' }}
                                                    error={errors.content}
                                                    color="text-gray-700"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <InputFile register={register} setValue={setValue} name="file" multiple />
                                            </div>
                                            <div className="mb-4 flex items-center">
                                                <CheckBox
                                                    label={'Post anonymously'}
                                                    name={'anonymous'}
                                                    register={register}
                                                    error={errors.anonymous}
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-full border border-transparent bg-rose-500 px-7 py-4 mx-2 text-sm text-white font-bold hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="bg-[#84BD00] hover:bg-[#92c752] text-white font-bold py-4 px-6 rounded-full focus:outline-none focus:shadow-outline"
                                                >
                                                    {loading ? 'Creating publication...' : 'Create Post'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

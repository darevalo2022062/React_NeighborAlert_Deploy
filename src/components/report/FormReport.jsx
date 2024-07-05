import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ComboBox } from '../common/ComboBox';
import Input from '../common/Input';
import { InputFile } from '../common/InputFile';
import TextArea from '../common/TextArea';
import { CheckBox } from '../common/CheckBox';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import usePost from '../../hooks/usePost';

export const FormReport = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isOpen, setIsOpen] = useState(false);
    const { createPost, loading } = usePost();
    

    const options = [
        { value: '#general', label: 'General' },
        { value: '#event', label: 'Event' },
        { value: '#news', label: 'News' },
        { value: '#job', label: 'Job' },
        { value: '#housing', label: 'Housing' }
    ];

    const onSubmit = async (data) => {
        console.log(data)
        data.title = data.title.toUpperCase()
        createPost(data, closeModal)
    };

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="bg-[#84BD00] hover:bg-[#92c752] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
                Create post
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
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="mt-0">
                                        <form className="max-w-5xl w-full p-8" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <Input
                                                        type={'text'}
                                                        color={'text-gray-900'}
                                                        label={"Title"}
                                                        name={'title'}
                                                        placeholder={'Enter your email address'}
                                                        register={register}
                                                        rules={{
                                                            required: 'Title is required'
                                                        }}
                                                        error={errors.title}
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
                                                <InputFile />
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
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
                                    <div className="mt-4">
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
